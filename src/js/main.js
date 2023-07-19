(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 1127;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
    navMenu.addEventListener("click", (event) =>{
       if(event.target.hasAttribute("data-toggle") && 
       window.innerWidth <= mediaSize){
        //prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
  
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else {
        if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
        }
        
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";   
    }
      }
    })
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
        //if navMenu is open, close it
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        //if menuItemHasChildren is expanded, collapse it
        if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
        }
    }
    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    })
  })();
  
  
  
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor:true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });