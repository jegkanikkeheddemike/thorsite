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
                    Hjemmesiden, som er bygget med Rocket / Rust
                    backend og solid-js frotend, bliver hosted på
                    en gammel computer jeg købte på dba. Jeg lavede
                    hjemmesiden fordi jeg hørte om github weebhooks
                    og gerne ville prøve at implementere dem.<br /><br />

                    Webhooks er en feature hvor github sender en
                    JSON fil til en givet ip adresse hver gang der
                    bliver pushed til dit repo. Det betyder at man
                    kan have et repo med sin hjemmeside, hvor når man
                    fra sin pc pusher, ville serveren kunne vide at
                    den skal pulle. <br /> <br />

                    Jeg har derfor skrevet en<span> </span>
                    <a href="https://github.com/jegkanikkeheddemike/servercontainer">servercontainer</a>
                    <span> </span>i rust, som lytter på den givet adresse, og når
                    den får en http post fra github:
                    <ul>
                        <li>Lukker den severen</li>
                        <li>puller fra repo</li>
                        <li>henter nye frontend dependencies</li>
                        <li>builder den nye frontend</li>
                        <li>henter nye rust dependencies</li>
                        <li>compiler severen</li>
                        <li>kørerer severen</li>
                    </ul>

                </h3>
            </div>
            <div class="chapter_2_specs">
                <Specs />
            </div>
            <div class="chapter_2_text_2">
                <h2>Om computeren</h2>
                <h3>
                    Computeren som hjemmesiden bliver hosted på er
                    en gammel laptop som jeg købte på dba.
                    Da windows kræver at den en gang i mellem bliver
                    genstartet, er linux det klart bedste valg for servere.
                    Derfor installerede jeg Arch linux på den, men uden
                    et desktop enviroment og window manager. Fordi den kører
                    direkte i shell, bruger operativ systemet en meget lidt
                    memory, og computeren spilder ikke CPU på at render
                    en skærm der ikke bliver brugt. At serveren kører linux
                    er det også lettere at debugge fra min pc. Da jeg selv 
                    bruger distroet Zorin OS.
                </h3>
            </div>
        </div>
    )
}
