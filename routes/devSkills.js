import { Router } from 'express'
import * as devSkillsCtrl from '../controllers/devSkills.js'

const router = Router()

/* GET users listing. */
router.get('/', devSkillsCtrl.index)


export {
  router
}
