const database = {
    colors: [
        {
            id: 1,
            type: "Silver",
            price: 2500
        }, {
            id: 2,
            type: "Midnight Blue",
            price: 600
        }, {
            id: 3,
            type: "Firebrick Red",
            price: 5000
        }, {
            id: 4,
            type: "Spring Green",
            price: 50
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 200
        }, {
            id: 2,
            type: "Charcoal Fabric",
            price: 400
        }, {
            id: 3,
            type: "White Leather",
            price: 1200
        }, {
            id: 4,
            type: "Black Leather",
            price: 2700
        }
    ],
    technologies: [
        {
            id: 1,
            type: "Basic Package (basic sound system)",
            price: 1300
        }, {
            id: 2,
            type: "Navigation Package (includes integrated navigation controls)",
            price: 4500
        }, {
            id: 3,
            type: "Visibility Package (includes side and reat cameras)",
            price: 10000
        }, {
            id: 4,
            type: "Ultra Package (includes navigation and visibility packages)",
            price: 36000
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 2600
        }, {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 3200
        }, {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 4500
        }, {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 5800
        },
    ],
    customOrders: [{
        id: 1,
        colorId: 1,
        interiorId: 2,
        technologyId: 3,
        wheelId: 4,
        timestamp: 1
    }],
    orderBuilder: {}
}


export const getColors = () => {
    return database.colors.map(color => ({ ...color }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}


export const getOrders = () => {
    return database.customOrders.map(customOrders => ({ ...customOrders }))
}


export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
