
const ul = document.getElementById("projectList");
const slides = ul.children;
const slideArr = [...slides];
let current = 0;


function handleNext(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        nextSlide();
    }
}

function handlePrev(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        prevSlide();
    }
}

const nextSlide = () => {

    slideArr.forEach((el) => {
        if (el.classList.contains('current')) {
            current = slideArr.indexOf(el);
        }
    })

    const el = slideArr[current];

    let next = el.nextElementSibling;
    let nextNext = next.nextElementSibling;
    let prev = el.previousElementSibling;


    el.classList.remove('current');
    el.classList.remove('nextSlide');
    el.classList.remove('hide');
    el.classList.add('prevSlide');
    el.children[1].children[1].children[0].removeAttribute('tabindex');
    el.children[1].children[1].children[1].removeAttribute('tabindex');

    next.classList.remove('nextSlide');
    next.classList.remove('prevSlide');
    next.classList.remove('hide');
    next.classList.add('current');
    next.children[1].children[1].children[0].setAttribute('tabindex', '7');
    next.children[1].children[1].children[1].setAttribute('tabindex', '8');

    if (prev !== null) {
        prev.classList.remove('prevSlide');
        prev.classList.remove('current');
        prev.classList.add('hide');
        prev.children[1].children[1].children[0].setAttribute('tabindex', '-1');
        prev.children[1].children[1].children[1].setAttribute('tabindex', '-1');
    }
    if (nextNext !== null) {
        nextNext.classList.remove('hide');
        nextNext.classList.remove('prevSlide');
        nextNext.classList.remove('current');
        nextNext.classList.add('nextSlide');
        nextNext.children[1].children[1].children[0].setAttribute('tabindex', '-1');
        nextNext.children[1].children[1].children[1].setAttribute('tabindex', '-1');
    }
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
    el.children[1].children[1].children[0].removeAttribute('tabindex');
    el.children[1].children[1].children[1].removeAttribute('tabindex');

    prev.classList.remove('prevSlide');
    prev.classList.remove('nextSlide');
    prev.classList.remove('hide');
    prev.classList.add('current');
    prev.children[1].children[1].children[0].setAttribute('tabindex', '7');
    prev.children[1].children[1].children[1].setAttribute('tabindex', '8');

    if (next !== null) {
        next.classList.remove('nextSlide');
        next.classList.remove('prevSlide');
        next.classList.remove('current');
        next.classList.add('hide');
        next.children[1].children[1].children[0].setAttribute('tabindex', '-1');
        next.children[1].children[1].children[1].setAttribute('tabindex', '-1');
    }
    
    if (prevPrev !== null) {
        prevPrev.classList.remove('hide');
        prevPrev.classList.remove('nextSlide');
        prevPrev.classList.remove('current');
        prevPrev.classList.add('prevSlide');
        prevPrev.children[1].children[1].children[0].setAttribute('tabindex', '-1');
        prevPrev.children[1].children[1].children[1].setAttribute('tabindex', '-1');
    }
}

const credits = document.querySelector('.creditsContainer');

function toggleCredits() {
    credits.classList.toggle('toggleCredits');
}

const displayCredits = () => {
    toggleCredits();
}

const menuBtn = document.querySelector('.menuBtn');
const menuContainer = document.querySelector('.menuContainer')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    toggleClass();
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


function toggleClass() {
    menuContainer.classList.toggle('toggleCls');
}

const li = document.querySelector('.project');

console.log(li.style.height);
