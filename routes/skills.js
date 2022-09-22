import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
import { skills } from '../data/skills-data.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)


export {
  router
}
