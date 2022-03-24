const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "There are two colors of socks available",
            image: "./assets/images/socks_blue.jpg",
            url: "https://vuejs.org/guide/introduction.html",
            available: true,
            onSale: 100,
            details: ["80% cotton", "10% woolen", "10% others"],
            items: [{
                id: 1,
                color: "red"
            },
            {
                id: 2,
                color: "green"
            }
            ],
            sizes: ["S", "M", "L"],

        }
    }
})
