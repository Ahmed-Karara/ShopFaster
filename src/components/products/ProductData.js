import { nanoid } from "@reduxjs/toolkit";
import hpLaptop1 from "../../assets/products/laptops/HP/hp laptop 1.jpg";
import hpLaptop2 from "../../assets/products/laptops/HP/hp laptop 2.jpg";
import hpLaptop3 from "../../assets/products/laptops/HP/hp laptop 3.jpg";
import hpLaptop4 from "../../assets/products/laptops/HP/hp laptop 4.jpg";
import hpLaptop5 from "../../assets/products/laptops/HP/hp laptop 5.jpg";
import lenovoLaptop1 from "../../assets/products/laptops/Lenovo/lenovo laptop 1.jpg";
import iphone13 from "../../assets/products/phones/apple/iphone13-pro-max.jpg";
import iPhone14 from "../../assets/products/phones/apple/Apple-iPhone14-Pro-Max.jpg";
import samsungS22 from "../../assets/products/phones/samsung/samsung-S22-ultra.jpg";
import samsungS23 from "../../assets/products/phones/samsung/samsung-S23-ultra.jpg";
import samsungZfold4 from "../../assets/products/phones/samsung/SAMSUNG Galaxy Z Fold 4.jpg";
import googlepixel7 from "../../assets/products/phones/google/Google-Pixel-7-Pro.webp";
import xiaomi13 from "../../assets/products/phones/xiaomi/Xiaomi 13 Ultra.jpg";
import sonyTv1 from "../../assets/products/TVs/sony/sony tv 1.jpg";
import samsungQled from "../../assets/products/TVs/samsung/SAMSUNG QLED 4K Smart TV (2023).webp";
import LGUHD from "../../assets/products/TVs/LG/LG-UHD-TV-UR80.jpg";
import hisenseA7 from "../../assets/products/TVs/hisense/Hisense-A7-SERIES.webp";
import airpod from "../../assets/products/Accessories/airPods/Apple AirPods.jpg";
import headphone1 from "../../assets/products/Accessories/headphone/AUSDOM E7 Wireless Headphone.jpg";
import headphone2 from "../../assets/products/Accessories/headphone/PHILIPS Wireless Headphone.jpg";
import psController from "../../assets/products/Accessories/PS controller/Razer PS5 controller.jpg";
import PS5 from "../../assets/products/Consoles/PS5/ps5-console.jpg";
import PS4 from "../../assets/products/Consoles/PS4/PS4.jpg";
import Xbox from "../../assets/products/Consoles/Xbox/Xbox One .jpg";
import nintendoSwitch from "../../assets/products/Consoles/nintendo switch/nintendo switch.png";

