class Controller {
    renderHome (req, res) {
      res.render('home')
    }
  
    renderNotFound (req, res) {
      res.render('404')
    }
  }
  
  module.exports = Controller