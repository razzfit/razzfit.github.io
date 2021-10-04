window.addEventListener('DOMContentLoaded', function () {

      const tabs = document.querySelectorAll('.tabheader__item');
      const tabContent = document.querySelectorAll('.tabcontent');
      const tabsParent = document.querySelector('.tabheader__items');

      function hideContnets() {
        tabContent.forEach(function (item) {
          item.style.display = 'none';
        });

        tabs.forEach(item => {
          item.classList.remove('tabheader__item_active');
        });

      }
      
      hideContnets();
      showConatnents();

      function showConatnents(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
      }

  

      tabsParent.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
          tabs.forEach(function (item, i) {
            if (target == item) {
              hideContnets();
              showConatnents(i);
            }
          });
        }
      });
    });