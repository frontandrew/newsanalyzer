// STYLES
import './notfound.css'

// RESORSES
import image from './notfound.svg';
import template from './notfound-temp.js';

export default class NotFound {
    constructor(domElem) {
        this._notFoundContainer = domElem;
        this._notFoundImage = image;
        this._notFoundTemplate = template;
    }

    show(string) {
        this._notFoundContainer.insertAdjacentHTML('afterbegin', this._notFoundTemplate);
        this._notFoundContainer.querySelector('.notfound__img').src = this._notFoundImage;

        const message = this._notFoundContainer.querySelector('.notfound__text');
        switch (string) {
            case 'ok':
                message.innerText = 'К сожалению результаты по данному запросу отсутствуют. Попробуйте изменить запрос.';
                break;
            case 400:
                message.innerText = 'Недопустимый формат запроса. Попробуйте изменить запрос.';
                break;
            case 401:
                message.innerText = 'К сожалению возникла проблема с авторизацией. Пожалуйста, попробуйте позже.';
                break;
            case 429:
                message.innerText = 'Слишком частые запросы. Пожалуйста, попробуйте позже.';
                break;
            case 500:
                message.innerText = 'К сожалению произошла ошибка на сервере. Пожалуйста, попробуйте позже.';
                break;
            default:
                message.innerText = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Пожалуйста, попробуйте позже.';
        }
    }

    hide() {
        if (this._notFoundContainer.querySelector('.notfound')) {
            this._notFoundContainer.removeChild(this._notFoundContainer.querySelector('.notfound'));
        }
    }
}