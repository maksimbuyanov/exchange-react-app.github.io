Заметки от Андрея

! 1)Как выбрать базовую валюту? Что если у меня нет евро?
    request:
! 2)Курс обменников одинаковый? можно выбрать самый выгодный в зависимости от нужной валютной пары? Отсортировать ближайшие к текущей локации?
    request:
+ 3)Ссылки по-хорошему должны быть размером с кнопку, никто не тыкает на текст в наше время, все тычат в кнопки
    request: Ссылки навигации поправил. Был 'а' вложен в li и паддинг задан для li. Убрал паддинг li и задал его для 'a', теперь кликать можно по всей плашке ;)
- 4) то что на ячейки валют можно тыкать и меняется нужная валюта очень не очевидно. Как можно это поправить?
    request: Исправил: добавил изменение курсора при наведении и изменил бэкграунд для контраста.
! 5)Необходимость жмякать на кнопку пассчитать, чтобы получить результат, приводит к ситуации когда визуальное состояние после изменения не отражает действительности. че можно сделать? мгновенный вывод результата после изменения инпута или валютной пары
    request:
! 6)лоадера не хватат, если инет медленный, то пока валюты грузятся страничка не оч
    request:
+ 7)Апи ключ на фронте кто угодно может украсть, а там ведь ограничение по запросам в месяц! что можно сделать чтоюы не украл?
    request: Решить можно через бэкэнд, но пока это не в моей юрисдикции) как я думаю уже готовый json будет приходить на фронт и далее обрабатываться
+ 8)вопрос, про SPA
    request:добавил NavLink и атрибут to= для изменения url без перехода и перезагрузки.
    
! 9)Я понимаю, что это реактовое тестовое приложение с магией вебпака внутри, но все же , как скрипты и стили в index.html попадают? и че такое reportWebVirtual.js?
    request:
! 10)не понятно из кода какие пропсы могут получать, а это очень важно - хочешь заюзать компонент, а что ему передать можно монять только из внутрянки компонента. Если бы по таким же правилам функции описывались, то мы бы все погибли, нельза было бы ничего использовать, не зная что внутри, вот почему сигнатура нужно. Это красиво решено в typescript, но и на JS с реактом это можно решить
    request:
! 11) Так же общее - ref заабьюзжены страшно, они не нужны ни в одном из двух случаев (ссылка), Попробуй переписать вообще без них
    request:
! 12) Компонент Main нарушает инкапсуляцию, он через ref слишком много знат о компоненте calc, он даже знает что там внтри select есть. Зарешай это через колбеки
    request:
+ 13)В компоненте Points один и тот же код 3 раза написан, даже если ты уверен чтотеюе нужно 3 раза одно и то же вывести, для повторяюзихся участком можно заюзать цикл.
    request: Вызывал 3 раза для тестирования верстки на переполнение контентом) 
+ 14) В App.js опечатка в названии перменной в которую футер компонент кладется
    request: Действительно, подправил Footer.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
