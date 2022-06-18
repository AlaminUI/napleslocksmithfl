document.addEventListener("scroll", function () {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      document.querySelector('header').classList.add('sticky-header')
    } else {
      document.querySelector('header').classList.remove('sticky-header')
    }
    })
    