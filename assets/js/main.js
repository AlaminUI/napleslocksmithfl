document.addEventListener("scroll", function () {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      document.querySelector('header').classList.add('sticky-header')
    } else {
      document.querySelector('header').classList.remove('sticky-header')
    }
    })
    

    document.querySelector('.humberger i').addEventListener('click',function(){
        document.querySelector('.navagation-items').classList.add('show-menu')
    })
    document.querySelector('.mobile-close button').addEventListener('click',function(){
        document.querySelector('.navagation-items').classList.add('hide-menu')
        document.querySelector('.navagation-items').classList.remove('show-menu')
    })
    document.querySelector('.submenu-item').addEventListener('click',function(){
        this.classList.toggle('icon-spning')
        document.querySelector('.sub-menu').classList.toggle('submenu-show')
        // document.querySelector('.navagation-items').classList.remove('show-menu')
    })

    AOS.init();