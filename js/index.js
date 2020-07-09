const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


console.log('Task 1')

const makeElement = document.querySelectorAll('nav a');

makeElement[0].textContent = siteContent['nav']["nav-item-1"];
makeElement[1].textContent = siteContent['nav']["nav-item-2"];
makeElement[2].textContent = siteContent['nav']["nav-item-3"];
makeElement[3].textContent = siteContent['nav']["nav-item-4"];
makeElement[4].textContent = siteContent['nav']["nav-item-5"];
makeElement[5].textContent = siteContent['nav']["nav-item-6"];
makeElement[0].style.color = "green"
makeElement[1].style.color = "green"
makeElement[2].style.color = "green"
makeElement[3].style.color = "green"
makeElement[4].style.color = "green"
makeElement[5].style.color = "green"


// const newElement = document.createElement("nav a") 
// newElement.textContent = 'Website'

// const parentElement = document.querySelector('body')
// parentElement.appendChild(newElement)












console.log('task 2')

const h1Element = document.querySelector(".cta-text h1")
h1Element.textContent = siteContent["cta"]["h1"]

const button1 = document.querySelector(".cta button");
button1.textContent = siteContent["cta"]["button"];

let img23 = document.getElementById("cta-img")
img23.setAttribute('src', siteContent["cta"]["img-src"])


const mainh4 = document.querySelectorAll(".top-content h4")
mainh4[0].textContent = siteContent["main-content"]["features-h4"]
mainh4[1].textContent = siteContent["main-content"]["about-h4"]


const mainCont = document.querySelectorAll(".top-content p")
mainCont[0].textContent = siteContent["main-content"]["features-content"]
mainCont[1].textContent = siteContent["main-content"]["about-content"]


let img25 = document.getElementById("middle-img")
img25.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const bottomh4 = document.querySelectorAll(".bottom-content h4")
bottomh4[0].textContent = siteContent["main-content"]["services-h4"]
bottomh4[1].textContent = siteContent["main-content"]["product-h4"]
bottomh4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomCont = document.querySelectorAll(".bottom-content p")
bottomCont[0].textContent = siteContent["main-content"]["services-content"]
bottomCont[1].textContent = siteContent["main-content"]["product-content"]
bottomCont[2].textContent = siteContent["main-content"]["vision-content"]


const contact1 = document.querySelector(".contact h4")
contact1.textContent = siteContent["contact"]["contact-h4"]

const contactp = document.querySelectorAll(".contact p")
contactp[0].textContent = siteContent["contact"]["address"]
contactp[1].textContent = siteContent["contact"]["phone"]
contactp[2].textContent = siteContent["contact"]["email"]

const footer1 = document.querySelector("footer")
footer1.textContent = siteContent["footer"]["copyright"]


// const h2Class = document.getElementsByClassName('card-title');
// h2Class[2].style.color = 'red'; 