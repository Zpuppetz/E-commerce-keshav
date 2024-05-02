const mongoose = require('mongoose');
const Product = require('./model/Product');

let dummyArray = [
  {
    name: "Potato",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww",
    price: 54,
    desc: "alloo it is"
  },
  {
    name: "Onion",
    img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D",
    price: 100,
    desc: "pyaaz ???"
  },
  {
    name: "Tomato",
    img: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww",
    price: 12,
    desc: "laal hai "
  },
  {
    name: "Paneer",
    img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dGFnZSUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 440,
    desc: "shit is costly , youre rich if you buyin it "
  },
  {
    name: "Cucumber",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
    price: 60,
    desc: " cucumber"
  },
  {
    name: "Cherry",
    img: "https://images.unsplash.com/photo-1610523377846-eba487f8f574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlcnJ5fGVufDB8fDB8fHww",
    price: 140,
    desc: " laal only",
  },
  {
    name: "Dragon fruit ",
    img: "https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29uJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    price: 700,
    desc: " isme tera ghr jaayenga",
  },
];


async function seedDB() {
    await Product.insertMany(dummyArray)
    console.log("DB Seeded");
}

module.exports = seedDB