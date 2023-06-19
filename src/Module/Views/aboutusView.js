import { View } from './view.js'
import delivery from '@asset/img/delivery.svg'
import healthy from '@asset/img/healthy.svg'
import varied_menu from '@asset/img/varied_menu.svg'
import offer from '@asset/img/offer.svg'

class aboutusView extends View {
    _parentEl = document.getElementById('main')
    _generationExploreMenu() {
        console.log('hi')
        return `
        <div class="aboutus__explore sub-container">
            <div class="break__line">
                <h3>explore out menu</h3>
            </div>
            <div class="explore__card">
            ${this._exploreMenu.map(item => `
            <div class="explore__card__item">
                    <div class="explore__item__img">
                        <img src="${item.image}"
                            alt="">
                    </div>
                    <div class="explore__card__item--hovering">
                        <h4 class="explore__card__title">${item.name}</h4>
                        <p class="explore__card__description">${item.description}</p>
                    </div>
                </div>
            `).join('')}
            </div>
        </div>`
    }
    _generationMarkup(data) {
        return `
        <section id="aboutus" class="container">
            
        <div class="aboutus__about sub-container">
            <div class="aboutus__about__img">
            </div>
            <div class="aboutus__about__description">
            <h2 class="primary__text primary__text__head primary__text__head--main">about rommy</h2>
            <h6 class="secondary__text secondary__text__head">Rommy - Healthy
                Food Restaurant</h6>
            <p class="">We are located in the heart of downtown New Your. Our team has 30 of finest
                chefs who look after guests every day.
                We work for those who know how to appreciate the taste of life. For those who understand
                what proper nutrition and impeccable service are. For whom style, atmosphere and aesthetics
                are important.</p>
                </div>
                </div>
                <div class="aboutus__why sub-container">
            <div class="break__line">
                <h3>
                    why we are the best
                </h3>
            </div>
            <ul class="why__list">
                <li class="why__item">
                    <div class="why__item__img">
                    <img src="${varied_menu}">
                    </div>
                    <h6 class="secondary__text secondary__text__head why__item__head">Varied Menu
                    </h6>
                    <p class="why__item__description">Rommy provides a big variety of healthy meals for every taste.</p>
                </li>
                <li class="why__item">
                    <div class="why__item__img"><img src="${healthy}" alt=""></div>
                    <h6 class="secondary__text secondary__text__head why__item__head">Healthy Meals
                    </h6>
                    <p class="why__item__description">Rommy always serves to clients the best fresh, organic and healthy food</p>
                </li>
                <li class="why__item">
                    <div class="why__item__img"><img src="${delivery}" alt=""></div>
                    <h6 class="secondary__text secondary__text__head why__item__head">Delivery
                        Service</h6>
                    <p class="why__item__description">You can also order online Rommy always provide you faster and free delivery.</p>
                </li>
                <li class="why__item">
                    <div class="why__item__img"><img src="${offer}" alt=""></div>
                    <h6 class="secondary__text secondary__text__head why__item__head">Best Offer
                    </h6>
                    <p class="why__item__description">We give the best offer for our valuable customers.</p>
                </li>
            </ul>
                </div>
                ${this._generationExploreMenu()}
                <div class="aboutus__chefs sub-container">
            <div class="grid">
                <div class="img grid-item-1">
                    <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
                        alt="Rommy chefs's picture">
                </div>
                <div class="about__chefs grid-item-2">
                    <h3 class="primary__text primary__text__head">out talented chefs</h3>
                    <p>Our chefs are passionate about creating fresh,
                        delicious food. We ’re always working hard to improve our service and make sure you have
                        the best dining experience.</p>
                </div>
                <div class="img grid-item-3">
                    <img src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Rommy chefs's picture">
                </div>
            </div>
                </div>
                <div class="btnCTA sub-container">
            <button type="button" class="btn btn--primary btn--larger" data-nav="reserve">book a table</button>
            <button type="button" class="btn btn--secondary-blue btn--larger large-hidden"  data-nav="menu">see menu</button>
            <button type="button" class="btn btn--secondary-blue btn--larger medium-hidden" data-nav="menu" >see all menu</button>
                </div>
        </section>
        `
    }
}

export default new aboutusView()
