const hamburgerButton = document.querySelector(".hamburger-button");
const navBarLinks = document.querySelector(".nav-bar ul");
const navBar = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const navMenuHamburger = document.querySelector(".nav-menu-hamburger");
const switchLightMode = document.querySelector(".switch-light-mode");
const leftNav = document.querySelector(".left-nav");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const headerText = document.querySelector(".main-hero-text");
const headerTextDesc = document.querySelector(".main-hero-text-desc");
const line = document.querySelector(".line");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const cardText = document.querySelector(".card-text");
const joinText = document.querySelector(".join-text-footer");
const topFooter = document.querySelector(".top-footer");
const bottomFooter = document.querySelector(".bottom-footer");
const bottomListHeader = document.querySelector(".bottom-list-header");
const bottomListHeader2 = document.querySelector(".bottom-list-header2");
const aLink = document.querySelector(".a-links-bottom");
const aLink2 = document.querySelector(".a-links-bottom2");
const aLink3 = document.querySelector(".a-links-bottom3");
const aLink4 = document.querySelector(".a-links-bottom4");
const aLink5 = document.querySelector(".a-links-bottom5");
const aLink6 = document.querySelector(".a-links-bottom6");
const aboutUsText = document.querySelector(".about-us-text");
const roadMap = document.querySelector(".road-map")
const roadMapHeader = document.querySelector(".road-map-header")
const roadMapCardHeaderContainer = document.querySelectorAll(".road-map-card-header-container");
const roadMapCardHeader = document.querySelectorAll(".road-map-card-header");
const roadMapLine = document.querySelector(".road-map-header-line");
const roadMapCard = document.querySelectorAll(".road-map-card");
const loadLine = document.querySelector(".load-line");
const vertLine = document.querySelectorAll(".vert-line");
const circle = document.querySelectorAll(".circle")
const aboutUs = document.querySelector(".about-us")
const spinningGif = document.querySelector(".spinning-circle-gif");
const discordButton = document.querySelector(".discord-button");
const applicationSection = document.querySelector(".application-vision-section");
const airdropSection = document.querySelector(".airdrop-vision-section");
const communitySection = document.querySelector(".community-vision-section");
const communityCard = document.querySelector(".mission-card1");
const airdropCard = document.querySelector(".mission-card2");
const applicationCard = document.querySelector(".mission-card3");
const body = document.body;
let hamburgerButtonClicked = false;
let darkmode = true;

hamburgerButton.addEventListener("click", e => {
    if(hamburgerButtonClicked == false) {
        hamburgerButtonClicked = true;
        navBarLinks.style.display = "block";
        navMenuHamburger.style.backgroundColor = "#b679f2";
        navMenuHamburger.style.paddingRight = "8em";
    }
    else {
        hamburgerButtonClicked = false;
        navBarLinks.style.display = "none";
        navMenuHamburger.style.backgroundColor = "transparent";
        navMenuHamburger.style.paddingRight = "0em";
    }
});

window.addEventListener("resize", () => {
    if(window.innerWidth > 820){
        navBarLinks.style.display = "flex";
        navMenuHamburger.style.backgroundColor = "transparent";
        navMenuHamburger.style.paddingRight = "0em";
    }
    else if (window.innerWidth <= 820) {
        navBarLinks.style.display = "none";
        navMenuHamburger.style.backgroundColor = "transparent";
        navMenuHamburger.style.paddingRight = "0em";
    }
});

const observer3 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('load-line');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer2 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('moveUp2');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('moveUp');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer4 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('moveUp4');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer5 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('moveUp3');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer6 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('moveUp');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

observer.observe(aboutUsText);
observer4.observe(applicationCard);
observer5.observe(airdropCard);
observer6.observe(communityCard);

roadMapCard.forEach(element => {
    observer2.observe(element);
});
vertLine.forEach(element => {
    observer3.observe(element);
});



switchLightMode.addEventListener("click", () => {
    if(darkmode == true) {
        darkmode = false;
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        body.style.backgroundColor = "white";
        headerText.style.color = "black";
        headerTextDesc.style.color = "black";
        line.style.backgroundColor = "black";
        leftNav.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        card.style.backgroundColor = "#19181A";
        card2.style.backgroundColor = "#19181A";
        card3.style.backgroundColor = "#19181A";
        card.style.color = "white";
        card2.style.color = "white";
        card3.style.color = "white";
        joinText.style.color = "black";
        topFooter.style.backgroundColor = "white";
        bottomFooter.style.backgroundColor = "rgb(240, 238, 238)"
        bottomFooter.style.color = "#19181A";
        bottomListHeader.style.color = "black";
        bottomListHeader2.style.color = "black";
        aLink.style.color = "black";
        aLink2.style.color = "black";
        aLink3.style.color = "black";
        aLink4.style.color = "black";
        aLink5.style.color = "black";
        aLink6.style.color = "black";
        roadMap.style.backgroundImage = "linear-gradient(#272727 , white 18%)";
        roadMapHeader.style.color = "black";
        roadMapCardHeaderContainer.forEach(element => {
            element.style.backgroundColor = "light grey";
        });
        roadMapCardHeader.forEach(element => {
            element.style.color = "black";
        });
        circle.forEach(element => {
            element.style.backgroundColor = "black";
        });
        vertLine.forEach(element => {
            element.style.backgroundColor = "black";
        });
        roadMapLine.style.backgroundColor = "black";
        aboutUs.style.backgroundImage = "linear-gradient(white , #272727 28%)";
        spinningGif.src = "Images/output-onlinegiftools (4).gif";
        discordButton.style.color = "black";
    }
    else {
        darkmode = true;
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        body.style.backgroundColor = "#19181A";
        headerText.style.color = "white";
        headerTextDesc.style.color = "white";
        line.style.backgroundColor = "white";
        leftNav.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        card.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
        card3.style.backgroundColor = "white";
        card.style.color = "#19181A";
        card2.style.color = "#19181A";
        card3.style.color = "#19181A";
        joinText.style.color = "white";
        topFooter.style.backgroundColor = "#19181A";
        bottomFooter.style.backgroundColor = "#19181A";
        bottomFooter.style.color = "white";
        bottomListHeader.style.color = "white";
        bottomListHeader2.style.color = "white";
        aLink.style.color = "white";
        aLink2.style.color = "white";
        aLink3.style.color = "white";
        aLink4.style.color = "white";
        aLink5.style.color = "white";
        aLink6.style.color = "white";
        roadMap.style.backgroundColor = "#0d0d0d";
        roadMapHeader.style.color = "white";
        roadMapCardHeaderContainer.forEach(element => {
            element.style.backgroundColor = "white";
        });
        roadMapCardHeader.forEach(element => {
            element.style.color = "black";
        });
        circle.forEach(element => {
            element.style.backgroundColor = "white";
        });
        vertLine.forEach(element => {
            element.style.backgroundColor = "white";
        });
        roadMapLine.style.backgroundColor = "white";
        aboutUs.style.backgroundImage = "linear-gradient(#19181A , #272727 18%)";
        roadMap.style.backgroundImage = "linear-gradient(#272727 , #0d0d0d 18%)";
        spinningGif.src = "Images/output-onlinegiftools (5).gif";
        discordButton.style.color = "white";
    }
});