// Яндекс Карта
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


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// Свайпер насосы

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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


  axios.post(URI_API, {
    chat_id: CHAT_ID,
    pars_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value ="";
    this.tel.value ="";

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




var XMC = function (object) {
  this.bodyID = object.bodyID;
  this.body = null;
  this.backgroundLayerID = object.backgroundLayerID;
  this.backgroundLayer = null;
  this.selector = object.selector;
  this.selectorValue = object.selectorValue;
  this.btnCloseId = object.btnId;
  this.btnClose = null;

  if('styleBg' in object){
      this.styleBg = object.styleBg;
  }

  if('styleBody' in object){
      this.styleBody = object.styleBody;
  }

  if('btnStyle' in object){
      this.styleBtn = object.btnStyle;
  }

  if('content' in object){
      this.content = object.content;
  } else {
      console.error('content not found');
  }

  if('classListBg' in object){
      this.classListBg = object.classListBg;
  }

  if('classListBody' in object){
      this.classListBody = object.classListBody;
  }

  if('classListBtn' in object){
      this.classListBtn = object.classListBtn;
  }



  this.delegateClick();
};
XMC.prototype.initBackground = function () {
  if(this.backgroundLayer === null){
      this.backgroundLayer = document.createElement('div');
      this.backgroundLayer.id = this.backgroundLayerID;
      document.body.appendChild(this.backgroundLayer);
      this.btnClose = document.createElement('div');
      this.btnClose.id = this.btnCloseId;
      this.btnClose.innerText = 'x';
      this.backgroundLayer.appendChild(this.btnClose);

      if(this.styleBg !== null){
          this.bgStyle();
      }

      if(this.classListBg !== null){
          this.setClasses(this.classListBg, this.backgroundLayer);
      }
      if(this.classListBtn){
          this.setClasses(this.classListBtn, this.btnClose);
      }

      if(this.styleBtn !== null){
          this.btnStyle();
      }

  }

  this.backgroundLayer.style.display = 'flex';
  return this;
};
XMC.prototype.bgStyle = function () {
  var mapSt = Object.keys(this.styleBg);
  var mf = this;
  mapSt.map(function (key) {
      mf.backgroundLayer.style[key] = mf.styleBg[key];
  })
};
XMC.prototype.btnStyle = function () {
  var mapSt = Object.keys(this.styleBtn);
  var mf = this;
  mapSt.map(function (key) {
      mf.btnClose.style[key] = mf.styleBtn[key];
  })
}
XMC.prototype.initTarget = function () {
  if(this.body === null){
      this.body = document.createElement('div');
      this.body.id = this.bodyID;
      this.backgroundLayer.appendChild(this.body);


      this.body.innerHTML = this.content;


      if(this.styleBody !== null){
          this.bodyStyle();
      }

      if(this.classListBody){
          this.setClasses(this.classListBody, this.body);
      }

  }
  this.body.style.display = 'flex';
  return this;
};
XMC.prototype.bodyStyle = function () {
  var mapSt = Object.keys(this.styleBody);
  var mf = this;
  mapSt.map(function (key) {
      mf.body.style[key] = mf.styleBody[key];
  })
}
XMC.prototype.show = function () {
  this.initBackground();
  this.initTarget();
};
XMC.prototype.close = function () {
  this.backgroundLayer.style.display = 'none';
  this.body.style.display = 'none';
};
XMC.prototype.delegateClick = function () {
  var mf = this;
  window.addEventListener('click', function (event) {
         if(event.target.hasAttribute(mf.selector) && event.target.getAttribute(mf.selector) === mf.selectorValue ){
             mf.show();
             mf.delegateClose();
         }
  }, mf, false);
};
XMC.prototype.delegateClose = function(){
  if(this.btnClose !== null){
      var btn = this.btnClose;
      var mf = this;
      btn.addEventListener('click', function () {
          mf.close();
      }, mf);
  }
};
XMC.prototype.setClasses = function (classes, element) {
  classes.map(function(className) {
      element.classList.add(className);
  });
}


new XMC({
  bodyID: 'rara',
  backgroundLayerID: 'lusia',
  selector: 'data-type',
  selectorValue: 'openModalForm',
  btnId: 'fbgmfClose',
  content: 'Привет',
  classListBg: ['zuzu', 'zaza'],
  classListBody: ['zuzu', 'zaza2'],
  classListBtn: ['zuzu', 'zaza3'],
  styleBg: {
      top: '0',
      left:'0',
      right: '0',
      bottom: '0',
      position: 'fixed',
      background: '#00000090',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '6'
  },
  styleBody: {
      minWidth: '200px',
      minHeight: '200px',
      background: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
  },
  btnStyle: {
      width: '40px',
      height: "40px",
      background: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '5%',
      right: '5%',
      cursor: 'pointer'
  }
});

