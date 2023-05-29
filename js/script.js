function init() {
  let map = new ymaps.Map('map', {
    center : [55.71289987232157,37.69605636770621],
    zoom: 11


  });

  55.681904569055,37.6078345

  let placemark3 = new ymaps.Placemark([55.681904569055,37.6078345], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/512/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });


  let placemark2 = new ymaps.Placemark([55.706089564666705,37.700657378616334], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/512/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });



  let placemark = new ymaps.Placemark([55.71289987232157,37.69605636770621], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/3528/PNG/512/mixer_truck_vehicle_construction_work_icon_221343.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
}

ymaps.ready(init);



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


