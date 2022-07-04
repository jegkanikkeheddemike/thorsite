import { Link } from "solid-app-router";
import { Component } from "solid-js";

import "./App.css"

export const Navbar: Component = () => {
    return (
        <nav class="navbar">
            <li >
                <NavElement href="/" title="Home" />
                <NavElement href="/specs" title="Specs" />
            </li>
        </nav>
    )
}

const NavElement: Component<{ href: string, title: string }> = (props) => {
    return (
        <Link class="nav_link" href={props.href} >{props.title}</Link>
    )
}