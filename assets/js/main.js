/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector(`a[href*=${sectionId}]`).classList.add("active");
    } else {
      document
        .querySelector(`a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  });
}

/*==================== SHOW SCROLL TOP ====================*/

function scrollTop() {
  const scrollTop = document.querySelector("#scroll-top");
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme)
    ? "dark"
    : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);


  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/

function scaleCv() {
  document.body.classList.add("scale-cv");
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/

function removeScaleCv() {
  document.body.classList.remove("scale-cv");
  
}

/*==================== GENERATE PDF ====================*/
// PDF generated area
const areaCv = document.querySelector("#area-cv");

const resumeButton = document.querySelector("#resume-button");

const opt = {
  margin:       0,
  filename:     'myResume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        {   format: 'letter', orientation: 'portrait' }
};

function generateResume(){
  html2pdf(areaCv,opt)
}

resumeButton.addEventListener("click", () => { 

  scaleCv();

  
  generateResume()
  setTimeout(removeScaleCv, 5000);
});
