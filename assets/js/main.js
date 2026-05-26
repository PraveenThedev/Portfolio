/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


const  skillsContent = document.getElementById('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){

    let itemClass = this.parentNode.className

    console.log(itemClass);
    

    for(i = 0 ; i < skillsContent; i++){
        skillsContent[i].className = 'skills__content  skills__close'
    }

    if(itemClass === 'skills__content  skills__close'){
        this.parentNode.className = 'skills__content  skills__open'
    }
    else{
        this.parentNode.className = 'skills__content  skills__close'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalBtns = document.querySelectorAll('.services__button');
const modals = document.querySelectorAll('.services__modal');
const modalCloses = document.querySelectorAll('.services__modal-close');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active-modal');
  });
});

modalCloses.forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.services__modal').classList.remove('active-modal');
  });
});


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      },
      mousewheel: true,
      keyboard: true,
    });



/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__manu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__manu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    console.log(window.scrollY);
    
    if(window.scrollY >= 560){
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);


/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// if (window.innerWidth < 768) {
//     AOS.init({
//       disable: true
//     });
//   } else {
//     AOS.init();
//   }
  

// scroll animations 

const slideEls = document.querySelectorAll(
    '.slide-in-left-on-scroll, ' +
    '.slide-in-right-on-scroll, ' +
    '.slide-in-top-on-scroll, ' +
    '.slide-in-bottom-on-scroll'
  );

  function handleScroll() {
    slideEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;

      if (isVisible) {
        el.classList.add('visible');
      } else {
        // el.classList.remove('visible'); // remove when out of view
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);


//   Form submission

  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);

    fetch("https://formspree.io/f/mqaqlndw", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showToast("Message sent successfully!");
        form.reset();
      } else {
        showToast("Failed to send message.");
      }
    })
    .catch(error => {
      showToast("An error occurred.");
      console.error(error);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000); // Hide after 3 seconds
  }

  // projects 

  function openDialog(button) {
    document.getElementById("modalTitle").innerText = button.dataset.title;
    document.getElementById("modalDescription").innerText = button.dataset.description;
    document.getElementById("modalStack").innerText = button.dataset.stack;

    // Populate features list
    const features = button.dataset.features.split(',');
    const featuresList = document.getElementById("modalFeatures");
    featuresList.innerHTML = '';
    features.forEach(item => {
      const li = document.createElement("div");
      li.textContent = `• ${item}`;
      featuresList.appendChild(li);
    });

    // Populate learnings list
    const learnings = button.dataset.contribution.split(',');
    const learningsList = document.getElementById("modalContribution");
    learningsList.innerHTML = '';
    learnings.forEach(item => {
      const li = document.createElement("div");
      li.textContent = `• ${item}`;
      learningsList.appendChild(li);
    });

    document.getElementById("portfolioModal").style.display = "block";
  }

  function closeDialog() {
    document.getElementById("portfolioModal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("portfolioModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };