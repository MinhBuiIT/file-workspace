// const formPost = document.querySelector('.form-post');

// async function handleCreatingSource(title, author) {
//     let promise = await fetch('http://localhost:3000/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             author: author,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     return await promise.json();
// }
// formPost.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let title = this.elements['title'].value;
//     let author = this.elements['author'].value;
//     handleCreatingSource(title, author);
// })
//courses
/**
 * img
 * title
 * author
 * rating
 * buyAmount
 * price
 * bestSeller
 */

const formPost = document.querySelector('.form-post');
const courseList = document.querySelector('.courses-list');
const courseBtn = document.querySelector('.course-btn');
const filter = document.querySelector('.filter');
const notify = document.querySelector('.notify');
const endpoint = "http://localhost:3456/courses";
let flatId = null;

function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
filter.addEventListener('input', debounce(function(e) {
    let value = e.target.value;
    let path = `${endpoint}?title_like=${value}`;
    displayCourses(path);
}, 500))

function createCourseItem({ img, title, author, rating, buyAmount, price, bestSeller, id }) {
    const template = `<div class="courses-item">
    <div class="courses-img">
        <img src=${img} alt="">
        <button class = "course-remove" data-id = ${id}>
            <i class = "fa fa-times icon-remove"></i>
        </button>
        <button class = "course-edit" data-id = ${id}>
            <i class = "fa fa-pencil icon-edit"></i>
        </button>
    </div>
    <div class="courses-content">
        <h2 class="courses-title">${title}</h2>
        <h4 class="courses-author">${author}</h4>
        <div class="courses-meta">
            <span class="courses-rating">${rating}</span>
            <span class="courses-buyer">${buyAmount}</span>
        </div>
        <div class="courses-price">$${price}</div>
        ${bestSeller?'<div class="courses-bestsell">BestSeller</div>':''}
    </div>
    </div>`;
    courseList.insertAdjacentHTML('beforeend', template);
}
async function handleCreatingSource({ img, title, author, rating, buyAmount, price, bestSeller }) {
    let promise = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
            img,
            title,
            author,
            rating,
            buyAmount,
            price,
            bestSeller,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}
formPost.addEventListener('submit', async function(e) {
        e.preventDefault();
        notify.classList.remove('shown');
        let courses = {
            img: this.elements['img'].value,
            author: this.elements['author'].value,
            title: this.elements['title'].value,
            rating: this.elements['rating'].value,
            buyAmount: this.elements['buyAmount'].value,
            price: this.elements['price'].value,
            bestSeller: this.elements['bestSeller'].checked,
        }
        if (!/[0-9]/.test(courses.rating) || !/[0-9]/.test(courses.buyAmount) || !/[0-9]/.test(courses.price)) {
            notify.classList.add('shown');
            this.reset();
            return;
        }
        flatId ? await updateCourse({ id: flatId, ...courses }) : await handleCreatingSource(courses);
        this.reset();
        displayCourses();
        flatId = null;
        courseBtn.textContent = 'Add Course';
    })
    //get data
async function getDataCourse(link = endpoint) {
    const promise = await fetch(link);
    const data = await promise.json();
    return data;
}
async function displayCourses(link = endpoint) {
    let data = await getDataCourse(link);
    console.log(data);
    courseList.innerHTML = '';
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            createCourseItem(item);
        })
    }
}
courseList.addEventListener('click', async function(e) {
    if (e.target.matches('.course-remove')) {
        //remove course
        let idCourse = +e.target.dataset.id;
        await deleleteCourse(idCourse);
    } else if (e.target.matches('.course-edit')) {
        //update
        let idUpdate = +e.target.dataset.id;
        let data = await getCourse(idUpdate);
        formPost.elements['img'].value = data.img;
        formPost.elements['title'].value = data.title;
        formPost.elements['author'].value = data.author;
        formPost.elements['rating'].value = data.rating;
        formPost.elements['buyAmount'].value = data.buyAmount;
        formPost.elements['price'].value = data.price;
        formPost.elements['bestSeller'].checked = data.bestSeller;
        courseBtn.textContent = 'Update Course';
        flatId = idUpdate;
    }
})

async function deleleteCourse(id) {
    await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
    });
    displayCourses();
}
async function updateCourse({ id, img, title, author, rating, buyAmount, price, bestSeller }) {
    let promise = await fetch(`${endpoint}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                img,
                title,
                author,
                rating,
                buyAmount,
                price,
                bestSeller,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        // let data = await promise.json(); 
}
//get infor Course
async function getCourse(id) {
    let reponse = await fetch(`${endpoint}/${id}`);
    let data = await reponse.json();
    return data;
}
displayCourses();