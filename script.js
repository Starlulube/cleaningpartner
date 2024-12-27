document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav a");
    
    if (window.scrollY > 100) { // 滾動超過 100px 時觸發
        header.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
    } else {
        header.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
    }
});
