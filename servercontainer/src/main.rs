use std::{
    process::{Child, Command},
    sync::Mutex,
};

use actix_web::{post, App, HttpServer, Responder};

lazy_static::lazy_static! {
    static ref PROCESS:Mutex<Option<Child>> = Mutex::new(None);
}

fn spawn() -> Child {
    Command::new("bash").arg("run.bash").spawn().unwrap()
}

#[post("/")]
async fn webhook_listen(_: String) -> impl Responder {
    let mut lock = PROCESS.lock().unwrap();
    let _ = lock.as_mut().unwrap().kill();

    //pull
    let output = Command::new("git")
        .args(["pull", "https://github.com/jegkanikkeheddemike/thorsite"])
        .output()
        .unwrap();

    println!("Pulled from github:\n{}", String::from_utf8(output.stdout).unwrap());

    *lock = Some(spawn());

    ""
}

#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    *PROCESS.lock().unwrap() = Some(spawn());

    HttpServer::new(|| App::new().service(webhook_listen))
        .bind(("0.0.0.0", 3001))?
        .run()
        .await
}
