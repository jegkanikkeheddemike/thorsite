import { Component } from "solid-js";

export const Chapter1:Component = () => {
    return (
        <div class="chapter_1 chapter">
                <div class="chapter_1_titletext">
                    <h2>
                        En self-hosted hjemmeside,<br />
                        bygget med solid js og Rocket / Rust
                    </h2>
                    <h3>
                        Man kan prøve eller downloade alle projekterne her. De kan også findes på <a href="https://github.com/jegkanikkeheddemike">github </a>
                    </h3>
                </div>
                <div class="chapter_1_images">
                    <img src="http://thorprojekter.live/chat_app.png" />
                    <img src="http://thorprojekter.live/selvl%C3%A6rende_biler.png" />
                    <img src="http://thorprojekter.live/directtransfer.png"/>
                    <img src="http://thorprojekter.live/ZombieGame.png"/>
                </div>

            </div>
    )
}