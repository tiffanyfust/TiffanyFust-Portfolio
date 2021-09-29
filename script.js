
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

const handleDarkLight = () => {
    if (lightDarkIcon.children[0].classList.contains("fa-sun")) {
        lightDarkIcon.children[0].classList.remove("fa-sun");
        lightDarkIcon.children[0].classList.add("fa-moon")
        body.classList.add('lightMode')

        for(i = 0 ; i < h2.length; i++) {
            h2[i].classList.add('lightMode')
        }

        for(i = 0; i < links.length; i++) {
            links[i].classList.add('lightMode');
        }

        h1.classList.add('lightMode');
        nav.classList.add('lightMode');
        headerP.classList.add('lightMode');
        skillsList.classList.add('lightMode');
        lightDarkIcon.classList.add('lightMode');
    } else {
        lightDarkIcon.children[0].classList.remove("fa-moon");
        lightDarkIcon.children[0].classList.add("fa-sun")
        body.classList.remove('lightMode');

        for(i = 0 ; i < h2.length; i++) {
            h2[i].classList.remove('lightMode')
        }

        for(i = 0; i < links.length; i++) {
            links[i].classList.remove('lightMode');
        }

        h1.classList.remove('lightMode');
        nav.classList.remove('lightMode');
        headerP.classList.remove('lightMode');
        skillsList.classList.remove('lightMode');
        lightDarkIcon.classList.remove('lightMode');
    }

}

const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelector('h1');
const links = document.querySelectorAll('a');
const nav = document.querySelector('nav');
const headerP = document.querySelector('.headerText');
const skillsList = document.querySelector('.skillsList');

const lightDarkIcon = document.querySelector('.lightDark');

lightDarkIcon.addEventListener('click', handleDarkLight);
