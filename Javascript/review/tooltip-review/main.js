window.addEventListener('load',function() {
    const text = document.querySelector('.text');
    text.addEventListener('mouseenter',function(e) {
        const data = e.target.dataset.tooltip;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-text');
        document.body.appendChild(tooltip);
        tooltip.textContent = data;
        const posText = e.target.getBoundingClientRect();
        const {top,left,width} = posText;
        const tooltipHeight = tooltip.offsetHeight;
        tooltip.style.top = `${top-tooltipHeight-10}px`;
        tooltip.style.left = `${left -width/2}px`;
    })
    text.addEventListener('mouseleave',function(e) {
        const tooltip = document.querySelector('.tooltip-text');
        if(!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
    })
})