import { Colors } from "./colors.js";
import { Interiors } from "./interiors.js";
import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const carsRUs = () => {
    return `
<h1>Cars-R-Us: Personal Car Builder</h1>
<article class="choices">
<main id="main">
    <section class="choices__colors options">
        <h2>Colors</h2>
        ${Colors()}
    </section>
    <section class="choices__interiors options">
        <h2>Interiors</h2>
        ${Interiors()}
    </section>
    <section class="choices__technologies options">
        <h2>Technologies</h2>
        ${Technologies()}
    </section>
    <section class="choices__wheels options">
        <h2>Wheels</h2>
        ${Wheels()}
    </section>
    </main>
</article>
<article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <h2>Custom Car Orders</h2>
        <article class="customOrders">
            ${Orders()}
        </article>
`
}
