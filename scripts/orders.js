import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

export const buildOrderListItem = (order) => {

    // const orders = getOrders()

    // let html = "<ul>"

    // for (const order of orders) {

    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const carColor = foundColor.type

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const carInterior = foundInterior.type

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const carTechnology = foundTechnology.type

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const carWheel = foundWheel.type

    const totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} is a ${carColor} car, has ${carInterior} interior, has the ${carTechnology}, has the ${carWheel} wheels, and costs ${costString}
    </li>`
}
// html += "</ul>"
// return html
// }

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}