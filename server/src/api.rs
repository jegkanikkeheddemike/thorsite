use rocket::get;
use tokio::process::Command;

#[get("/specs/logo")]
pub async fn specs_logo() -> String {
    
    let output = Command::new("neofetch")
        .arg("--logo")
        .arg("--iterm2")
        .output()
        .await
        .unwrap();
    let logo = String::from_utf8_lossy(&output.stdout).to_string();
    logo
}

#[get("/specs/info")]
pub async fn specs_info() -> String {
    let output = Command::new("neofetch")
        .arg("--stdout")
        .output()
        .await
        .unwrap();
    let info = String::from_utf8_lossy(&output.stdout).to_string();

    info
}