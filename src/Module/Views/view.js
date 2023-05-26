import { images, exploreMenu, menu, otherMenus } from '../data'


export class View {
    _parentEl;
    _images = images;
    _menu = menu;
    _otherMenus = otherMenus;
    _exploreMenu = exploreMenu;
    render() {
        this._clear()
        const markup = this._generationMarkup()
        this._parentEl.insertAdjacentHTML('afterbegin', markup)
    }
    _clear() {
        this._parentEl.innerHTML = ''
    }
}