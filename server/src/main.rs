use std::process::Command;

use actix_web::{get, App, HttpRequest, HttpServer, Responder};
use actix_web_static_files::ResourceFiles;

#[get("/specs")]
async fn specs(_: HttpRequest) -> impl Responder {
    let stdout = Command::new("neofetch").output().unwrap().stdout;

    let specs = String::from_utf8_lossy(&stdout).to_string();

    specs
}

include!(concat!(env!("OUT_DIR"), "/generated.rs"));

#[actix_web::main]
async fn main() -> Result<(), std::io::Error> {
    HttpServer::new(|| {
        let generated = generate();

        let mut app = App::new();
        app = app.service(specs);
        app = app.service(ResourceFiles::new("/", generated));

        app
    })
    .bind(("0.0.0.0", 3002))?
    .run()
    .await
}
