const cardsArray = [
    {
      name: "fire",
      img: "img/fire.png",
    },
    {
      name: "youtube",
      img: "img/youtube.png",
    },
    {
      name: "flash",
      img: "img/flash.png",
    },
    {
      name: "gift",
      img: "img/gift.png",
    },
    {
      name: "tron",
      img: "img/tron.png",
    },
    {
      name: "ufo",
      img: "img/ufo.png",
    },
    {
      name: "plant",
      img: "img/plant.png",
    },
    {
      name: "burger",
      img: "img/burger.png",
    },
  ];
const grid = document.querySelector('.grid');
const newCardsArry = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
newCardsArry.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  grid.appendChild(card);
  card.setAttribute('date-name',item.name);
  const front = document.createElement('div');
  front.classList.add('front');
  card.appendChild(front);
  front.style.backgroundImage = `url("./img/question.gif")`;
  const back = document.createElement('div');
  back.classList.add('back');
  card.appendChild(back);
  back.style.backgroundImage = `url(${item.img})`;
});
