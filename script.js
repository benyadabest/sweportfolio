new TypeIt("#adj", {
    speed: 100,
    waitUntilVisible: true,
    loop: true,
    lifeLike: true,
    cursor: true,
  })
    .type("fearless in adversity!", { delay: 300 })
    .pause(400)
    .delete(22)
    .pause(300)
    .type("motivated!", { delay: 300 })
    .pause(400)
    .delete(10)
    .pause(300)
    .type("hard-working!", { delay: 300 })
    .pause(400)
    .delete(13)
    .pause(300)
    .type("always eager to learn!", { delay: 300 })
    .pause(400)
    .delete(22)
    .pause(300)
    .type("resilient!", { delay: 300 })
    .pause(400)
    .delete(10)
    .pause(300)
    .type("positive!", { delay: 300 })
    .pause(400)
    .delete(9)
    .pause(300)
    .go();
  
  $("#mail").click(function () {
    window.open(
      "mailto:ben.shvartsman@gmail.com?body=Thanks for reaching out, hopefully you enjoyed the website!"
    );
  });
  