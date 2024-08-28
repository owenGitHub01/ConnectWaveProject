import Battery from '../images/full-battery.png'
import Passcode from '../images/password.png'
import FaceId from '../images/face-id.png'
import Fingerprint from '../images/fingerprint.png'

import deal from '../images/deal.png'
import hot from '../images/hot.png'
import wrench from '../images/wrench.png'
import van from '../images/van.png'
import card from '../images/atm-card.png'

import iPhone15 from '../images/Devices/ConnectWave-iPhone15.png'
import iPhone14 from '../images/Devices/ConnectWave-iPhone14.png'
import galaxy6 from '../images/Devices/ConnectWave-GalaxyZFlip6.png'
import galaxyS8 from '../images/Devices/ConnectWave-GalaxyS8.png'
import MacBookPro from '../images/Devices/ConnectWave-MacBookPro.png'
import MacBookAir from '../images/Devices/ConnectWave-MacBookAir.png'
import AcerChromebook from '../images/Devices/ConnectWave-AcerChromebook.png'
import iPad from '../images/Devices/ConnectWave-AppleiPad.png'
import LenovaTab from '../images/Devices/ConnectWave-LenovaTab11.png'
import LGgram16 from '../images/Devices/ConnectWave-LgGram16.png'
import GalaxyBook4Pro from '../images/Devices/ConnectWave-GalaxyBook4Pro.png'
import GooglePixel7 from '../images/Devices/ConnectWave-GooglePixel7.png'
import Motorola from '../images/Devices/ConnectWave-Motorola.png'
import GooglePixelTab from '../images/Devices/ConnectWave-GooglePixelTab.png'
import GooglePixel8a from '../images/Devices/ConnectWave-GooglePixel8a.png'
import AsusVivobookS from '../images/Devices/ConnectWave-AsusVivobookS.png'

