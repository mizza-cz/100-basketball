// Получаем все элементы с классом .timeline__icon
const timelineIcons = document.querySelectorAll(".timeline__icon span");

// Проходим по всем элементам и навешиваем обработчик события клика
timelineIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Находим ближайший родительский элемент .timeline
    const timeline = icon.closest(".timeline");

    // Находим все элементы .panel внутри текущего .timeline
    const panels = timeline.querySelectorAll(".panel");

    // Проверяем, есть ли атрибут 'open' на элементах .panel
    const isOpen = panels[0].hasAttribute("open");

    // Если 'open' есть, удаляем его со всех элементов .panel
    if (isOpen) {
      panels.forEach((panel) => {
        panel.removeAttribute("open");
      });
    } else {
      // Иначе, добавляем 'open' ко всем элементам .panel
      panels.forEach((panel) => {
        panel.setAttribute("open", true);
      });
    }
  });
});
