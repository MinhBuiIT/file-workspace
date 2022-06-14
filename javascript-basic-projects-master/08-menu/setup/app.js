const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Wine",
    category: "Drink",
    price: 60,
    img: "https://cdn.shopify.com/s/files/1/2010/4669/collections/photo-nic-co-uk-nic-117915-unsplash.png?v=1621966044",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];
const dishList = document.querySelector('.dish-list');
const listBtn = document.querySelector('.list');
window.addEventListener('DOMContentLoaded',function(e) {
  displayDishItem(menu);
  displayButton();
})
function displayDishItem(menuList) {
  let dishItem = menuList.map((item) => {
    return `<div class="dish-item">
    <div class="img-wrap">
      <img src=${item.img} alt=${item.title}>
    </div>
    <div class="dish-content">
      <div class="dish-introduce">
        <span class="dish-name">${item.title}</span>
        <span class="dish-price">$${item.price}</span>
      </div>
      <div class="dish-des">
        <p>${item.desc}</p>
      </div>
    </div>
  </div>`
  })
  dishItem = dishItem.join('')
  dishList.innerHTML = dishItem;
}
function displayButton() {
  // const categories = ['all'];
  // menu.forEach((item) => {
  //   if(!categories.includes(item.category)) {
  //     categories.push(item.category);
  //   }
  // })
  const categories = menu.reduce(function(value,item) {
    if(!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  },['all']);
  console.log(categories);
  let btnItem = categories.map((item) => {
    return `<button class="btn" data-category=${item}>${item}</button>`
  })
  btnItem = btnItem.join('');
  listBtn.innerHTML = btnItem;
}
listBtn.addEventListener('click',function(e) {
  if(!e.target.matches('.btn')) return;
  let dataCategories = e.target.dataset.category;
  if(dataCategories === 'all') {
    displayDishItem(menu);
  }else{
    let menuListCate = menu.filter((item) => item.category === dataCategories);
    displayDishItem(menuListCate);
  }
})