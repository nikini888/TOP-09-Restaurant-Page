const images = {
    'hero': 'https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'menu': 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'about': 'https://images.unsplash.com/photo-1587899897069-860db57749ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    'aboutChief':
        ['https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80', 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
    'bookTable': 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
}
const exploreMenu = [{
    name: 'Harissa Deviled Eggs',
    price: '5',
    description: 'eggs with Tunisian chili pepper paste and ...',
    image: 'https://images.unsplash.com/photo-1581622498448-63b8aa7885da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
}, {
    name: 'Octopus',
    price: '26',
    description: 'Summer Squash, Chorizo',
    image: 'https://images.unsplash.com/photo-1633860811626-d61533838223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
}, {
    name: 'Treccione',
    price: '33',
    description: 'Mushrooms, Pecorino',
    image: 'https://images.unsplash.com/photo-1612949060117-eb84d49a03f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
}, {
    name: 'Chicken',
    price: '43',
    description: 'Citrus-Marinated, Crown Shy Hot Sauce',
    image: 'https://images.unsplash.com/photo-1584949602334-4e99f98286a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
}]
const menu = [
    {
        type: 'appetizers',
        includes: [
            {
                name: 'Jalapeño Cheese Crisps',
                price: '7',
                description: 'cripsy, cheesy, bacon',
                image: 'https://images.unsplash.com/photo-1516100970402-530cfdf696d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Shrimp Cocktaild',
                price: '5',
                description: 'chili sauce, and Worcestershire sauce',
                image: 'https://images.unsplash.com/photo-1619810815691-4766cd4b8054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Harissa Deviled Eggs',
                price: '5',
                description: 'eggs with Tunisian chili pepper paste and ...',
                image: 'https://images.unsplash.com/photo-1581622498448-63b8aa7885da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Antipasto Bites',
                price: '5',
                description: 'bacon, olives, fruits',
                image: 'https://images.unsplash.com/photo-1623073284788-0d846f75e329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
        ]
    },
    {
        type: 'main menu',
        includes: [
            {
                name: 'Short Ribs',
                price: '95',
                description: 'Summer Beans, Potatoe',
                image: 'https://images.unsplash.com/photo-1593030668930-8130abedd2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Octopus',
                price: '26',
                description: 'Summer Squash, Chorizo',
                image: 'https://images.unsplash.com/photo-1633860811626-d61533838223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Treccione',
                price: '33',
                description: 'Mushrooms, Pecorino',
                image: 'https://images.unsplash.com/photo-1612949060117-eb84d49a03f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Snapper Crudo',
                price: '26',
                description: 'Melon, Black Lime',
                image: 'https://images.unsplash.com/photo-1595456982104-14cc660c4d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Lobster Spaghetti',
                price: '38',
                description: 'Meyer Lemon, Espelette',
                image: 'https://images.unsplash.com/photo-1663159857524-efe7a5404f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Pork Katsu',
                price: '43',
                description: 'lettuce, rice',
                image: 'https://images.unsplash.com/photo-1591814252471-068b545dff62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Branzino',
                price: '42',
                description: 'Tomatillo, Avocado, Cucumber',
                image: 'https://images.unsplash.com/photo-1626497862618-4aa68df390fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
            {
                name: 'Chicken',
                price: '43',
                description: 'Citrus-Marinated, Crown Shy Hot Sauce',
                image: 'https://images.unsplash.com/photo-1584949602334-4e99f98286a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            },
        ]
    },
]

const otherMenus = [
    {
        name: 'drink',
        image: 'https://images.unsplash.com/photo-1626201339405-e3912075c1d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
        includes: [{
            type: 'cocktails',
            includes: [
                {
                    name: 'Glasserie Spritz',
                    price: '6',
                    description: 'Mirto Berry Cordial, Lemon, Bubbles',
                },
                {
                    name: 'Walnut Old Fashioned',
                    price: '6',
                    description: 'Bourbon, Nocino, Bitters',
                },
                {
                    name: 'Persian Gold',
                    price: '6',
                    description: 'Gin, Saffron, Lemon,Tonic',
                },
            ]
        },
        {
            type: 'beer',
            includes: [
                {
                    name: 'Grimm, Tomorrow\'s Special - Stout',
                    price: '8',
                    description: '',
                },
                {
                    name: 'Grimm, Lite - Lager',
                    price: '9',
                    description: '',
                },
                {
                    name: 'Mill House, Oktoberfest - Marzen',
                    price: '8',
                    description: '',
                },
            ]
        },
        {
            type: 'wine',
            includes: [
                {
                    name: 'Sparkling',
                    price: '12',
                    description: 'CAVA / Gramona Corpinnat Brut / ES',
                },
                {
                    name: 'White',
                    price: '13',
                    description: 'PICPOUL / Gaujal / FR',
                },
            ],
        }]
    },
    {
        name: 'dessert',
        image: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        includes: [
            {
                type: 'cakes',
                includes: [
                    {
                        name: 'Soy cheese cake',
                        price: '5',
                        description: '',
                    },
                    {
                        name: 'Tiramisu',
                        price: '4.5',
                        description: '',
                    },
                    {
                        name: 'Chocolate mocha cake',
                        price: '4.5',
                        description: '',
                    },
                    {
                        name: 'Mango raspberry cake',
                        price: '6',
                        description: 'Contains cashew and almond',
                    },
                ]
            },
            {
                type: 'cream',
                includes: [
                    {
                        name: 'Vegan mochi ice cream platter',
                        price: '4',
                        description: '',
                    },
                    {
                        name: 'Soy ice cream',
                        price: '3',
                        description: 'Vanilla almond or chocolate',
                    },
                    {
                        name: 'Red beans and ice cream rhapsody',
                        price: '3.5',
                        description: '',
                    },
                    {
                        name: 'Ice green tea float',
                        price: '3',
                        description: '',
                    },
                ]
            }
        ]
    }

]

export { images, exploreMenu, menu, otherMenus } 