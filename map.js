ymaps3.ready.then(() => {
    // HTML-элемент.
    const map = new ymaps3.YMap(document.getElementById('map'), {
      location: {
        center: [37.588144, 55.733842],
        zoom: 10
      }
    });
  });

