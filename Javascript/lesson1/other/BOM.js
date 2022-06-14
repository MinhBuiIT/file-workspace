//BOM
console.log(location);
console.log(window.location);
const param = new URLSearchParams(location.search);
console.log(param);
console.log(param.get("page")); //10
console.log(param.get("type")); //input
console.log(param.has("page"));
param.set("page", 20);
console.log(param.get("page")); //20
// param.delete("page");
// console.log(param.get("page"));//null
for (let key of param.keys()) {
    console.log(key);
}
for (let key of param.values()) {
    console.log(key);
}