
// colors

const firstColor = document.querySelector('.firstColor');
const secondColor = document.querySelector('.secondColor');
const thirthColor = document.querySelector('.thirthColor');
const fourthColor = document.querySelector('.fourthColor');
const fifthColor = document.querySelector('.fifthColor');
const img = document.querySelector('.sofa')

// firstColor.addEventListener('click',function(){
//     img.src = 'images/Bazmoc 5.png'
// })

// secondColor.addEventListener('click',function(){
//     img.src = 'images/Bazmoc 1.png'
// })

// thirthColor.addEventListener('click',function(){
//     img.src = 'images/Bazmoc 3.png'
// })

// fourthColor.addEventListener('click',function(){
//     img.src = 'images/Bazmoc 4.png'
// })

// fifthColor.addEventListener('click',function(){
//     img.src = 'images/Bazmoc 2.png'
// })


const arr = ['images/Bazmoc 5.png','images/Bazmoc 1.png','images/Bazmoc 3.png','images/Bazmoc 4.png','images/Bazmoc 2.png'];
let index = 0

setInterval(() => {
    firstColor.addEventListener('click',() => index = 0)
    secondColor.addEventListener('click',() => index = 1)
    thirthColor.addEventListener('click',() => index = 2)
    fourthColor.addEventListener('click',() => index = 3)
    fifthColor.addEventListener('click',() => index = 4)
    img.src = arr[index]
    if(index == arr.length - 1){
        index = 0
    }else{
        index++
    }
},1500)
