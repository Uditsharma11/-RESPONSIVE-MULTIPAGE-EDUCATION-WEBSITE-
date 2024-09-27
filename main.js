// ===change navbar style on scroll=====

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrool',window.scrollY >0);
})

// ======show/hide faq answer===================//

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //chnage icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }
   })
})

// ========================TESTIMONIAL SLIDE ====================


const slides = document.querySelector(".slider").children;
const indicator_image = document.querySelector(".slider-indicator").children;

for(let i = 0; i < indicator_image.length;i++){
    indicator_image[i].addEventListener("click",function() {
        for(let j = 0; j < indicator_image.length;j++){
            indicator_image[j].classList.remove("active");
        }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
        for(let j=0;j<slides.length;j++){
            slides[j].classList.remove("active")
        }
        slides[id].classList.add("active");
    })
}


// ===========show/hide (navbar)=====================

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// ===========close nav menu=====

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
 closeBtn.addEventListener('click',closeNav);