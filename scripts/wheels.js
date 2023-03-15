import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = ""

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel option</option>'

    const arrayOfOptions = wheels.map( wheels => {
            return `<option value="${wheels.id}">${wheels.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}