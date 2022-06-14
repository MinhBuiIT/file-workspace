const processBar = document.querySelector('.process-bar');
window.addEventListener('scroll',function(e) {
  let scrollTop = window.pageYOffset;
  let heightScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;//tính chiều cao của scrollbar
  let ratio = (scrollTop/heightScroll)*100;
  console.log(ratio);
  processBar.style.width = `${ratio}%`;
})