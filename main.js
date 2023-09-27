//slideShow
// let img = document.getElementById('img');

// var imgs = [
//     "slideshow/img1.jpg",
//     "slideshow/img2.jpg",
//     "slideshow/img3.jpg",
//     "slideshow/img4.jpg",
//     "slideshow/img5.jpg",
//     "slideshow/img6.jpg",
//     "slideshow/img7.jpg",
// ];

// var index = 1;

// changeImgs = () =>{
//     img.src = imgs[index];
//     index++;
//     if(index == imgs.length){
//         index = 0;
//     }
// };
// setInterval(changeImgs,3000);

var counter = 1;
setInterval( () =>{
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6){
        counter = 1;
    }
},3000);

