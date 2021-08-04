
// const ul = document.getElementById("projectList");
// const slides = ul.children;
// const slideArr = [...slides];
// let current = 0;


// function handleNext(e){
//     if(e.keyCode === 13){
//         e.preventDefault(); // Ensure it is only this code that runs
//         nextSlide();
//     }
// }

// function handlePrev(e){
//     if(e.keyCode === 13){
//         e.preventDefault(); // Ensure it is only this code that runs
//         prevSlide();
//     }
// }

// function handleDisplay(e){
//     if(e.keyCode === 13){
//         e.preventDefault(); // Ensure it is only this code that runs
//         displayCredits();   
//     }
// }

// const nextSlide = () => {

//     slideArr.forEach((el) => {
//         if (el.classList.contains('current')) {
//             current = slideArr.indexOf(el);
//         }
//     })

//     const el = slideArr[current];

//     let next = el.nextElementSibling;
//     let nextNext = next.nextElementSibling;
//     let prev = el.previousElementSibling;


//     el.classList.remove('current');
//     el.classList.remove('nextSlide');
//     el.classList.remove('hide');
//     el.classList.add('prevSlide');
//     el.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//     el.children[1].children[1].children[1].setAttribute('tabindex', '-1');

//     next.classList.remove('nextSlide');
//     next.classList.remove('prevSlide');
//     next.classList.remove('hide');
//     next.classList.add('current');
//     next.children[1].children[1].children[0].setAttribute('tabindex', '7');
//     next.children[1].children[1].children[1].setAttribute('tabindex', '8');

//     if (prev !== null) {
//         prev.classList.remove('prevSlide');
//         prev.classList.remove('current');
//         prev.classList.add('hide');
//         prev.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//         prev.children[1].children[1].children[1].setAttribute('tabindex', '-1');
//     }
//     if (nextNext !== null) {
//         nextNext.classList.remove('hide');
//         nextNext.classList.remove('prevSlide');
//         nextNext.classList.remove('current');
//         nextNext.classList.add('nextSlide');
//         nextNext.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//         nextNext.children[1].children[1].children[1].setAttribute('tabindex', '-1');
//     }
// }

// const prevSlide = () => {

//     slideArr.forEach((el) => {
//         if (el.classList.contains('current')) {
//             current = slideArr.indexOf(el);
//         }
//     })

//     const el = slideArr[current];

//     let next = el.nextElementSibling;
//     let prev = el.previousElementSibling;
//     let prevPrev = prev.previousElementSibling;

    
//     el.classList.remove('current');
//     el.classList.remove('prevSlide');
//     el.classList.remove('hide');
//     el.classList.add('nextSlide');
//     el.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//     el.children[1].children[1].children[1].setAttribute('tabindex', '-1');

//     prev.classList.remove('prevSlide');
//     prev.classList.remove('nextSlide');
//     prev.classList.remove('hide');
//     prev.classList.add('current');
//     prev.children[1].children[1].children[0].setAttribute('tabindex', '7');
//     prev.children[1].children[1].children[1].setAttribute('tabindex', '8');

//     if (next !== null) {
//         next.classList.remove('nextSlide');
//         next.classList.remove('prevSlide');
//         next.classList.remove('current');
//         next.classList.add('hide');
//         next.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//         next.children[1].children[1].children[1].setAttribute('tabindex', '-1');
//     }
    
//     if (prevPrev !== null) {
//         prevPrev.classList.remove('hide');
//         prevPrev.classList.remove('nextSlide');
//         prevPrev.classList.remove('current');
//         prevPrev.classList.add('prevSlide');
//         prevPrev.children[1].children[1].children[0].setAttribute('tabindex', '-1');
//         prevPrev.children[1].children[1].children[1].setAttribute('tabindex', '-1');
//     }
// }

const credits = document.querySelector('.creditsContainer');

function toggleCredits() {
    credits.classList.toggle('toggleCredits');
}

const displayCredits = () => {
    toggleCredits();
}

const menuBtn = document.querySelector('.menuBtn');
const menuContainer = document.querySelector('.menuContainer')
const menuLi = document.querySelectorAll('.menuContainer li')

let menuOpen = false;


const toggleMenu = () => {
    toggleClass();
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuLi.forEach(item => item.addEventListener('click', toggleMenu))


function toggleClass() {
    menuContainer.classList.toggle('toggleCls');
}


const panels = document.querySelectorAll('.panel');
const projectImg = document.querySelectorAll('.projectImage');
const image = document.querySelectorAll('.projectImage img')


    function toggleOpen() {
        this.classList.toggle('open');
    }

    function toggleFocus() {
        if(this.classList.contains('open')){
            return;
        } else {
            this.blur();
        }
    }

    function toggleKeyOpen(e) {
        e.target.classList.toggle('open');
    }


    function handleKeyPress(e){
        if(e.keyCode === 13 || e.key === 'Enter'){
            toggleKeyOpen(e);
        }
    }

    let currentImg;
    function hoverImage(e) {
        
        if(e.target.tagName === 'IMG') {
            currentImg = e.target;
        }
        
        const position = {
            x: e.pageX,
            y: e.pageY
        };
        
        const offset = {
            left: currentImg.offsetLeft,
            top: currentImg.offsetTop
        };
        
        let reference = currentImg.offsetParent;
        
        while(reference){
            offset.left += reference.offsetLeft;
            offset.top += reference.offsetTop;
            reference = reference.offsetParent;
        }
        const x = (position.x - 300) - offset.left;
        const y = (position.y - 150) - offset.top;


        const positiveX = Math.abs(x);
        const positiveY = Math.abs(y);

        if (x < 0 && y < 0) {
            currentImg.style.transform = `translate(${positiveX * 2}px, ${positiveY * 2}px) scale(2)`;
        } else if (x < 0){
            currentImg.style.transform = `translate(${positiveX * 2}px, -${y * 2}px) scale(2)`;
        } else if (y < 0) {
            currentImg.style.transform = `translate(-${x * 2}px, ${positiveY * 2}px) scale(2)`;
        } else {
            currentImg.style.transform = `translate(-${x * 2}px, -${y * 2}px) scale(2)`;
        }
    }

    function resetImage() {
        currentImg.style.transform = `translate(-0px, -0px)`;
    }

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('click', toggleFocus));
panels.forEach(panel => panel.addEventListener('keypress', (e) => handleKeyPress(e)));
projectImg.forEach(image => image.addEventListener('mousemove', hoverImage));
projectImg.forEach(image => image.addEventListener('mouseover', hoverImage));
projectImg.forEach(image => image.addEventListener('mouseleave', resetImage));
