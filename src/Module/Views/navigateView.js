import { View } from './view.js'

class navigateView extends View {
    _parentEl = document.getElementById('main');
    _navbarArr = document.querySelectorAll('.nav');
    _btnNav = document.querySelectorAll('.btn__navbar');
    _navItems = document.querySelectorAll('.nav__item');
    _logo = document.getElementById('logo');
    addHandlerNavbarClick(handler) {
        this._navbarArr.forEach(nav => nav.addEventListener('click', (e) => {
            e.preventDefault()
            const navItem = e.target.closest('.nav__item')
            if (!navItem) return
            const goto = navItem.dataset.nav
            this.toggleCurrentNavItem(goto)
            handler(goto)
        }))
    }
    addHandlerLogoClick(handler) {
        this._logo.addEventListener('click', (e) => {
            console.log(e)
            const goto = e.target.dataset.nav
            console.log(goto)
            this.toggleCurrentNavItem(goto)
            handler(goto)
        })
    }
    addHandlerBtnNavClick(handler) {
        this._btnNav.forEach(btn => btn.addEventListener('click', e => {
            e.preventDefault()
            const goto = e.target.dataset.nav
            this.toggleCurrentNavItem('')
            handler(goto)
        }))
    }
    toggleCurrentNavItem(goto) {
        this._navItems.forEach(item => {
            console.log(item)
            item.classList.remove('nav__item--current')
            if (item.dataset.nav !== goto) return
            else item.classList.add('nav__item--current')
        })

    }
    addHandlerButtonNavigate(handler) {
        this._parentEl.addEventListener('click', (e) => {
            e.preventDefault()
            const btn = e.target.closest('.btn')
            if (!btn) return
            const goto = btn.dataset.nav
            this.toggleCurrentNavItem('')
            handler(goto)
        })
    }
}
export default new navigateView()
