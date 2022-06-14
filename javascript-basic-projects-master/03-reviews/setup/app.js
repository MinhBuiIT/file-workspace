// local reviews data
const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
let current = 0;
const img = document.querySelector('.img');
const yourName = document.querySelector('.content-name');
const work = document.querySelector('.content-work');
const des = document.querySelector('.content-par');
const iconLeft = document.querySelector('.icon-left');
const iconRight = document.querySelector('.icon-right');
const button = document.querySelector('.button');
let numberAfter = -1;
window.addEventListener('DOMContentLoaded', function() {
    changReviews(current);
})
iconRight.addEventListener('click', function() {
    current++;
    if (current >= reviews.length) {
        current = 0;
    }
    changReviews(current)
})
iconLeft.addEventListener('click', function() {
    current--;
    if (current < 0) {
        current = reviews.length - 1;
    }
    changReviews(current)
})

button.addEventListener('click', function(e) {
    let number = randomNumber();
    if (number === numberAfter) {
        return;
    }
    changReviews(number);
    numberAfter = number;
})

function changReviews(number) {
    let currentReview = reviews[number];
    img.setAttribute('src', currentReview.img);
    yourName.textContent = currentReview.name;
    work.textContent = currentReview.job;
    des.textContent = currentReview.text;
}

function randomNumber() {
    return Math.floor((Math.random() * reviews.length));
}