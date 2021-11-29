const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },

  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

    const navbar = document.querySelector('nav'); 
    navbar.style.fontStyle = "italic"; 
    const nav1 = document.querySelector('nav a:nth-of-type(1)'); 
    const nav2 = document.querySelector('nav-item-2'); 
    const nav3 = document.querySelector('nav-item-3'); 
    const nav4 = document.querySelector('nav-item-4'); 
    const nav5 = document.querySelector('nav-item-5'); 
    const nav6 = document.querySelector('nav-item-6'); 

    nav1.textContent = siteContent["nav"]["nav-item-1"]; 
    nav2.textContent = siteContent["nav"]["nav-item-2"]; 
    nav3.textContent = siteContent["nav"]["nav-item-3"]; 
    nav4.textContent = siteContent["nav"]["nav-item-4"]; 
    nav5.textContent = siteContent["nav"]["nav-item-5"]; 
    nav6.textContent = siteContent["nav"]["nav-item-6"]; 


    const companyLogo = document.querySelector('#logo-img'); 
    companyLogo = siteContent["images"]["logo-img"]; 


    const ctaText = document.querySelector('h1'); 
    ctaText.textContent = sitecontent['cta']['h1']; 

    const buttonText = document.querySelector('button'); 
    buttonText.innerText = siteContent["cta"]["button"]; 



    /*const siteContent = {
      "contact": {
      "contact-h4": "Contact",
      "address": "123 Way 456 Street Somewhere, USA",
      "phone": "1 (888) 888-8888",
      "email": "sales@greatidea.io",
      }
    }; 

    const contactH4 = document.querySelector('.contactH4'); 
    const address = document.querySelector(".address"); 
    const phone = document.querySelector(".phone"); 
    const email = document.querySelector(".email"); 

    contactH4.textContent = data["contact"]["contactH4"]; 
    address.textContent = data["contact"]["address"]; */
