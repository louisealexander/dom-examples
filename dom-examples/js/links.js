console.log("Hello World!");
const body = document.querySelector('body');
body.style.backgroundColor = "#6598b8";
const links = document.querySelectorAll("a");
// console.log(links.length);
for(let i = 0; i < links.length; i++){
    // console.log(links[i]);
    links[i].style.color = "white";
}