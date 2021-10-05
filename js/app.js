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

const modalTimer = setTimeout(openModal, 5000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);
