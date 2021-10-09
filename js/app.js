const tabsContents = document.querySelectorAll('.tabcontent');
const tabs = document.querySelectorAll('.tabheader__item');

function hide() {
  tabs.forEach(function (item) {
    item.classList.remove('tabheader__item_active');
  });
  tabsContents.forEach(function (item) {
    item.classList.remove('tabcontent_active');
  });
}

tabs.forEach(function (item, i) {
  item.addEventListener('click', function () {
    hide();
    this.classList.add('tabheader__item_active');
    tabsContents[i].classList.add('tabcontent_active');
  });
});

/// Modal windows

const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('[data-call-btn]');
const closeBtn = document.querySelector('.modal__close');

function openModal() {
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimer);
}

btn.forEach(function(item) {
  item.addEventListener('click', openModal);
});


closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    hideModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    hideModal();
  }
});

function hideModal() {
  modal.classList.add('hide');
  document.body.style.overflow = '';
}

// const modalTimer = setTimeout(openModal, 5000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);


// Cards

class Cards {
  constructor(src, alt, title, descr, price, parentElement)  {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentElement);
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      </div>
    `;
    this.parent.append(element);
  }
}

new Cards(
  "img/tabs/vegy.jpg",
  "vegy",
  "Меню 'Фитнес'",
  "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  229,
  '.menu .container'
).render();

new Cards(
  "img/tabs/elite.jpg",
  "elite",
  'Меню “Премиум”',
  "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше  овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  550,
  '.menu .container'
).render();

new Cards(
  "img/tabs/post.jpg",
  "post",
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  380,
  '.menu .container'
).render();