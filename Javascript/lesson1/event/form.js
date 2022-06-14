//keydown
const inputText = document.querySelector('.text');
const checkbox = document.querySelector('.checkbox');
// inputText.addEventListener('keydown', handleInput);
    // console.log(e.key);
    // console.log(e.which);giống keyCode
    // console.log(e.keyCode);
function handleInput(e) {
    if(e.key === "Enter") {
        // console.log("Enter");
    }
}
//keyup
inputText.addEventListener('keyup',function(e) {
    e.preventDefault();
    // console.log(e.key);
});
//keypress
inputText.addEventListener('keypress',function(e) {
    // console.log(e.key);
})
//change
// checkbox.addEventListener("change",function(e) {
//     console.log('Working');
// })
inputText.addEventListener("change",function(e) {
    // console.log('Working');
})
//focus & blur
inputText.addEventListener('focus',function(e) {
    // console.log("focus");
})
inputText.addEventListener("blur",function(e) {
    // console.log("blur");
})
//submit
const form = document.querySelector('.form');
form.addEventListener('submit',function(e) {
    e.preventDefault();//ngăn chăn load lại web khi nhấn submit 
    // console.log(this.elements);
    let content = this.elements["username"].value;//this nhằm để chỉ thẻ đang add sự kiện
    let gender = this.elements["gender"].value;//elements["gender"] là cái name = "gender" trong input
    console.log({content,gender});//in ra bằng destructuring
    //cách truy xuất dữ liệu checkbox
    // checkbox thì ngdung có thể check nhiều lựa chọn nên ta phải truy xuất querySelectorAll
    let hobby = this.querySelectorAll(`input[name = "hobby"]`);//truy xuất phần tử con this(form) input có name là hobby
    // console.log(hobby);
    let hobbyValues = [];
    [...hobby].forEach(item => hobbyValues.push(item.value));//lặp qua từng ptu trong mảng hobby rồi push nó vô emty array
    console.log(hobbyValues);
})// đặt những câu lệnh này trong sự kiện submit bởi vì khi trong form đăng nhập ta cần lấy dữ liệu trong form đưa lên server cho backend xử lý