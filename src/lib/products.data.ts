import type { Product } from "../types/product.ts";

export const products: Product[] = [
    {
        id: "keyboard-x1",
        title: "Keyboard X1",
        brand: "XYZ Electronics",
        boxContent: ["Keyboard", "Bluetooth Connector", "Charger"],
        price: 70,
        image: "https://placehold.co/500/000000/FFFFFF",
        reviews: [
            {
                author: "John Doe",
                stars: 4,
                comment: "Great keyboard for long sessions",
            },
        ],
    },
    {
        id: "keyboard-x2",
        title: "Keyboard X2",
        brand: "XYZ Electronics",
        boxContent: ["Keyboard", "USB-C Cable", "Keycap Puller"],
        price: 95,
        image: "https://placehold.co/500/111111/FFFFFF",
        reviews: [
            {
                author: "Sarah Lin",
                stars: 5,
                comment: "Crisp keys and solid build",
            },
            {
                author: "Mike Reyes",
                stars: 4,
                comment: "Love the backlight options",
            },
        ],
    },
    {
        id: "mouse-m1",
        title: "Mouse M1",
        brand: "XYZ Electronics",
        boxContent: ["Mouse", "USB Receiver", "AA Batteries"],
        price: 35,
        image: "https://placehold.co/500/222222/FFFFFF",
        reviews: [
            {
                author: "Emma Watson",
                stars: 4,
                comment: "Comfortable grip for small hands",
            },
        ],
    },
    {
        id: "mouse-m4",
        title: "Mouse M4",
        brand: "Logiq",
        boxContent: ["Mouse", "Charging Dock", "USB-C Cable"],
        price: 60,
        image: "https://placehold.co/500/333333/FFFFFF",
        reviews: [
            {
                author: "Carlos Mendez",
                stars: 5,
                comment: "Wireless lag is non-existent",
            },
            {
                author: "Priya Nair",
                stars: 3,
                comment: "A bit heavy but accurate",
            },
        ],
    },
    {
        id: "mouse-m5",
        title: "Mouse M5",
        brand: "Logiq",
        boxContent: ["Mouse", "USB Receiver", "Travel Pouch"],
        price: 80,
        image: "https://placehold.co/500/444444/FFFFFF",
        reviews: [
            {
                author: "Tom Hardy",
                stars: 5,
                comment: "Best gaming mouse I've owned",
            },
        ],
    },
    {
        id: "headset-y1",
        title: "Headset Y1",
        brand: "AudioPro",
        boxContent: ["Headset", "Detachable Mic", "3.5mm Cable"],
        price: 120,
        image: "https://placehold.co/500/555555/FFFFFF",
        reviews: [
            {
                author: "Nina Patel",
                stars: 4,
                comment: "Rich bass and clear mids",
            },
        ],
    },
    {
        id: "headset-y2",
        title: "Headset Y2",
        brand: "AudioPro",
        boxContent: [
            "Headset",
            "USB Adapter",
            "Carrying Case",
            "Spare Earpads",
        ],
        price: 160,
        image: "https://placehold.co/500/666666/FFFFFF",
        reviews: [
            {
                author: "David Kim",
                stars: 5,
                comment: "Noise cancellation is fantastic",
            },
            {
                author: "Laura Smith",
                stars: 4,
                comment: "Comfortable for hours",
            },
        ],
    },
    {
        id: "webcam-k2",
        title: "Webcam K2",
        brand: "VisionTech",
        boxContent: ["Webcam", "Clip Mount", "USB Cable"],
        price: 50,
        image: "https://placehold.co/500/777777/FFFFFF",
        reviews: [
            { author: "Greg House", stars: 3, comment: "Decent for the price" },
        ],
    },
    {
        id: "webcam-k4",
        title: "Webcam K4",
        brand: "VisionTech",
        boxContent: ["Webcam", "Tripod Stand", "USB-C Cable", "Privacy Cover"],
        price: 90,
        image: "https://placehold.co/500/888888/FFFFFF",
        reviews: [
            {
                author: "Olivia Brown",
                stars: 5,
                comment: "4K quality is stunning",
            },
        ],
    },
    {
        id: "monitor-z1",
        title: "Monitor Z1",
        brand: "PixelView",
        boxContent: ["Monitor", "HDMI Cable", "Power Adapter", "Stand"],
        price: 220,
        image: "https://placehold.co/500/999999/FFFFFF",
        reviews: [
            {
                author: "Ryan Cooper",
                stars: 4,
                comment: "Colors are vibrant out of the box",
            },
        ],
    },
    {
        id: "monitor-z2",
        title: "Monitor Z2",
        brand: "PixelView",
        boxContent: [
            "Monitor",
            "DisplayPort Cable",
            "Power Adapter",
            "VESA Kit",
        ],
        price: 320,
        image: "https://placehold.co/500/AAAAAA/000000",
        reviews: [
            {
                author: "Sophie Turner",
                stars: 5,
                comment: "144Hz is buttery smooth",
            },
            {
                author: "Alan Walker",
                stars: 4,
                comment: "Great for both work and games",
            },
        ],
    },
    {
        id: "speaker-s1",
        title: "Speaker S1",
        brand: "SoundWave",
        boxContent: ["Speaker", "Charging Cable", "Aux Cable"],
        price: 45,
        image: "https://placehold.co/500/BBBBBB/000000",
        reviews: [
            { author: "Maya Lopez", stars: 4, comment: "Loud and portable" },
        ],
    },
    {
        id: "speaker-s3",
        title: "Speaker S3",
        brand: "SoundWave",
        boxContent: ["Speaker", "USB-C Cable", "Carry Strap", "Quick Guide"],
        price: 110,
        image: "https://placehold.co/500/CCCCCC/000000",
        reviews: [
            { author: "Ethan Hunt", stars: 5, comment: "Bass shakes the room" },
        ],
    },
    {
        id: "dock-d2",
        title: "Dock D2",
        brand: "ConnectHub",
        boxContent: ["USB-C Dock", "Power Brick", "User Manual"],
        price: 75,
        image: "https://placehold.co/500/DDDDDD/000000",
        reviews: [
            {
                author: "Hannah Lee",
                stars: 4,
                comment: "All my ports in one place",
            },
        ],
    },
    {
        id: "dock-d4",
        title: "Dock D4",
        brand: "ConnectHub",
        boxContent: ["Thunderbolt Dock", "Power Brick", "TB4 Cable", "Manual"],
        price: 180,
        image: "https://placehold.co/500/EEEEEE/000000",
        reviews: [
            {
                author: "Lucas Gray",
                stars: 5,
                comment: "Drives dual 4K displays flawlessly",
            },
            { author: "Isla Moore", stars: 4, comment: "Pricey but reliable" },
        ],
    },
    {
        id: "keyboard-x4",
        title: "Keyboard X4",
        brand: "XYZ Electronics",
        boxContent: ["Keyboard", "Wrist Rest", "USB-C Cable", "Keycap Puller"],
        price: 130,
        image: "https://placehold.co/500/0A0A0A/FFFFFF",
        reviews: [
            {
                author: "Derek Shaw",
                stars: 5,
                comment: "Hot-swappable switches are a dream",
            },
            {
                author: "Yuki Tanaka",
                stars: 4,
                comment: "Premium feel, slightly loud",
            },
        ],
    },
    {
        id: "mouse-m7",
        title: "Mouse M7",
        brand: "Logiq",
        boxContent: ["Mouse", "USB Receiver", "Replacement Feet"],
        price: 110,
        image: "https://placehold.co/500/1A1A1A/FFFFFF",
        reviews: [
            {
                author: "Bianca Rossi",
                stars: 5,
                comment: "Featherlight and precise",
            },
        ],
    },
    {
        id: "headset-y4",
        title: "Headset Y4",
        brand: "AudioPro",
        boxContent: ["Headset", "Detachable Mic", "USB-C Cable", "Hard Case"],
        price: 210,
        image: "https://placehold.co/500/2A2A2A/FFFFFF",
        reviews: [
            { author: "Marcus Lee", stars: 5, comment: "Studio-grade sound" },
            {
                author: "Tara Quinn",
                stars: 4,
                comment: "Clamp is a touch tight",
            },
        ],
    },
    {
        id: "webcam-k5",
        title: "Webcam K5",
        brand: "VisionTech",
        boxContent: ["Webcam", "Ring Light", "Tripod Stand", "USB-C Cable"],
        price: 140,
        image: "https://placehold.co/500/3A3A3A/FFFFFF",
        reviews: [
            {
                author: "Paula Reed",
                stars: 4,
                comment: "Low-light performance is solid",
            },
        ],
    },
    {
        id: "monitor-z4",
        title: "Monitor Z4",
        brand: "PixelView",
        boxContent: [
            "Monitor",
            "USB-C Cable",
            "Power Adapter",
            "VESA Kit",
            "Calibration Sheet",
        ],
        price: 480,
        image: "https://placehold.co/500/4A4A4A/FFFFFF",
        reviews: [
            {
                author: "Henry Cole",
                stars: 5,
                comment: "Ultrawide is a productivity boost",
            },
            {
                author: "Grace Park",
                stars: 5,
                comment: "Color accuracy out of the box",
            },
        ],
    },
    {
        id: "speaker-s5",
        title: "Speaker S5",
        brand: "SoundWave",
        boxContent: ["Speaker Pair", "Power Cable", "RCA Cable", "Remote"],
        price: 200,
        image: "https://placehold.co/500/5A5A5A/FFFFFF",
        reviews: [
            {
                author: "Felix Wong",
                stars: 5,
                comment: "Fills the whole room easily",
            },
        ],
    },
    {
        id: "dock-d6",
        title: "Dock D6",
        brand: "ConnectHub",
        boxContent: [
            "Docking Station",
            "Power Brick",
            "TB4 Cable",
            "SSD Tray",
            "Manual",
        ],
        price: 260,
        image: "https://placehold.co/500/6A6A6A/FFFFFF",
        reviews: [
            {
                author: "Nadia Khan",
                stars: 4,
                comment: "Built-in SSD slot is handy",
            },
        ],
    },
    {
        id: "mic-p1",
        title: "Mic P1",
        brand: "AudioPro",
        boxContent: [
            "USB Microphone",
            "Desk Stand",
            "USB-C Cable",
            "Pop Filter",
        ],
        price: 90,
        image: "https://placehold.co/500/7A7A7A/FFFFFF",
        reviews: [
            {
                author: "Owen Black",
                stars: 4,
                comment: "Clean vocals for streaming",
            },
        ],
    },
    {
        id: "mic-p3",
        title: "Mic P3",
        brand: "AudioPro",
        boxContent: ["XLR Microphone", "Shock Mount", "Boom Arm", "XLR Cable"],
        price: 180,
        image: "https://placehold.co/500/8A8A8A/FFFFFF",
        reviews: [
            {
                author: "Lena Fox",
                stars: 5,
                comment: "Podcast quality is excellent",
            },
            {
                author: "Sam Ortiz",
                stars: 4,
                comment: "Needs an interface, worth it",
            },
        ],
    },
    {
        id: "controller-c2",
        title: "Controller C2",
        brand: "Logiq",
        boxContent: ["Controller", "USB-C Cable", "Thumbstick Caps"],
        price: 65,
        image: "https://placehold.co/500/9A9A9A/FFFFFF",
        reviews: [
            {
                author: "Diego Sosa",
                stars: 4,
                comment: "Comfortable for long play",
            },
        ],
    },
];