import { images, exploreMenu, menu, otherMenus } from '../data'

export class View {
    _parentEl;
    _images = images;
    _menu = menu;
    _otherMenus = otherMenus;
    _exploreMenu = exploreMenu;
    render(render = true, isForm = false, form) {
        const markup = this._generationMarkup()
        if (render === false) return markup;
        this._clear()
        this._parentEl.insertAdjacentHTML('afterbegin', markup)
        if (isForm === true) form._setUpInput()
        // setTimeout(() => {
        // }, 0)
    }
    _clear() {
        this._parentEl.innerHTML = ''
    }
}
