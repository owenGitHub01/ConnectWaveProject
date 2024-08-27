import { ref } from 'vue'

import deal from './images/deal.png'
import hot from './images/hot.png'
import wrench from './images/wrench.png'
import van from './images/van.png'
import card from './images/atm-card.png'

import iPhone15 from './images/Devices/ConnectWave-iPhone15.png'
import iPhone14 from './images/Devices/ConnectWave-iPhone14.png'
import galaxy6 from './images/Devices/ConnectWave-GalaxyZFlip6.png'
import galaxyS8 from './images/Devices/ConnectWave-GalaxyS8.png'
import MacBookPro from './images/Devices/ConnectWave-MacBookPro.png'
import MacBookAir from './images/Devices/ConnectWave-MacBookAir.png'
import AcerChromebook from './images/Devices/ConnectWave-AcerChromebook.png'
import iPad from './images/Devices/ConnectWave-AppleiPad.png'
import LenovaTab from './images/Devices/ConnectWave-LenovaTab11.png'
import LGgram16 from './images/Devices/ConnectWave-LgGram16.png'
import GalaxyBook4Pro from './images/Devices/ConnectWave-GalaxyBook4Pro.png'
import GooglePixel7 from './images/Devices/ConnectWave-GooglePixel7.png'
import Motorola from './images/Devices/ConnectWave-Motorola.png'
import GooglePixelTab from './images/Devices/ConnectWave-GooglePixelTab.png'
import GooglePixel8a from './images/Devices/ConnectWave-GooglePixel8a.png'
import AsusVivobookS from './images/Devices/ConnectWave-AsusVivobookS.png'


