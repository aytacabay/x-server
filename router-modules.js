const controllerHome = require('./controllers/home-controller')
const middlewareHome = require('./middlewares/home-middleware')

const controllerAbout = require('./controllers/about-controller')
const middlewareAbout = require('./middlewares/about-middleware')

const controllerBlog = require('./controllers/blog-controller')
const middlewareBlog = require('./middlewares/blog-middleware')


const controllerError = require('./controllers/error-controller')
const middlewareError = require('./middlewares/error-middleware')


module.exports = {
    controllerHome,
    middlewareHome,
    controllerAbout,
    middlewareAbout,
    controllerBlog,
    middlewareBlog,
    controllerError,
    middlewareError
}