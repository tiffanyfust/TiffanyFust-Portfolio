


const ul = document.getElementById("projectList");
const slides = ul.children;
const slideArr = [...slides];
let current = 0;

const nextSlide = () => {

    slideArr.forEach((el) => {
        if (el.classList.contains('current')) {
            current = slideArr.indexOf(el);
        }
    })
  console.log(slideArr[current])
    const el = slideArr[current];

    let next = el.nextElementSibling;
    let nextNext = next.nextElementSibling;
    let prev = el.previousElementSibling;


    el.classList.remove('current');
    el.classList.remove('nextSlide');
    el.classList.remove('hide');
    el.classList.add('prevSlide');

    next.classList.remove('nextSlide');
    next.classList.remove('prevSlide');
    next.classList.remove('hide');
    next.classList.add('current');

    nextNext.classList.remove('hide');
    nextNext.classList.remove('prevSlide');
    nextNext.classList.remove('current');
    nextNext.classList.add('nextSlide');

    prev.classList.remove('prevSlide');
    prev.classList.remove('nextSlide');
    prev.classList.remove('current');
    prev.classList.add('hide');
    
}

const prevSlide = () => {

    slideArr.forEach((el) => {
        if (el.classList.contains('current')) {
            current = slideArr.indexOf(el);
        }
    })

    const el = slideArr[current];

    let next = el.nextElementSibling;
    let prev = el.previousElementSibling;
    let prevPrev = prev.previousElementSibling;

    
    el.classList.remove('current');
    el.classList.remove('prevSlide');
    el.classList.remove('hide');
    el.classList.add('nextSlide');

    prev.classList.remove('prevSlide');
    prev.classList.remove('nextSlide');
    prev.classList.remove('hide');
    prev.classList.add('current');

    next.classList.remove('nextSlide');
    next.classList.remove('prevSlide');
    next.classList.remove('current');
    next.classList.add('hide');

    prevPrev.classList.remove('hide');
    prevPrev.classList.remove('nextSlide');
    prevPrev.classList.remove('current');
    prevPrev.classList.add('prevSlide');
    
}


// const nextSlide = () => {

//     slideArr.forEach((el) => {
//     if (el.classList.contains('current')) {
//         let next = el.nextElementSibling;
//         let prev = el.previousElementSibling;
//         next.classList.remove('nextSlide');
//         next.classList.add('current');

//         prev.classList.remove('prevSlide');
//         prev.classList.add('hide');
//         el.classList.add('prevSlide');
//         break;
//     }
//     })
// }