import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: [
                {
                    id: 1,
                    name: "iPhone 15",
                    image: iPhone15,
                    image2: FaceId,
                    price: 699,
                    prices: [699, 799],
                    battery: 20,
                    size: 6.1,
                    sizes: [6.1, 6.7],
                    service: 'Face ID',
                    storage: [
                        { num: 1, stores: "128 GB", cost: 0 },
                        { num: 2, stores: "256 GB", cost: 101 },
                        { num: 3, stores: "512 GB", cost: 149 }
                    ],
                },
                {
                    id: 2,
                    name: "Galaxy Z Fold6",
                    image: galaxy6,
                    image2: FaceId,
                    price: 1099,
                    prices: [1099, 0],
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
                    id: 3,
                    name: "iPhone 14",
                    image: iPhone14,
                    image2: FaceId,
                    price: 649,
                    prices: [649, 699],
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
                    id: 4,
                    name: "MacBook Pro",
                    image: MacBookPro,
                    image2: Fingerprint,
                    price: 1399,
                    prices: [1399, 1519],
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
                    id: 5,
                    name: "Galaxy Tab S8+",
                    image: galaxyS8,
                    image2: FaceId,
                    price: 899,
                    prices: [899, 0],
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
                    id: 6,
                    name: "MacBook Air",
                    image: MacBookAir,
                    image2: Fingerprint,
                    price: 999,
                    prices: [999, 1099],
                    battery: 20,
                    size: 13,
                    sizes: [13, 15],
                    service: 'Fingerprint ID',
                    storage: [
                        { num: 1, stores: "512 GB", cost: 0 },
                        { num: 2, stores: "1 TB", cost: 101 },
                        { num: 3, stores: "2 TB", cost: 199 },
                    ],
                },
                {
                    id: 7,
                    name: "Acer Chromebook Plus 514",
                    image: AcerChromebook,
                    image2: Passcode,
                    price: 449,
                    prices: [449, 0],
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
                    id: 8,
                    name: "Apple iPad Pro",
                    image: iPad,
                    image2: FaceId,
                    price: 899,
                    prices: [899, 0],
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
                    id: 9,
                    name: "Lenova Tab M11",
                    image: LenovaTab,
                    image2: Passcode,
                    price: 149,
                    prices: [149, 0],
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
                    id: 10,
                    name: "LG gram 16",
                    image: LGgram16,
                    image2: Fingerprint,
                    price: 549,
                    prices: [549, 0],
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
                    id: 11,
                    name: "Samsung Galaxy Book4 Pro",
                    image: GalaxyBook4Pro,
                    image2: Fingerprint,
                    price: 1349,
                    prices: [1349, 0],
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
                    id: 12,
                    name: "Google Pixel 7",
                    image: GooglePixel7,
                    image2: Fingerprint,
                    price: 399,
                    prices: [399, 0],
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
                    id: 13,
                    name: "Motorola Moto E14",
                    image: Motorola,
                    image2: Fingerprint,
                    price: 149,
                    prices: [149, 0],
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
                    id: 14,
                    name: "Google Pixel Tablet",
                    image: GooglePixelTab,
                    image2: Fingerprint,
                    price: 499,
                    prices: [499, 0],
                    battery: 12,
                    size: 11,
                    sizes: null,
                    service: 'Fingerprint ID',
                    storage: [
                        { num: 1, stores: "64 GB", cost: 0 },
                        { num: 2, stores: "128 GB", cost: 100 },
                    ],
                },
                {
                    id: 15,
                    name: "Google Pixel 8a",
                    image: GooglePixel8a,
                    image2: Fingerprint,
                    price: 399,
                    prices: [399, 0],
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
                    id: 16,
                    name: "Asus Vivobook S",
                    image: AsusVivobookS,
                    image2: Fingerprint,
                    price: 1099,
                    prices: [1099, 0],
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

            bundles: [
                {
                    id: 1,
                    name: "Keep it Apple",
                    bio: 'Enjoy a brand new iPad pro and a iPhone 15 in our Keep it Apple deal, saving a huge 20% off!',
                    price: 1359,
                    original: 1698,
                    discount: 20,
                    images: [iPad, iPhone15],
                    devices: [
                        {
                            type: 'Apple iPad Pro',
                            size: 11,
                            battery: 12,
                            ogPrice: 899,
                            storage: "256 GB",
                            image: iPad
                        },
                        {
                            type: 'iPhone 15',
                            size: 6.7,
                            battery: 20,
                            ogPrice: 799,
                            storage: "256 GB",
                            image: iPhone15
                        }
                    ],
                },
                {
                    id: 2,
                    name: "Galaxy Bundle",
                    bio: 'Our Galaxy bundle comes with a whopping 25% off. What are you waiting for?',
                    price: 1499,
                    original: 1998,
                    discount: 25,
                    images: [galaxyS8, galaxy6],
                    devices: [
                        {
                            type: 'Galaxy Tab S8+',
                            size: 11,
                            battery: 12,
                            ogPrice: 899,
                            storage: "256 GB",
                            image: galaxyS8
                        },
                        {
                            type: 'Galaxy Z Fold6',
                            size: 6.7,
                            battery: 20,
                            ogPrice: 799,
                            storage: "256 GB",
                            image: galaxy6
                        }
                    ],
                },
                {
                    id: 3,
                    name: "Mix and Match",
                    bio: 'Try our mix and match bundle with has great value!',
                    price: 253,
                    original: 298,
                    discount: 15,
                    images: [Motorola, LenovaTab],
                    devices: [
                        {
                            type: 'Motorola Moto E14',
                            size: 6.6,
                            battery: 18,
                            ogPrice: 149,
                            storage: "64 GB",
                            image: Motorola
                        },
                        {
                            type: 'Lenova Tab M11',
                            size: 11,
                            battery: 11,
                            ogPrice: 149,
                            storage: "128 GB",
                            image: LenovaTab
                        }
                    ],
                },
                {
                    id: 4,
                    name: "Google Bundle",
                    bio: "Stick to Google's devices with our Google bundle having 25% off!",
                    price: 524,
                    original: 698,
                    discount: 25,
                    images: [GooglePixel7, GooglePixelTab],
                    devices: [
                        {
                            type: 'Google Pixel 7',
                            size: 6.1,
                            battery: 28,
                            ogPrice: 399,
                            storage: "128 GB",
                            image: GooglePixel7
                        },
                        {
                            type: 'Google Pixel Tablet',
                            size: 11,
                            battery: 8,
                            ogPrice: 499,
                            storage: "64 GB",
                            image: GooglePixelTab
                        }
                    ],
                },
                {
                    id: 5,
                    name: "Air Bundle",
                    bio: "In this bundle enjoy 2 of our most popular devices, for an even cheaper bundle price.",
                    price: 1879,
                    original: 2348,
                    discount: 20,
                    images: [MacBookAir, GalaxyBook4Pro],
                    devices: [
                        {
                            type: 'MacBook Air',
                            size: 13,
                            battery: 20,
                            ogPrice: 999,
                            storage: "256 GB",
                            MacBookAir
                        },
                        {
                            type: 'Samsung Galaxy Book4 Pro',
                            size: 15.6,
                            battery: 21,
                            ogPrice: 1349,
                            storage: "256 GB",
                            image: GalaxyBook4Pro
                        }
                    ],
                },
                {
                    id: 6,
                    name: "Pro Kit",
                    bio: "Enjoy a 15% off on the best of the best with our Pro kit.",
                    price: 2055,
                    original: 2418,
                    discount: 15,
                    images: [iPad, MacBookPro],
                    devices: [
                        {
                            type: 'MacBook Pro',
                            size: 16,
                            battery: 27,
                            ogPrice: 1519,
                            storage: "1 TB",
                            image: MacBookPro
                        },
                        {
                            type: 'Apple iPad Pro',
                            size: 11,
                            battery: 12,
                            ogPrice: 899,
                            storage: "256 GB",
                            image: iPad
                        }
                    ],
                }
            ],
            cartItems: [],
            services: [
                {
                    imgLink: wrench,
                    title: "Service",
                    message: "We provide a 12 month warranty on all purchases made in store or online! On top of that we offer 25% off all repairs a further 2 years on top!"
                },
                {
                    imgLink: deal,
                    title: "Trade Ins",
                    message: "Have an old phone that no one wants or needs? We will take it! Get between £20 up to £200 off when purchasing a new device or bundle!"
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
            ]
        }
    },
    getters: {
        countCartItems() {
            return this.cartItems.length;
        },
        getCartItems() {
            return this.cartItems;
        }
    },
    actions: {
        addToCart(id, name, price, type) {
            var pos = parseInt(id)
            let catorgory = type === "device" ? this.products : this.bundles

            //Check if item has been saved previously
            for (let i = 0; i < this.cartItems.length; i++) {
                let customName = `Custom ${name}`
                if (this.cartItems[i].name === name && this.cartItems[i].price === price
                    || this.cartItems[i].name === customName && this.cartItems[i].price === price) {
                    this.cartItems[i].quantity++
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: name + ' Has Been Updated',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    return
                }
            }

            //Check If Item is custom or standard
            if (catorgory[pos].price == price) {
                this.cartItems.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1
                })
            }
            else {
                this.cartItems.push({
                    id: Math.floor(Math.random() * 100),
                    name: "Custom " + name,
                    price: price,
                    quantity: 1
                })
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: name + ' Has Been Added To Your Cart',
                showConfirmButton: false,
                timer: 1000
            });
        },

        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity -= 1;
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);

        }

    },
})