const Orders = [

    {
        id: "1",
        date: "2022-03-02",
        customer: [
            {id: "2"},
            {name: "abc"},
        ],
        items: [
            {product: "Black", qty: 2, price: 3.99},
            {product: "Espresso", qty: 1, price: 3.99},
        ],
        total: 9.88,
        isPaid: true,
    },
    {
        id: "2",
        date: "2022-03-03",
        customer: [
            {id: "2"},
            {name: "abc"},
        ],
        items: [
            {product: "Black", qty: 0, price: 3.99},
            {product: "Espresso", qty: 1, price: 3.99},
        ],
        total: 3.99,
        isPaid: false,
    },
]
export default Orders;