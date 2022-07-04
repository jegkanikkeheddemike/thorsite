import { Component, createSignal } from "solid-js";

import "./Specs.css"

export const Specs: Component = () => {

    let [logo, setlogo] = createSignal("")
    let [info, setinfo] = createSignal("")

    async function fetch_specs() {
        let logo_res = fetch("/api/specs/logo")
        let info_res = fetch("/api/specs/info")

        let logo_res1 = await logo_res
        let info_res1 = await info_res

        let logo_res2 = logo_res1.text()
        let info_res2 = info_res1.text()

        let logo_raw = await logo_res2
        let info_raw = await info_res2

        let first_space = logo_raw.indexOf(" ")
        logo_raw = logo_raw.substring(first_space)
        let last_logo_char = logo_raw.indexOf("[")
        logo_raw = logo_raw.substring(0, last_logo_char)
        setlogo(logo_raw)
        setinfo(info_raw)
    }
    fetch_specs()

    return (
        <div class={"specs_container"}>
            <div class={"specs_logo"}>
                <pre>
                    {logo()}
                </pre>
            </div>
            <div class={"specs_info"}>
                <pre>
                    {info()}
                </pre>
            </div>

        </div>
    )
}