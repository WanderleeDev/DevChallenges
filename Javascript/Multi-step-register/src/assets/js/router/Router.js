import RenderHtml from '../utils/RenderHtml'

class Router {
  constructor (paths) {
    this.paths = paths
    this.render = new RenderHtml('#app')
    this.initRouter()
  }

  initRouter () {
    const { location: { pathname = '/' } } = window
    const URL = pathname === '/' ? 'home' : pathname.replace('/', '')
    this.load(URL)
  }

  load (page = 'home') {
    const { paths } = this
    const { path, template, fnValidate } = paths[page] || paths.error
    window.addEventListener('contentReady', fnValidate)
    window.addEventListener('DOMContentLoaded', () => fnValidate())
    this.render.renderContent(template)
    window.history.pushState({}, 'done', path)
  }
}

export default Router
