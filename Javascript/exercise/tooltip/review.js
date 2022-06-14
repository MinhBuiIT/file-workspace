const title = document.querySelector('.title');
const TooltipText = document.createElement('div');
TooltipText.className = 'tooltip-text';
document.body.appendChild(TooltipText);
TooltipText.textContent = title.dataset.tooltip;
title.addEventListener('mouseenter',(e) => {
    TooltipText.style.display = 'block';
    const {top,left,width,height} = title.getBoundingClientRect();
    const triangle = 10;
    TooltipText.style.top = `${top - height - triangle}px`;
    TooltipText.style.left = `${left - 10}px`;
});
title.addEventListener('mouseleave',(e) => {
    TooltipText.style.display = 'none';
});