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

btn.forEach(function(item) {
  item.addEventListener('click', function() {
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
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


