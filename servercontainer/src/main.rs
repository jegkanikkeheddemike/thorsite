use std::{
    process::{Child, Command},
    sync::Mutex,
};

use actix_web::{post, App, HttpServer, Responder};

lazy_static::lazy_static! {
    static ref PROCESS:Mutex<Option<Child>> = Mutex::new(None);
}

fn spawn() -> Child {
    let mut prerun = Command::new("bash").arg("prerun.bash").spawn().unwrap();
    prerun.wait().unwrap();

    println!("Finished prerun, starting server");

    let child = Command::new("./target/release/server").spawn().unwrap();

    println!("Server started");
    
    child
}

fn pull() {
    let output = Command::new("git").args(["reset", "--hard"]).output().unwrap();

    println!(
        "Git reset:\n{}",
        String::from_utf8(output.stdout).unwrap()
    );

    let output = Command::new("git").args(["pull"]).output().unwrap();

    println!(
        "Pulled from github:\n{}",
        String::from_utf8(output.stdout).unwrap()
    );
}

#[post("/")]
async fn webhook_listen(_: String) -> impl Responder {
    println!("Prekill");

    let mut lock = PROCESS.lock().unwrap();
    let _ = lock.as_mut().unwrap().kill();

    println!("Postkill");

    //pull
    pull();

    *lock = Some(spawn());

    println!("Post spawn");
    ""
}

#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    ctrlc::set_handler( || {
        let mut lock = PROCESS.lock().unwrap();
        let mut process = lock.take().unwrap();
        process.kill().unwrap();
        process.wait().unwrap();
        println!("\nClosed server");
    }).unwrap();


    pull();
    {
        *PROCESS.lock().unwrap() = Some(spawn());
    }
    

    let container = HttpServer::new(|| App::new().service(webhook_listen))
        .bind(("0.0.0.0", 3001))?
        .run();

    println!("Container listening");

    container.await
}
