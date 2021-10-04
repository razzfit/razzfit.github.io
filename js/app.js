const tabsContents = document.querySelectorAll('.tabcontent');
const tabs = document.querySelectorAll('.tabheader__item');

function hide() {
  tabs.forEach(function (item) {
    item.classList.remove('tabheader__item_active');
  });
  tabsContents.forEach(function(item) {
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
