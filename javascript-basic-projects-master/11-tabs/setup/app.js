const listItem = document.querySelectorAll('.tab-list li');
const tabItem = document.querySelectorAll('.tab-item');
//active list item
listItem.forEach((item) => {
    item.addEventListener('click',function(e) {
        removeClassList(listItem,'active');
        e.target.classList.add('active');
        let data = e.target.dataset.value;
        removeClassList(tabItem,'shown');
        // tabItem.forEach((ite) => {
        //     if(ite.dataset.id === data) {
        //         ite.classList.add('shown'); 
        //     }
        // })//dataset
        let element = document.getElementById(data);
        element.classList.add('shown');//id
    })
})
function removeClassList(list,className) {
    [...list].forEach((item) => {
        item.classList.remove(className);
    })
}
//shown des list item
