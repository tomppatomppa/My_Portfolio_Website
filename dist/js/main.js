// soundslice video
var ssiframe = document.getElementById('ssembed').contentWindow;
// Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    
    if (!showMenu) {
        
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    }else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        //stop video playback when menu is closed
        ssiframe.postMessage('{"method": "pause"}', 'https://www.soundslice.com/slices/ql4Dc/embed/');
        showMenu = false;
    }
}



