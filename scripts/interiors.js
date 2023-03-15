import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = ""

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior type</option>'

    const arrayOfOptions = interiors.map( interiors => {
            return `<option value="${interiors.id}">${interiors.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}