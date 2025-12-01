// server/data/partsData.js

/**
 * Parts data for the keyboard builder.
 * Organized by category for easy reference in the builder.
 */
const parts = {
  // Keyboard sizes
  sizes: [
    {
      id: "60",
      name: "60% Keyboard",
      description: "Compact 60% layout",
      price: 80,
      image: "/assets/sizes/60Key.png",
      category: "size",
    },
    {
      id: "80",
      name: "80% Keyboard (TKL)",
      description: "Ten key less 80% layout",
      price: 100,
      image: "/assets/sizes/80Key.png",
      category: "size",
    },
    {
      id: "100",
      name: "100% Keyboard (Full)",
      description: "Full-size 100% keyboard",
      price: 120,
      image: "/assets/sizes/100key.png",
      category: "size",
    },
  ],

  // Switch types
  switchType: [
    {
      id: "lynx",
      name: "Glorious Lynx",
      type: "linear",
      sound: "quiet",
      price: 50,
      image: "/assets/switchType/lynx.png",
      description: "Smooth linear switches for fast typing",
      category: "switchType",
    },
    {
      id: "panda",
      name: "Glorious Panda",
      type: "tactile",
      sound: "medium",
      price: 55,
      image: "/assets/switchType/panda.png",
      description: "Tactile switches with medium resistance",
      category: "switchType",
    },
    {
      id: "raptor",
      name: "Glorious Raptor",
      type: "clicky",
      sound: "loud",
      price: 60,
      image: "/assets/switchType/raptor.png",
      description: "Clicky switches for audible feedback",
      category: "switchType",
    },
  ],

  // Keycap sets
  keycaps: [
    {
      id: "black",
      name: "Black Keycaps",
      theme: "dark",
      price: 35,
      image: "/assets/keycaps/black.png",
      description: "Sleek black keycap set",
      category: "keycap",
    },
    {
      id: "white",
      name: "White Keycaps",
      theme: "light",
      price: 35,
      image: "/assets/keycaps/white.png",
      description: "Clean white keycap set",
      category: "keycap",
    },
    {
      id: "blue",
      name: "Blue Keycaps",
      theme: "colorful",
      price: 35,
      image: "/assets/keycaps/blue.png",
      description: "Vibrant blue keycap set",
      category: "keycap",
    },
  ],

  // Cables
  cables: [
    {
      id: "coil-lightblue",
      name: "Coiled Cable (Lightblue)",
      style: "coil",
      price: 20,
      image: "/assets/cables/coil-lightblue.png",
      description: "Flexible coiled USB cable",
      category: "cable",
    },
    {
      id: "straight-black",
      name: "Straight Cable (Black)",
      style: "straight",
      price: 30,
      image: "/assets/cables/straight-black.png",
      description: "Durable straight USB cable",
      category: "cable",
    },
  ],

  // Accessories
  accessories: [
    {
      id: "woodenRest",
      name: "Wooden Wrist Rest",
      price: 25,
      image: "/assets/accessories/WoodenRest.png",
      description: "Comfortable wooden wrist rest",
      category: "accessory",
    },
    {
      id: "paddedRest",
      name: "Padded Wrist Rest",
      price: 25,
      image: "/assets/accessories/PaddedRest.png",
      description: "Soft padded wrist rest",
      category: "accessory",
    },
    {
      id: "artisan-keycap",
      name: "Artisan Keycap",
      price: 26,
      image: "/assets/accessories/artisan-keycap.png",
      link: "https://www.etsy.com/market/artisan_keycaps",
      description: "Unique artisan keycap for customization",
      category: "accessory",
    },
  ],
};

/**
 * Flatten all parts into a single array.
 * Useful for iterating over all parts without needing to reference categories.
 */
export const allParts = Object.values(parts).flat();

export default parts;
