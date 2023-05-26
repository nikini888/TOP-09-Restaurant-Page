import { View } from './view.js'
import heroImage from '@asset/img/hero-phone-image.png'

class homeView extends View {
    _parentEl = document.getElementById('main')
    _generationMarkup(data) {
        return `
        <section id="home__page">
            <div class="hero container">
                <h1 class="text__hero">love<br class="">food &amp; drink</br></h1>
                <p class="text__hero__p">We hope to welcome you soon. Happy eating!</p>
                <div class="btnCTA">
                    <button type="button" class="btn btn--secondary-white btn--CTA"  data-nav="menu">see menu</button>
                    <button type="button" class="btn btn--primary btn--CTA" data-nav="reserve">book a table</button>
                </div>
            </div>
         </section>
        `
    }
}

export default new homeView()
