new Glide('.glide', {
    type: "carousel",
    startAt: 0,
    perView: 1,
    focusAt: "center",
    autoplay: 4000,
    swipeTreshold: 100,
    perTouch: 1,
    gap: 0,
    direction: "ltr",
    hoverpause: false,
    animationDuration: 900
}).mount();
