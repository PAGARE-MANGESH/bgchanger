
// // logic of random color


// const randomColor = function () {
//     let hxe = '0123456789ABCDEF'
//     let color = '#'

//     for (let i = 0; i < 6; i++) {
//         color += hxe[Math.floor(Math.random() * 16)]
//     }
//     return color
// }

// console.log(randomColor())



// // set color logic

// let time

// const startChangingColor = function () {
//     if (!time) {
//         time = setInterval(generatedRandomColor, 1000)
//     }

//     function generatedRandomColor() {
//         document.body.style.backgroundColor = randomColor()
//         console.log(randomColor())
//     }
// }


// const stopChangingColor = function () {
//     clearInterval(time)
//     time = null
// }


// document.getElementById('start').addEventListener('click', startChangingColor)
// document.getElementById('stop').addEventListener('click', stopChangingColor)




// project 2


// const insert = document.getElementById('insert')
// window.addEventListener('keydown', (e) => {
//    insert.innerHTML = `
//      <div class='color'>
//         <h1 class='color'> ${e.key === " " ? 'space' : e.key} </h1>
//         <h1 class='color'> ${e.keyCode} </h1>
//         <h1 class='color'> ${e.code}</h1>
//      </div>
//      `
// })





