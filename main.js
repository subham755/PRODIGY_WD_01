const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".headercontainer .sectionsubheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".headercontainer .sectionheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headercontainer .scrollbtn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headercontainer .headersocials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".aboutimage-1, .aboutimage-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".aboutimage-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".aboutcontent .sectionsubheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".aboutcontent .sectionheader", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".aboutcontent p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".aboutcontent .aboutbtn", {
  ...scrollRevealOption,
  delay: 2000,
});