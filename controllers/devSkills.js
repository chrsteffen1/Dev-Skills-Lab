import { devSkills } from '../data/devSkills-data.js'

function index(req, res) {
  res.render('devSkills/index', {
    devSkills: devSkills
  })
}

export {
  index
}