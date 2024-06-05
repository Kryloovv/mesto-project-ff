## Проект «Место»

<img src="/src/images/mesto.gif">

Проектная работа курса [«Фулстек-разработчик»](https://practicum.yandex.ru/fullstack-developer/ "Курс «Фулстек-разработчик» — Яндекс Практикум") платформы [Яндекс Практикум](https://practicum.yandex.ru/ "Яндекс Практикум").   

[Посмотреть проект mesto](https://Kryloovv.github.io/mesto-project-ff/)
## Краткое описание
Mesto - одностраничный сайт, где можно делиться фотографиями.
Создан с использованием HTML, CSS, Webpack и JavaScript.   

#### Стек технологий
  * HTML 5;
  * CSS 3;
  * JavaScript;
#### С применением
  * Npm
  * Webpack
  * API (POST, GET, PUT, DELETE)
  * Media queries
  * БЭМ;
### Макеты
  * [Макет №1](https://www.figma.com/design/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0-1&t=F0XdagbJR9fA6sAc-0)
  * [Макет №2](https://www.figma.com/design/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?node-id=0-1&t=auP8v3PBSwR3p0wM-0)

## Локальная установка:

В командной строке перейдите в папку, где будет развернут проект. После чего скопируйте его с GitHub: 
```sh
$ git clone https://github.com/Kryloovv/mesto-project-ff.git
```

Далее переходим в папку с проектом и устанавливаем npm зависимости:
```sh
$ npm install
```

---
**В конфигурационном файле package.json настроены три варианта запуска сборки проекта:**
Проект собирается локально, продукты сборки сохряняются в указанной директории (для компиляции).
```sh
$ npm run build 
```

Помимо сборки, запускает на локальном сервере с автоматической перезагрузкой при изменении кода (для отладки).
```sh
$ npm run dev 
```

Выкладывает релизную версию в ветку gh-pages указанного репозитория (для релиза).
```sh
$ npm run deploy 
```
