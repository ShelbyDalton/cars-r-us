import { getColors, setColor } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = ""

    html += '<select id="colors">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = colors.map(colors => {
            return `<option value="${colors.id}">${colors.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
