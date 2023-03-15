import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = ""

    html += '<select id="technologies">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( technologies => {
            return `<option value="${technologies.id}">${technologies.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}