// document.addEventListener('DOMContentLoaded', function() {
//     const menuButtons = document.querySelectorAll('.menu__btn');
//     const menuGroups = document.querySelectorAll('.menu__group');

//     function handleMenuClick(e) {
//         const targetMenu = e.target.dataset.menu;
//         const targetGroup = document.getElementById(targetMenu);

//     // Убираем класс "active" у всех секций
//     menuGroups.forEach(group => {
//         group.classList.remove('active');
//     });

//     // Добавляем класс "active" нужной секции
//     targetGroup.classList.add('active');
//     }

//   // Добавляем обработчики на кнопки
//     menuButtons.forEach(button => {
//         button.addEventListener('click', handleMenuClick);
//     });
// });

// const carousel = document.querySelector('.menu__carousel');
// const groups = document.querySelectorAll('.menu__group');
// const buttons = document.querySelectorAll('.menu__btn');

// if (!carousel || !groups.length) {
//     console.error('Элементы не найдены!');
// }

// let currentSlide = 0;

// const showGroups = (index) => {
//     groups.forEach((group, i) => {
//         group.classList.toggle('active', i === index);
//     });

//     buttons.forEach((button, i) => {
//         button.classList.toggle('active', i === index);
//     });
// }

// groups.forEach((group, index) => {
//     group.addEventListener('click', () => {
//         currentSlide = index;
//         showGroups(currentSlide);

//         const slideRect = group.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
//         const scrollTop = window.pageYOffset;

//         const scrollTo = scrollTop + (slideRect.top - (windowHeight / 2) + (slideRect.height / 2));

//         window.scrollTo({
//             top: scrollTo,
//             behavior: 'smooth'
//         });
//     });
// });

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         currentSlide = index;
//         showGroups(currentSlide);
//     });
// })


// showGroups(currentSlide);

// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.menu__btn');
//     const groups = document.querySelectorAll('.menu__group');

//   // Инициализация: показываем первую группу
//     const firstGroup = groups[0];
//     firstGroup.setAttribute('data-visible', 'true');

//   // Обработчик клика по кнопке
//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//         const targetGroup = button.dataset.group;
//         const targetElement = document.getElementById(targetGroup);

//       // Скрываем все группы (убираем атрибут data-visible)
//         groups.forEach(group => {
//             group.setAttribute('data-visible', 'false');
//         });

//       // Показываем выбранную группу (устанавливаем data-visible="true")
//         targetElement.setAttribute('data-visible', 'true');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu__btn');
    const groups = document.querySelectorAll('.menu__group');

    function showGroup(groupId) {
    // Скрываем все категории
    groups.forEach(group => {
        group.classList.remove('active');
    });

    // Показываем выбранную категорию
    const activeGroup = document.querySelector(`.menu__group.${groupId}`);
    activeGroup.classList.add('active');

    // Выделим активную кнопку
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.group === groupId) {
        button.classList.add('active');
        }
    });
}

  // Обработчики кликов для кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const groupId = button.dataset.group;
        showGroup(groupId);
    });
});

  // По умолчанию показываем категорию «Кофе»
showGroup('coffee');
});