export default {
    devices: [
        {
            type: 'Device',
            id: '1',
            name: "iPhone 15",
            device: "iPhone",
            price: [699, 799],
            battery: 20,
            size: 6.1,
            sizes: [6.1, 6.7],
            service: 'Face ID',
            storage: [
                { num: 1, stores: "128 GB", cost: 0 },
                { num: 2, stores: "256 GB", cost: 100 },
                { num: 3, stores: "512 GB", cost: 149 }
            ],
        },
        {
            type: 'Device',
            id: 2,
            name: "iPhone 14",
            device: "iPhone",
            price: [649, 699],
            battery: 19,
            size: 6.1,
            sizes: [6.1, 6.7],
            service: 'Face ID',
            storage: [
                { num: 1, stores: "128 GB", cost: 0 },
                { num: 2, stores: "256 GB", cost: 100 },
                { num: 3, stores: "512 GB", cost: 199 }
            ],
        },
        {
            type: 'Device',
            id: 3,
            name: "Galaxy Z Fold6",
            device: "Samsung",
            price: [1099, 0],
            battery: 15,
            size: 6.7,
            sizes: null,
            service: 'Face ID',
            storage: [
                { num: 1, stores: "256 GB", cost: 0 },
                { num: 2, stores: "512 GB", cost: 100 },
                { num: 3, stores: "1 TB", cost: 149 }
            ],
        },
        {
            type: 'Device',
            id: 4,
            name: "MacBook Pro",
            device: "MacBook",
            price: [1399, 1519],
            battery: 27,
            size: 14,
            sizes: [14, 16],
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "512 GB", cost: 0 },
                { num: 2, stores: "1 TB", cost: 100 },
                { num: 3, stores: "2 TB", cost: 300 }
            ],
        },
        {
            type: 'Device',
            id: 5,
            name: "Galaxy Tab S8+",
            device: "Tablet",
            price: [899, 0],
            battery: 17,
            size: 11,
            sizes: null,
            service: 'Face ID',
            storage: [
                { num: 1, stores: "256 GB", cost: 0 },
                { num: 2, stores: "512 GB", cost: 149 },
            ],
        },
        {
            type: 'Device',
            id: 6,
            name: "MacBook Air",
            device: "MacBook",
            price: [999, 1099],
            battery: 20,
            size: 13,
            sizes: [13, 15],
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "512 GB", cost: 0 },
                { num: 2, stores: "1 TB", cost: 100 },
                { num: 3, stores: "2 TB", cost: 199 },
            ],
        },
        {
            type: 'Device',
            id: 7,
            name: "Acer Chromebook Plus 514",
            device: "Laptop",
            price: [449, 0],
            battery: 14,
            size: 14,
            sizes: null,
            service: 'Passcode Security',
            storage: [
                { num: 1, stores: "256 GB", cost: 0 },
                { num: 2, stores: "512 GB", cost: 99 },
            ],
        },
        {
            type: 'Device',
            id: 8,
            name: "Apple iPad Pro",
            device: "iPad",
            price: [899, 0],
            battery: 12,
            size: 11,
            sizes: null,
            service: 'Face Id',
            storage: [
                { num: 1, stores: "256 GB", cost: 0 },
                { num: 2, stores: "512 GB", cost: 99 },
            ],
        },
        {
            type: 'Device',
            id: 9,
            name: "Lenova Tab M11",
            device: "Tablet",
            price: [149, 0],
            battery: 11,
            size: 11,
            sizes: null,
            service: 'Passcode Security',
            storage: [
                { num: 1, stores: "128 GB", cost: 0 },
                { num: 2, stores: "256 GB", cost: 99 },
            ],
        },
        {
            type: 'Device',
            id: 10,
            name: "LG gram 16",
            device: "Laptop",
            price: [549, 0],
            battery: 25,
            size: 19,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "524 GB", cost: 0 },
                { num: 2, stores: "1 TB", cost: 200 },
            ],
        },
        {
            type: 'Device',
            id: 11,
            name: "Samsung Galaxy Book4 Pro",
            device: "Laptop",
            price: [1349, 0],
            battery: 21,
            size: 15.6,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "524 GB", cost: 0 },
                { num: 2, stores: "1 TB", cost: 200 },
            ],
        },
        {
            type: 'Device',
            id: 12,
            name: "Google Pixel 7",
            device: "Phone",
            price: [399, 0],
            battery: 28,
            size: 6.1,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "256 GB", cost: 0 },
                { num: 2, stores: "512 GB", cost: 100 },
            ],
        },
        {
            type: 'Device',
            id: 13,
            name: "Motorola Moto E14",
            device: "Headphones",
            price: [149, 0],
            battery: 18,
            size: 6.6,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "64 GB", cost: 0 },
                { num: 2, stores: "128 GB", cost: 100 },
            ],
        },
        {
            type: 'Device',
            id: 14,
            name: "Google Pixel Tablet",
            device: "Tablet",
            price: [499, 0],
            battery: 8,
            size: 11,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "64 GB", cost: 0 },
                { num: 2, stores: "128 GB", cost: 100 },
            ],
        },
        {
            type: 'Device',
            id: 15,
            name: "Google Pixel 8a",
            device: "Phone",
            price: [399, 0],
            battery: 24,
            size: 6.1,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "128 GB", cost: 0 },
                { num: 2, stores: "256 GB", cost: 100 },
                { num: 3, stores: "512 GB", cost: 200 }
            ],
        },
        {
            type: 'Device',
            id: 16,
            name: "Asus Vivobook S",
            device: "Laptop",
            price: [1099, 0],
            battery: 20,
            size: 15,
            sizes: null,
            service: 'Fingerprint ID',
            storage: [
                { num: 1, stores: "1 TB", cost: 0 },
                { num: 2, stores: "2 TB", cost: 200 },
            ],
        }
    ],

    deals: [
        {
            type: 'Bundle',
            id: 1,
            name: "Keep it Apple",
            bio: 'Enjoy a brand new iPad pro and a iPhone 15 in our Keep it Apple deal, saving a huge 20% off!',
            price: 1359,
            original: 1698,
            discount: 20,
            devices: [
                {
                    type: 'Apple iPad Pro',
                    size: 11,
                    battery: 12,
                    ogPrice: 899,
                    storage: "256 GB"
                },
                {
                    type: 'iPhone 15',
                    size: 6.7,
                    battery: 20,
                    ogPrice: 799,
                    storage: "256 GB"
                }
            ],
        },
        {
            type: 'Bundle',
            id: 2,
            name: "Galaxy Bundle",
            bio: 'Our Galaxy bundle comes with a whopping 25% off. What are you waiting for?',
            price: 1499,
            original: 1998,
            discount: 25,
            devices: [
                {
                    type: 'Galaxy Tab S8+',
                    size: 11,
                    battery: 17,
                    ogPrice: 899,
                    storage: "128 GB"
                },
                {
                    type: 'Galaxy Z Fold6',
                    size: 6.7,
                    battery: 15,
                    ogPrice: 1099,
                    storage: "256 GB"
                }
            ],
        },
        {
            type: 'Bundle',
            id: 3,
            name: "Mix and Match",
            bio: 'Try our mix and match bundle with has great value!',
            price: 253,
            original: 298,
            discount: 15,
            devices: [
                {
                    type: 'Motorola Moto E14',
                    size: 6.6,
                    battery: 18,
                    ogPrice: 149,
                    storage: "64 GB"
                },
                {
                    type: 'Lenova Tab M11',
                    size: 11,
                    battery: 11,
                    ogPrice: 149,
                    storage: "128 GB"
                }
            ],
        },
        {
            type: 'Bundle',
            id: 4,
            name: "Google Bundle",
            bio: "Stick to Google's devices with our Google bundle having 25% off!",
            price: 524,
            original: 698,
            discount: 25,
            devices: [
                {
                    type: 'Google Pixel 7',
                    size: 6.1,
                    battery: 28,
                    ogPrice: 399,
                    storage: "128 GB"
                },
                {
                    type: 'Google Pixel Tablet',
                    size: 11,
                    battery: 8,
                    ogPrice: 499,
                    storage: "64 GB"
                }
            ],
        },
        {
            type: 'Bundle',
            id: 5,
            name: "Air Bundle",
            bio: "In this bundle enjoy 2 of our most popular devices, for an even cheaper bundle price.",
            price: 1879,
            original: 2348,
            discount: 20,
            devices: [
                {
                    type: 'MacBook Air',
                    size: 13,
                    battery: 20,
                    ogPrice: 999,
                    storage: "256 GB"
                },
                {
                    type: 'Samsung Galaxy Book4 Pro',
                    size: 15.6,
                    battery: 21,
                    ogPrice: 1349,
                    storage: "256 GB"
                }
            ],
        },
        {
            type: 'Bundle',
            id: 6,
            name: "Pro Kit",
            bio: "Enjoy a 15% off on the best of the best with our Pro kit.",
            price: 2055,
            original: 2418,
            discount: 15,
            devices: [
                {
                    type: 'MacBook Pro',
                    size: 16,
                    battery: 27,
                    ogPrice: 1519,
                    storage: "1 TB"
                },
                {
                    type: 'Apple iPad Pro',
                    size: 11,
                    battery: 12,
                    ogPrice: 899,
                    storage: "256 GB"
                }
            ],
        }
    ],

    dataImages: [
        iPhone15, iPhone14, galaxy6, MacBookPro, galaxyS8, MacBookAir, AcerChromebook, iPad, LenovaTab, LGgram16, GalaxyBook4Pro, GooglePixel7, Motorola, GooglePixelTab, GooglePixel8a, AsusVivobookS,
    ],
    dealsImages: [
        [iPad, iPhone15],
        [galaxyS8, galaxy6],
        [Motorola, LenovaTab],
        [GooglePixel7, GooglePixelTab],
        [MacBookAir, GalaxyBook4Pro],
        [MacBookPro, iPad]
    ],

    services: [
        {
            imgLink: wrench,
            title: "Service",
            message: "We provide a 12 month warranty on all purchases made in store or online! On top of that we offer 25% off all repairs a further 2 years on top!"
        },
        {
            imgLink: deal,
            title: "Trade Ins",
            message: "Have an old phone that no one wants or needs? We will take it! Get between £20 up to £200 off when purchasing a new phone."
        },
        {
            imgLink: hot,
            title: "Hot Deals",
            message: "Not just looking for a new device? Looking for a data plan to go with it as well? Look no further then our Hot Deals."
        }
    ],
    services2: [
        {
            imgLink: van,
            title: 'Free Delivery',
            message: 'Free delivery on all orders. Select between free delivery or to pick your item up from a local store.'
        },
        {
            imgLink: card,
            title: 'Flexible Payments',
            message: "Our Flexible payment plans allow you to use now and pay later! Choose between monthly plans of up to 48 months."
        }
    ],

    aboutInfo: [
        {
            title: "The Beginning",
            date: "2022 - May",
            text: "The first foundations were made for ConnectWave, having big plans for the future and where we want to take this company. We was only getting started.",
            style: 'l'
        },
        {
            title: "The Launch",
            date: "2022 - October",
            text: "With the foundations in place, it was officially time to launch our online store as well as our very first location based store, offering just Phones and Tablets!",
            style: 'r'
        },
        {
            title: "Expanding...",
            date: "2023 - April",
            text: "With an incredible successfull opening 6 months, it was time to expand. We didn't just introduce 2 brand new store locations, we also added Laptops offers by demand!",
            style: 'l'
        },
        {
            title: "What A Deal!",
            date: "2023 - October",
            text: "Exactly 1 year on from opening, we wanted to become the best around. So we introduced our bundles! Save even more money on our selected bundles!",
            style: 'r'
        },
        {
            title: "Store Store Store!",
            date: "2024 - January",
            text: "After a incredible successful opening first year, we decided to expand our current stores from 3... to 7! Providing the best support and best deals, is essential to our customers.",
            style: 'l'
        },
        {
            title: "So, What Next?",
            date: "2024 - ",
            text: "We have loved every second of working with this business and have some pretty big plans coming... Stay tuned as we introduce even more products to our product range!",
            style: 'r'
        }
    ],

    cart: ref([
        {
            name: "iPhone 15",
            quantity: 4,
            price: 200,
        },
        {
            name: "iPhone 12",
            quantity: 1,
            price: 200,
        },
        {
            name: "iPhone 11",
            quantity: 2,
            price: 200,
        },
    ]),

    addToCart(name, price) {

        console.log(name, price)
        this.cart.value.push({ name: name, quantity: 1, price: price })

    },

    removeFromCart() { }



}