import { Link } from "solid-app-router";
import { Component } from "solid-js";

import "./App.css"

export const Navbar: Component = () => {
    return (
        <ul class="navbar">
            <NavElement href="/" title="Home" />
            <NavElement href="/specs" title="Specs" />
        </ul>
    )
}

const NavElement: Component<{ href: string, title: string }> = (props) => {
    return (
        <li class="nav_link">
            <Link href={props.href} >{props.title}</Link>
        </li>
    )
}