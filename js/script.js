window.addEventListener('DOMContentLoaded', () => {  // Обязательное условие, которое позволит безошибочно загрузить DOM дерево и приступтить к скрипту
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'); // Объявили 3 переменные;

    function hideTabContent(a) { // Создали функцию под названием hideTabContent и вложили в него А
        for (let i = a; i < tabContent.length; i++) { // Цикл (переменная i = a; i<количества Tabcontent`ов; i++)
            tabContent[i].classList.remove('show'); // У tabContent[i] удаляем класс show и добавляем hide
            tabContent[i].classList.add('hide'); // Тем самым скрываем все элементы
        }
    }
    hideTabContent(1); // Вызываем функцию со значением а = 1; тем самым указываем индекс второго блока, а значит первый блок будет отображаться

    function showTabContent(b){ // Создали функцию под названием ShowTabContent и вложили в него B
        if (tabContent[b].classList.contains('hide')){ //Если tabContent[b] имеет класс hide
            tabContent[b].classList.remove('hide'); // мы удаляем этот класс и
            tebContent[b].classList.add('show'); // добавляем класс show
        }
    }

    info.addEventListener('click', (event) => { // Добавляем событие клика на родительский элемент info но чтобы клики работали только на пункты добавим переменную
        let target = event.target; // переменнная вызывает именно тот элемент, на который мы кликнули, не вызывая родителя
        if (target && target.classList.contains('info-header-tab')) { // Проверяем условие, что мы вызываем именно дочерний элемент и дочерний элемент с классом info-header-tab
            for (let i = 0; i < tab.length; i++) { // Цикл переменная i = 0; i < количества пунктов; i++
                if (target == tab[i]) { // Элемент на который мы нажали == пункту из меню с определенным индексом
                    hideTabContent(0); // мы скрываем все элементы
                    showTabContent(i); // и отображаем тот элемент, который имеет такой же индекс
                    break;
                }
            }
        }
    });
});
