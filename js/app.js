$(document).ready(function () {
  // Questions
  $(".question__item").click(function () {
    $(this).toggleClass("question__item--active");
    $(this).find(".question__body").slideToggle();
  });

  $(".question__item--active").click(function () {
    $(this).removeClass("question__item--active");
  });

  // Burger Menu
  $("#nav__toggle").on("click", function (evt) {
    evt.preventDefault();
    $("[data-scroll]").addClass("link__mobile");
    $(this).toggleClass("active");
    $("#nav").slideToggle();
    $("body").toggleClass("fixed");
  });

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      1000
    );

    if ($this.hasClass("link__mobile")) {
      $("#nav").slideToggle();
      $("body").toggleClass("fixed");
      $("#nav__toggle").toggleClass("active");
    }
  });
});
