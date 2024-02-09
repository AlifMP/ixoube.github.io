// Alif :P
const header = document.querySelector("header");
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const descTitle = document.querySelector(".desc-title");
const aboutSection = document.querySelector("#about");
const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");
const featureSection = document.querySelector("#features");
const featureMain = document.querySelector(".features-main-text");
const featureContent = document.querySelector(".features-content");
const featureSecondContent = document.querySelector(".features-second-text");

window.addEventListener("scroll", function () {
  const sectionTop = aboutSection.offsetTop;
  const sectionHeight = aboutSection.clientHeight;

  if (window.scrollY <= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
    aboutImg.classList.remove("aboutanimate");
    aboutText.classList.remove("aboutanimate2");
  }
});

window.addEventListener("scroll", function () {
  const sectionTop = featureSection.offsetTop;
  const sectionHeight = featureSection.clientHeight;

  if (window.scrollY <= sectionTop - sectionHeight / 6 && window.scrollY < sectionTop + sectionHeight) {
    featureMain.classList.remove("featureanimate");
    featureContent.classList.remove("featureanimate");
    featureSecondContent.classList.remove("featureanimate");
  }
});

window.onload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

window.addEventListener("load", function () {
  header.classList.toggle("headerload");
});

window.addEventListener("load", function () {
  title.classList.toggle("titleload");
});

window.addEventListener("load", function () {
  subTitle.classList.toggle("titleload");
});

window.addEventListener("load", function () {
  descTitle.classList.toggle("titleload");
});

window.addEventListener("scroll", function () {
  const sectionTop = aboutSection.offsetTop;
  const sectionHeight = aboutSection.clientHeight;

  if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
    aboutImg.classList.add("aboutanimate");
    aboutText.classList.add("aboutanimate2");
  }
});

window.addEventListener("scroll", function () {
  const sectionTop = featureSection.offsetTop;
  const sectionHeight = featureSection.clientHeight;

  if (window.scrollY >= sectionTop - sectionHeight / 5 && window.scrollY < sectionTop + sectionHeight) {
    featureMain.classList.add("featureanimate");
    featureContent.classList.add("featureanimate");
    featureSecondContent.classList.add("featureanimate");
  }
});

const botContactLink = document.getElementById("bot-contact");

botContactLink.addEventListener("click", function (event) {
  event.preventDefault();

  const targetUrl = botContactLink.getAttribute("href");

  window.open(targetUrl, "_blank");
});

const navbarlinks = document.querySelectorAll(".navlist a");

navbarlinks.forEach((navbarlink) => {
  navbarlink.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(navbarlink.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navbarlinks.forEach((navbarlink) => {
    navbarlink.classList.remove("active");
    if (navbarlink.getAttribute("href").slice(1) === currentSection) {
      navbarlink.classList.add("active");
    }
  });
});
