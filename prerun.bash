cd thorsite
npm install
npm run build
cd ..
rm -rf target/release/build/actix-web-static-files*
cargo build --release
./target/release/server