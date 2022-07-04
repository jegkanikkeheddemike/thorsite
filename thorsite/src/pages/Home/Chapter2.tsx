import { Component } from "solid-js";
import { Specs } from "../Specs/Specs";

export const Chapter2: Component = () => {
    return (
        <div class="chapter_2 chapter">
            <div class="chapter_2_text">
                <h2>
                    Om hjemmesiden
                </h2>
                <h3>
                Hjemmesiden, som er bygget med Rocket / Rust som
                backend, og solid-js from frotend

                </h3>
            </div>
            <div class="chapter_2_specs">
                <Specs />
            </div>

        </div>
    )
}