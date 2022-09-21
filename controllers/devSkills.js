import { devSkills } from '../data/devSkill-data.js'

function index(req, res) {
  res.render('devSkills/index', {
    devSkills: devSkills
  })
}

export {
  index
}