export const ProductData = [
  {
    id: nanoid(),
    name: "HP Laptop core i5",
    fullName: "HP Laptop 15-dw3014ne-11th Intel Core i5-1135G7",
    category: "laptop",
    brand: "hp",
    price: 500,
    image: hpLaptop1,
    inStock: 10,
    sold: 0,
    sale: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "HP 17.3 FHD IPS",
    fullName: "New 2022 HP 17.3 FHD IPS Display, 11th Gen Intel Core i5-1135G7",
    category: "laptop",
    brand: "hp",
    price: 590,
    image: hpLaptop2,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "HP Victus 15-fa0031dx",
    fullName: "HP Victus 15-fa0031dx Gaming Laptop",
    category: "laptop",
    brand: "hp",
    price: 650,
    image: hpLaptop3,
    inStock: 10,
    sold: 12,
    sale: 10,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Lenovo IdeaPad 15.6",
    fullName: "Lenovo IdeaPad 15.6 AMD Dual-core Processor",
    category: "laptop",
    brand: "lenovo",
    price: 420,
    image: lenovoLaptop1,
    inStock: 10,
    sold: 15,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "2020 HP 15.6 HD LED",
    fullName: "2020 HP 15.6 HD LED Display Intel Pentium Gold 6405U Processor ",
    category: "laptop",
    brand: "hp",
    price: 360,
    image: hpLaptop4,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "HP Probook 450",
    fullName: "HP Probook 450 G8 Laptop-11th Intel Core i5-1135G7",
    category: "laptop",
    brand: "hp",
    price: 780,
    image: hpLaptop5,
    inStock: 10,
    sold: 7,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Apple iPhone 13 Pro Max",
    fullName: "Apple iPhone 13 Pro Max, 128GB, Sierra Blue",
    category: "phone",
    brand: "apple",
    price: 870,
    image: iphone13,
    inStock: 10,
    sold: 11,
    sale: 20,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Apple iPhone 14 Pro Max",
    fullName: "Apple iPhone 14 Pro Max - 256GB - Gold",
    category: "phone",
    brand: "apple",
    price: 1100,
    image: iPhone14,
    inStock: 10,
    sold: 9,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Samsung Galaxy S22-Ultra",
    fullName: "SAMSUNG Galaxy S22 Ultra 128GB 8K Camera",
    category: "phone",
    brand: "samsung",
    price: 1100,
    image: samsungS22,
    inStock: 10,
    sold: 0,
    sale: 25,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Samsung Galaxy S23-Ultra",
    fullName: "SAMSUNG Galaxy S23 Ultra 256GB 200MP Camera",
    category: "phone",
    brand: "samsung",
    price: 1200,
    image: samsungS23,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Samsung Galaxy Z-Fold4",
    fullName: "SAMSUNG Galaxy Z Fold 4 256GB Flex Mode Hands Free Video",
    category: "phone",
    brand: "samsung",
    price: 1700,
    image: samsungZfold4,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  {
    id: nanoid(),
    name: "Google Pixel 7 Pro",
    fullName: " Google Pixel 7 Pro 5G 128GB Obsidian",
    category: "phone",
    brand: "google",
    price: 1650,
    image: googlepixel7,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Xiaomi 13 Ultra ",
    fullName: "Xiaomi 13 Ultra  512GB Flex Mode Android 13",
    category: "phone",
    brand: "xiaomi",
    price: 1700,
    image: xiaomi13,
    inStock: 10,
    sold: 0,
    sale: 30,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Samsung QLED 4K Smart",
    fullName: "Samsung QLED 4K Smart TV 65 inch Class Q70C",
    category: "TV",
    brand: "samsung",
    price: 1250,
    image: samsungQled,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Sony 85 Inch 4K",
    fullName: "Sony 85 Inch 4K Ultra HD TV X80K Series",
    category: "TV",
    brand: "sony",
    price: 1600,
    image: sonyTv1,
    inStock: 10,
    sold: 8,
    sale: 20,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "LG UHD TV UR80 86 inch",
    fullName: "LG UHD TV UR80 86 inch 4K Smart TV",
    category: "TV",
    brand: "LG",
    price: 1000,
    image: LGUHD,
    inStock: 10,
    sold: 8,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Hisense A7 series 85 inch ",
    fullName: "Hisense 85 inch Class A7 SERIES LED 4K UHD Smart Google TV",
    category: "TV",
    brand: "hisense",
    price: 2500,
    image: hisenseA7,
    inStock: 10,
    sold: 8,
    sale: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Apple AirPods",
    fullName: "Apple AirPods with Charging Case",
    category: "accessories",
    brand: "airpods",
    price: 130,
    image: airpod,
    inStock: 10,
    sold: 4,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "AUSDOM E7 Wireless Headphone",
    fullName: "AUSDOM E7 Wireless Headphones with Microphone, Deep Bass black",
    category: "accessories",
    brand: "headphone",
    price: 50,
    image: headphone1,
    inStock: 10,
    sold: 9,
    sale: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "PHILIPS H4205 Wireless Headphones",
    fullName:
      "PHILIPS H4205 On-Ear Wireless Headphones with 32mm Drivers and BASS Boost Blue",
    category: "accessories",
    brand: "headphone",
    price: 50,
    image: headphone2,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Razer V2 Pro Wireless PS Controller",
    fullName:
      "Razer Wolverine V2 Pro Wireless Gaming Controller for PlayStation 5 Black",
    category: "accessories",
    brand: "PS controller",
    price: 230,
    image: psController,
    inStock: 10,
    sold: 10,
    sale: 10,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Xbox One",
    fullName: "Microsoft Xbox One Special Edition inMatte Blackin 500GB",
    category: "console",
    brand: "Xbox",
    price: 250,
    image: Xbox,
    inStock: 10,
    sold: 12,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Playstation Sony 4",
    fullName: "Playstation Sony 4, 500GB Slim Black",
    category: "console",
    brand: "PS4",
    price: 340,
    image: PS4,
    inStock: 10,
    sold: 0,
    sale: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "PlayStation 5",
    fullName: "PlayStation 5 Console (PS5)",
    category: "console",
    brand: "PS5",
    price: 550,
    image: PS5,
    inStock: 10,
    sold: 8,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: nanoid(),
    name: "Nintendo Switch",
    fullName: "Nintendo Switch with Neon Blue and Neon Red",
    category: "console",
    brand: "nintendo switch",
    price: 280,
    image: nintendoSwitch,
    inStock: 10,
    sold: 0,
    sale: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
