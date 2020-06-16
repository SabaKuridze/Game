let rpsImg = document.querySelectorAll('.rps-img');
let userImgNone = document.querySelector('#userImgNone');
let pcImgNone = document.querySelector('#pcImgNone');

let myScore = document.querySelector('#myScore')
let draw = document.querySelector('#draw')
let pcScore = document.querySelector('#pcScore')
let VR = document.querySelector('#VR')

for (let i = 0; i < rpsImg.length; i++) {
    rpsImg[i].addEventListener('click', function(event) {
    let rendomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
         userImgNone.src = event.srcElement.src;
         pcImgNone.src = rpsImg[rendomNum].src;

         if((i === 0 && rendomNum === 1 ) || (i === 1 && rendomNum === 2) || (i === 2 && rendomNum === 0)){
            myScore.innerText++;
             WN.style.display = "block";
             DR.style.display = "none";
             LS.style.display = "none";
         } else if (i === rendomNum) {
             draw.innerText++;
             DR.style.display = "block";
             WN.style.display = "none";
             LS.style.display = "none";
         } else {
             pcScore.innerText++;
             LS.style.display = "block";
             DR.style.display = "none";
             WN.style.display = "none";
         }

    });
}

//  let nowIsDate = new Date();
// // let todayIs = nowIsDate.getDay();
// let weekDays = ['ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი', 'კვირა'];

// console.log('დღეს არის ' + weekDays[todayIs - 1]);

// let userAge = prompt('რომელ წელს დაიბადე ?');
// let nowIsDate = new Date();
// let todayIs = nowIsDate.getFullYear();
// alert(todayIs -userAge);




