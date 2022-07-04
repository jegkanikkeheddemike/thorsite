//#[macro_use] extern crate rocket;

use rocket::{get, launch, routes, fs::{FileServer, self}};

mod api;
use crate::api::specs_logo;
use crate::api::specs_info;

#[get("/")]
async fn home() -> Option<fs::NamedFile> {
    fs::NamedFile::open("./thorsite/build/index.html").await.ok()
}

#[get("/specs")]
async fn specs() -> Option<fs::NamedFile> {
    fs::NamedFile::open("./thorsite/build/index.html").await.ok()
}

#[launch]
fn rocket() -> _ {
    let server = rocket::build()
        .mount("/", routes![home,specs])
        .mount("/api", routes![specs_info, specs_logo])
        .mount("/static", FileServer::from("./thorsite/build/static"));
    println!("Server listening on port 3002");
    server
}
