// Яндекс Карта
function init() {
  let map = new ymaps.Map('map', {
    center : [55.71289987232157,37.69605636770621],
    zoom: 9


  });

  55.790307068946255,37.377111499999984

  let placemark7 = new ymaps.Placemark([55.640304069096935,37.01811749999996], {

  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0],

});

  let placemark6 = new ymaps.Placemark([55.623386069112975,37.46534399999997], {

  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0],

});

  let placemark5 = new ymaps.Placemark([55.790307068946255,37.377111499999984], {

  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0],

});


  let placemark4 = new ymaps.Placemark([55.88255144861844,37.62693048530211], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });

  let placemark3 = new ymaps.Placemark([55.681904569055,37.6078345], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });


  let placemark2 = new ymaps.Placemark([55.706089564666705,37.700657378616334], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/1727/PNG/96/3986711-building-factory-industry-icon_112974.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
  });



  let placemark = new ymaps.Placemark([55.71289987232157,37.69605636770621], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn.icon-icons.com/icons2/3078/PNG/512/student_work_office_desk_work_space_computer_working_support_icon_191191.png',
    iconImageSize: [45, 45],
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
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
}

ymaps.ready(init);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// Свайпер насосы

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
        // ...
      },
    },


  spaceBetween: 15,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },



  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const TOKEN = "5753763390:AAEiWWOLgSBokq_A3XaYeXJFLVW4S84hi5w";
const CHAT_ID = "-1001944603862";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const suc = document.getElementById('suc');
const suc2 = document.getElementById('suc2');

document.getElementById('tg').addEventListener('submit', function(e) {
  e.preventDefault();

  let message = 'Заявка с Сайта!\n';
  message += `Имя: ${this.name.value}\n`;
  message += `Тел: ${ this.tel.value}\n`;
  message += `Запрос: ${ this.info.value}\n`;


  axios.post(URI_API, {
    chat_id: CHAT_ID,
    pars_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value ="";
    this.tel.value ="";
    this.info.value ="";
    // suc.innerHTML = "Сообщение отправлено";
    // suc.style.display = "block";
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally((res) => {
    console.log('Конец')
  })

})


// бургер

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelector(".header").classList.remove("open")
  }
});

document.getElementById("header__nav").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector("header").classList.remove("open")
});


// карусель
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
