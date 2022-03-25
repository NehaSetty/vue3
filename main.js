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
                color: "blue",
                image: "./assets/images/socks_blue.jpg"

            },
            {
                id: 2,
                color: "green",
                image: "./assets/images/socks_green.jpg"
            }
            ],
            sizes: ["S", "M", "L"],
            cart: 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        onColorHover(image) {
            this.image = image;
        },
        deleteFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1;
            }
        }
    }
})
