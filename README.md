# tpl_pug_scss_2

## Структура проекта

```
normalize.css - Підключається як стороння бібліотека в lib.min.css

dev/
|
|– abstracts/ (or utilities/)
|   |– bemto/               // PUG-міксін для роботи з БЕМ
|   |– mixins.pug           // Загальні PUG-міксіни
|   |– vars.scss            // SCSS-змінні
|
|– base/
|   |– base.scss            // Базові стилі
|   |– fonts.scss           // Міксін з підключення шрифтів
|   |– head.pug             // Pug-міксін тега <head>
|   |– helpers.scss         // Класи-хелпери
|   |– icons.scss           // Підключення PNG-іконок
|   |– sprite.scss          // Налаштування PNG-спрайта (генерується у випадку необхідності)
|
|– components/              // Директорія компонентів. Кожен лежить у власній директорії
|
|- fonts/                   // Директорія для підключаємих шрифтів (Кожен у власній директорії)
|
|- icons/                   // Директорія для PNG-іконок, з яких генерується PNG-спрайт
|
|- img/                     // Директоія для зображень
|
|– layout/                  // Загальні шаблони сторінок
|
|– pages/                   // Pug-файли, що відповідають за рендерінг одноіменних HTML-сторінок (index.pug => index.html, ...)
|
|- svg/                     // Директорія для SVG-файлів, з яких роблять SVG-спрайт
|
|– main.js                  // Основний JS-файл, до якого підключаються JS-файли компонентів (за допомогою ООП)
|
|- main.scss                // Основний SCSS-файл, до якого підключаються всі необхідні SCSS-файли
```

## Результат що отримуємо

```
app/
|
|- index.html               // HTML-сторінки
|
|- js/
|   |
|   |- main.js              // JS-файл зі скриптами користувача
|   |- libs.min.js          // Мініфікований JS-файл зі скриптами підключених бібліотек (за необхідністю)
|
|- css/
|   |
|   |- main.css             // CSS-файл зі стилями користувача
|   |- libs.min.css         // мініфікований CSS-файл зі стилями підключених бібліотек (за необхідністю)
|
|- img/                     // Зображення
|
|- fonts/                   // Шрифти (за необхідністю)
```