const imgList = document.querySelector('.img-list');
const loadMore = document.querySelector('.load-more');
const loading = document.querySelector('.loading');
const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
loadMore.style.display = 'none';
let page = 1;

function creatImgItem(title) {
    const template = ` <div class="img-item">
    <img src=${title} alt="" class="img">
    </div>`;
    imgList.insertAdjacentHTML('beforeend', template);
}
async function displayImg(page = 1) {
    loading.style.display = 'block';
    const response = await fetch(`${endpoint}&page=${page}`);
    let images = await response.json();
    console.log(images);
    if (Array.isArray(images) && images.length > 0) {
        images.forEach((item) => {
            let url = item.download_url;
            creatImgItem(url)
        })
    }
    loadMore.style.display = 'block';
    loading.style.display = 'none';

}
displayImg();
loadMore.addEventListener('click', handleLoadMore);

function handleLoadMore() {
    page++;
    displayImg(page);
}