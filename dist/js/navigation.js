$(document).ready(() => {
  let prevScrollPos = $(window).scrollTop();
  const navbar = $("nav");
  const hamburger = $(".hamburger");
  const curtainContent = $(".curtain-content");
  const body = $("body");
  let curtainOpen = false;

  $(window).on("scroll", () => {
    const currentScrollPos = $(window).scrollTop();

    navbar
      .toggleClass("top-0", prevScrollPos > currentScrollPos)
      .toggleClass("-top-26", !(prevScrollPos > currentScrollPos));

    navbar.toggleClass("bg-black", currentScrollPos > $(window).height() - 88);

    prevScrollPos = currentScrollPos;
  });

  hamburger.on("click", () => {
    const currentScrollPos = $(window).scrollTop();

    hamburger.children().eq(0).toggleClass("rotate-45");
    hamburger.children().eq(1).toggleClass("hidden");
    hamburger.children().eq(2).toggleClass("-rotate-45 top-2 absolute");
    hamburger.toggleClass("space-y-2");

    if (curtainOpen) {
      navbar.removeClass("h-screen");
      if (currentScrollPos < $(window).height() - 88) {
        navbar.removeClass("bg-black");
      }
    } else {
      navbar.addClass("bg-black h-screen");
    }

    curtainContent.toggleClass("invisible");

    body.toggleClass(
      "overflow-y-hidden",
      $(window).width() < 768 && navbar.hasClass("h-screen"),
    );

    curtainOpen = !curtainOpen;
  });

  $(window).on("resize", () => {
    const currentScrollPos = $(window).scrollTop();

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
