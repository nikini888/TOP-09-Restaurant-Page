import { View } from './view.js'

class sidenavViews extends View {
    _parentEl = document.getElementById('sideNav')
    _header = document.getElementById('header')
    _sideNavOpen = false
    eventOpenSideNav(handel) {
        this._header.addEventListener('click', e => {
            let btn = e.target.closest('.nav__btn')
            if (!btn) {
                if (!this._sideNavOpen) return
                else {
                    btn = document.querySelector('.nav__btn')
                }
            }

            this._toggleSideNav(btn)
            handel()
        })
    }
    _toggleSideNav(btn) {
        this._sideNavOpen = !this._sideNavOpen
        if (btn.classList.contains('nav__open')) {
            btn.classList.replace('nav__open', 'nav__close')
            btn.innerHTML = ` <span class="material-symbols-rounded">
            close
        </span>`
        } else {
            btn.classList.replace('nav__close', 'nav__open')
            btn.innerHTML = ` <span class="material-symbols-rounded">
            menu
        </span>`
        }
        this._parentEl.classList.toggle('hiddenMove')
    }

}

export default new sidenavViews()
