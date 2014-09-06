'.';

(function () {
    window.onload = function () {
        // Сохраняю ссылки на элементы.
        var seconds = 3,
            secondsEl = document.querySelector('#seconds'),
            template = document.querySelector('#img-with-caption'),
            waitForItEl = document.querySelector('#wait-for-it'),
            interval;

        // Раз в секунду, обновляю отсчёт.
        interval = setInterval(function () {
            var templateBody, imgEl;

            seconds -= 1;
            secondsEl.innerText = seconds;

            // Если пора...
            if (seconds <= 0) {
                clearInterval(interval);

                imgEl = template.content.querySelector('img');

                // Подставляю данные в шаблон.
                //imgEl.src = 'kitten.jpeg';

                // Импортирую шаблон в DOM.
                // **После этого вызова картинка начнёт загружаться.**
                templateBody = document.importNode(template.content);

                // Изменяю содержимое документа.
                // Вставляю то что импортировал шагом раньше.
                waitForItEl.parentNode.replaceChild(templateBody, waitForItEl);
            }

        }, 1000)

    };

})();
