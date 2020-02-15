if (window.SimpleSlide) {

  new SimpleSlide({
    slide: 'quote',
    auto: true,
    time: 5000 // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portfolio',
    auto: true,
    time: 5000, // tempo de transição dos slides
    nav: true
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
