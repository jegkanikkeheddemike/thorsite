//#[macro_use] extern crate rocket;

use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::{Header, Method};
use rocket::Response;
use rocket::{
    fs::{self, FileServer},
    get, launch, routes, Request,
};

mod api;
use crate::api::specs_info;
use crate::api::specs_logo;

#[get("/")]
async fn home() -> Option<fs::NamedFile> {
    fs::NamedFile::open("./thorsite/build/index.html")
        .await
        .ok()
}

#[get("/specs")]
async fn specs() -> Option<fs::NamedFile> {
    fs::NamedFile::open("./thorsite/build/index.html")
        .await
        .ok()
}

#[launch]
fn rocket() -> _ {

    let server = rocket::build()
        .mount("/", routes![home, specs])
        .mount("/api", routes![specs_info, specs_logo])
        .mount("/static", FileServer::from("./thorsite/build/static"))
        .attach(CORS);
    println!("Server listening on port 3002");
    server
}

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST GET PATCH OPTIONS HEAD",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}
