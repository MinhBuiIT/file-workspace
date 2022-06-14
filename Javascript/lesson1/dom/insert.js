//1.element.insertAdiacentText('position','string');
const h3 = document.querySelector('h3');
h3.insertAdjacentText('beforebegin','begin before');
h3.insertAdjacentText('afterbegin','after begin');
h3.insertAdjacentText('beforeend','before end');
h3.insertAdjacentText('afterend','after end');
//2.element.insertAdiacentElement('position',node);
const strong = document.createElement('strong');
strong.classList.add('bold');
h3.insertAdjacentElement('beforeend',strong);
strong.insertAdjacentText('afterbegin',' Hello, everryone');
//3. element.insertAdiacentHtml('position',biến lưu đoạn code);
const template = `
<ul class="menu2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>`;
// const body = document.querySelector('body');
// body.insertAdjacentHTML('beforeend',template);
document.body.insertAdjacentHTML('beforeend',template);

