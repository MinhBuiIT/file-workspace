window.addEventListener("load", function() {//load xong mới chạy code
    const text = document.querySelector(".text");//truy vấn text
    text.addEventListener("mouseenter",function(e) {
        const dataContent = text.dataset.tooltip;//lấy data của text
        const tooltipDiv = document.createElement('div');//tạo thẻ div
        tooltipDiv.className = "tooltip-text";//gắn class vào
        tooltipDiv.textContent = dataContent;//gắn data vào tooltipDiv
        document.body.appendChild(tooltipDiv);//append vào body
        const pos = text.getBoundingClientRect();//object chứa vị trí của text
        const tooltipDivHeight = tooltipDiv.offsetHeight;//độ cao của tooltipdiv
        const triangle = 10;//tam giác ở dưới tooltip có border-width = 10
        const {top,left,width,height} = pos;//destructoring object {}
        tooltipDiv.style.top = `${top - tooltipDivHeight - triangle}px`;//tính toán top - độ cao tooltip - tam giác 
        tooltipDiv.style.left = `${left - 10}px`; //left - padding
    });
    text.addEventListener("mouseleave",function(e) {
        const tooltipDiv = document.querySelector('.tooltip-text');
        tooltipDiv.parentNode.removeChild(tooltipDiv);
    });
});