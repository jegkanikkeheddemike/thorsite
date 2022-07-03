cd thorsite
npm install
npm run build
cd ..
rm -rf target/release/build
cargo build --release
./target/release/server