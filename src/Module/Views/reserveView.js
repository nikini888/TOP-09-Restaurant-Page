import { View } from './view.js'

class reserveView extends View {
    _parentEl = document.getElementById('main')
    _generationMarkup(data) {
        return `
        <section id="reserve" class="container">
            <div class="reserve__main">
                        <h2 class="primary__text primary__text__head primary__text__head--main">Make a
                            reservation</h2>
                        <h6 class="secondary__text secondary__text__head">Get in touch with
                            restaurant</h6>
                        <div class="reserve__picktime">
                            <form action="#" class="reserve__picktime__form">
                                <input type="date" name="date" id="date" value="2022-09-30" min="2022-09-29">
                                <input type="time" name="time" id="time" value="11:00" min="05:00" max="24:00">
                                <span class="input__number">
                                    <input type="number" name="numberPerson" id="numberPerson" value="2" min="1">
                                    <span class="label__number">person</span>
                                    <span class="label__number--line"></span>
                                </span>
                            </form>
                        </div>
                        <a href="" class="btn btn--primary btn--larger reserve__btn"  data-nav="reserve">book a table</a>
                    </div>
                    <div class="flex-md-cl sub-container">
                        <div class="location ">
                            <h4 class="primary__text primary__text__head--section">where we are</h4>
                            <h6 class="secondary__text secondary__text__head">EAST VILLAGE, MANHANTTAN, NY</h6>
                            <p class="secondary__text secondary__text__text--medium">224 east, 14th street, btw 1st & 2nd Av
                            </p>
                            <h6 class="primary__text primary__text__head--sm">call us</h6>
                            <p class="secondary__text secondary__text__head">Phone: +(444) 555 24 90</p>
                            <h6 class="primary__text primary__text__head--sm">write us</h6>
                            <p class="secondary__text secondary__text__text--medium">info@rommy.tl</p>
                        </div class="clocation">
                        <div class="img">
                            <img src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Rommy Restaurant't place">
                        </div>
                    </div>
        </section>
        `
    }
}

export default new reserveView()
