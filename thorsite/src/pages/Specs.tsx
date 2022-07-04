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
        
        let logo = ""
        
        const legal_chars = [" ","o","s","+","-","/",".", "`", ":", "\n"]

        for (let i = 0; i < logo_raw.length; i ++) {
            let c = logo_raw.charAt(i)
            if (legal_chars.includes(c)) {
                logo += c
            }
        }

        setlogo(logo)
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