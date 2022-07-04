import { Component, createSignal } from "solid-js";

export const Specs: Component = () => {

    let [logo, setlogo] = createSignal("")
    
    async function fetch_specs() {
        let res = await fetch("/api/specs/logo")
        let logo = await res.text()

        let first_space = logo.indexOf(" ")
        logo = logo.substring(first_space)
        let last_logo_char = logo.indexOf("[")
        logo = logo.substring(0,last_logo_char)
        setlogo(logo)
    }
    fetch_specs()

    return (
        <div>
            <pre>
                {logo}
            </pre>
        </div>
    )
}