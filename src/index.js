import './style/scss/main.scss'

import navigateView from './Module/Views/navigateView'
import menuView from './Module/Views/menuView'
import homeView from './Module/Views/homeView'
import reserveView from './Module/Views/reserveView'
import aboutusView from './Module/Views/aboutusView'
import sidenavView from './Module/Views/sideNavView'
import formView from './Module/Views/formView'

const controllerSideNav = function () {
}
const controllerNavbar = function (goSection) {
    switch (goSection) {
        case 'home':
            homeView.render()
            break;
        case 'about':
            aboutusView.render()
            break;
        case 'menu':
            menuView.render()
            break;
        case 'reserve':
            reserveView.render()
            break;
        default:
            console.log('Not thing')
    }
}
const controllerBtnNavigate = function (goSection) {
    if (goSection === 'menu') menuView.render()
    else reserveView.render()
}
function init() {
    navigateView.addHandlerNavbarClick(controllerNavbar)
    navigateView.addHandlerButtonNavigate(controllerBtnNavigate)
    navigateView.addHandlerBtnNavClick(controllerBtnNavigate)
    navigateView.addHandlerLogoClick(() => homeView.render())

    sidenavView.eventOpenSideNav(controllerSideNav)
}

// init()
reserveView.render(true, true, formView)