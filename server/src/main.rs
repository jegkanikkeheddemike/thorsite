use std::path::PathBuf;

use actix_files::NamedFile;
use actix_web::{get, App, HttpRequest, HttpServer};

#[get("/")]
async fn index(req: HttpRequest) -> actix_web::Result<NamedFile> {
    let path: PathBuf = req.match_info().query("filename").parse().unwrap();
    Ok(NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> Result<(), std::io::Error> {
    HttpServer::new(|| App::new().service(index))
        .bind(("0.0.0.0", 3002))?
        .run()
        .await
}
