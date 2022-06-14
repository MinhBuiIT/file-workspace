const container = document.querySelector('.container');
container.classList.add('is-active');
container.classList.remove('container');
console.log(container.classList.contains('is-active'));//true
console.log(container.classList.contains('container'));//false
container.classList.toggle('container');//nếu có class thì nó sẽ xóa còn nếu ko thì sẽ tự thêm vô
const title = document.querySelector('.list')
console.log(title.className);
title.className = 'list';