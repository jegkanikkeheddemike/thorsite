import { Component } from "solid-js";
import { Chapter1 } from "./Chapter1";
import { Chapter2 } from "./Chapter2";

import "./Home.css"

export const Home: Component = () => {
    return (
        <div class="home">
            <h1>Thor projekter</h1>
            <Chapter1 />
            <Chapter2 />
        </div>
    )
}