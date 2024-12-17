$(document).ready(() => {

  /*
    Stores the prev scroll position
    stores selectors
    state variable to track if the curtain is open or closed
  */

  let prevScrollPos = $(window).scrollTop();
  const navbar = $("nav");
  const hamburger = $(".hamburger");
  const curtainContent = $(".curtain-content");
  const body = $("body");
  let curtainOpen = false;


  // Event listener for when the window scrolls

  $(window).on("scroll", () => {

    // Gets current scroll position

    const currentScrollPos = $(window).scrollTop();


    // Toggles styling/classes based on scroll direction

    navbar
      .toggleClass("top-0", prevScrollPos > currentScrollPos)
      .toggleClass("-top-26", !(prevScrollPos > currentScrollPos));


    // Change background based on scroll position when it reaches a certain height

    navbar.toggleClass("bg-black", currentScrollPos > $(window).height() - 88);


    // Updates scroll position

    prevScrollPos = currentScrollPos;
  });


  // Event listener for hamburger menu clicks

  hamburger.on("click", () => {

    // Gets current scroll position

    const currentScrollPos = $(window).scrollTop();


    // Animates the hamburger menu bars

    hamburger.children().eq(0).toggleClass("rotate-45");
    hamburger.children().eq(1).toggleClass("hidden");
    hamburger.children().eq(2).toggleClass("-rotate-45 top-2 absolute");
    hamburger.toggleClass("space-y-2");


    // Styling depending whether the curtain menu is open

    if (curtainOpen) {
      navbar.removeClass("h-screen");
      if (currentScrollPos < $(window).height() - 88) {
        navbar.removeClass("bg-black");
      }
    } else {
      navbar.addClass("bg-black h-screen");
    }

    curtainContent.toggleClass("invisible");


    // Disables scrolling if curtain menu open

    body.toggleClass(
      "overflow-y-hidden",
      $(window).width() < 768 && navbar.hasClass("h-screen"),
    );


    // Toggles the curtain menu state

    curtainOpen = !curtainOpen;
  });


  // Event listener for window resizing

  $(window).on("resize", () => {

    // Gets current scroll position

    const currentScrollPos = $(window).scrollTop();


    // Closes the curtain meny and resets navbar and hamburger if resizes to mobile

    if ($(window).width() >= 768 && curtainOpen) {
      navbar.removeClass("h-screen");
      curtainContent.addClass("invisible");
      hamburger.addClass("space-y-2");
      hamburger.children().eq(0).removeClass("rotate-45");
      hamburger.children().eq(1).removeClass("hidden");
      hamburger.children().eq(2).removeClass("-rotate-45 top-2 absolute");
      if (currentScrollPos < $(window).height() - 88) {
        navbar.removeClass("bg-black");
      }
      body.removeClass("overflow-y-hidden");
      curtainOpen = false;
    }
  });
});
