import { View } from './view.js'

class menuViews extends View {
    _parentEl = document.getElementById('main')
    _mainMenuMarkup(data) {
        return `
        <section>
            <div class="break__line">
                <h3>${data.type}</h3>
            </div>
            <div class="menu__items">
            ${data.includes.map(item => this._mainMenuItem(item)).join('')}
            </div>
        </section>`
    }
    _mainMenuItem(item) {
        return `
            <div class="card__menu">
                <div class="card__menu__img">
                    <img src="${item.image}" loading="lazy"
                        alt="${item.name} image">
                </div>
                <div class="card__menu__description">
                    <h6 class="menu__text__head">${item.name}</h6>
                    <p class="menu__text__p">${item.description}</p>
                </div>
                <p class="text--price">${item.price}$</p>
            </div>
        `
    }
    _otherMenu(data) {
        return ` 
        <section id="menu__${data.name}">
            <div class="break__line">
                <h3>${data.name} menu
                </h3>
            </div>
            <div class="flex__menu">
                <div class="menu__${data.name}__img ${data.name === 'drink' ? '' : 'order2'}">
                    <img src="${data.image}" loading="lazy"
                        alt="${data.name} image">
                </div>
                <div class="menu__${data.name}__list">
                ${data.includes.map(type => {
            return `
                    <div class="menu__list">
                        <h4 class="menu__list__header">${type.type}</h4>
                        ${type.includes.map(item => this._otherMenuItem(item)).join('')}
                    </div>
                    `
        }).join('')}    
               
            </div>
        </section>`
    }
    _otherMenuItem(item) {
        return `
            <div class="menu__list-item">
                <p class="text--price menu__list-item__price">${item.price}$</p>
                <h6 class="menu__list__item">${item.name}</h6>
                <p class="menu__list__description">${item.description || ''}</p>
            </div>`
    }
    _generationMarkup() {
        return ` 
        <section id="menu" class="container">
            <header class="menu__header">
                <div class="">
                    <h2 class="primary__text primary__text__head primary__text__head--main">out menu</h2>
                    <ul class="menu__sections">
                        <li class="menu__section primary__text primary__text__head--section">
                            <a href="#menu__lunch" class="menu__link">appetizes</a>
                        </li>
                        <li class="menu__section primary__text primary__text__head--section">
                            <a href="#menu__dinner" class="menu__link">main menu</a>
                        </li>
                        <li class="menu__section primary__text primary__text__head--section">
                            <a href="#menu__drinks" class="menu__link">drinks</a>
                        </li>
                        <li class="menu__section primary__text primary__text__head--section">
                            <a href="#menu__dessert" class="menu__link">dessert</a>
                        </li>
                    </ul>
                </div>
                <div class="menu__img">
                    <img src="${this._images.menu}" loading="lazy"
                        alt="Menu">
                </div>
            </header>
            <main class="menu__main">
              ${this._menu.map(type => this._mainMenuMarkup(type)).join('')} 
              ${this._otherMenus.map(data => this._otherMenu(data)).join('')}
            </main>
        </section>`
    }
}
export default new menuViews()

