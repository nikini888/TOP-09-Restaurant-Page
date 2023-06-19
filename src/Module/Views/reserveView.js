import { View } from './view.js'
import formView from './formView.js'

class reserveView extends View {
    _parentEl = document.getElementById('main')
    _generationMarkup(data) {
        return `
        <section id="reserve" class="container">
            <div class="reserve__main sub-container">
                <div class="reserve__main__head">
                    <h2 class="primary__text primary__text__head primary__text__head--main">Make a
                        reservation</h2>
                    <h5 class="secondary__text secondary__text__head">Get in touch with
                        restaurant</h5>
                </div>
                <div class="reserve__picktime">
                    ${formView.render(false)}
                    <div class="reserve__img"></div>
                </div>
            </div>
        </section>
        `
    }
}

export default new reserveView()
