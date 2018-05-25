// Home - Click and scroll
$("#homeLink").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#mainNav").offset().top
    },
    300
  );
});

// About - Click and scroll
$("#aboutLink").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#aboutDiv").offset().top
    },
    300
  );
});

// Portfolio - Click and scroll
$("#portLink").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#portDiv").offset().top
    },
    300
  );
});

// Contact - Click and scroll
$("#contactLink").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    300
  );
});
