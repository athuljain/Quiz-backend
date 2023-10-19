import { Router } from "express";
const router=Router()

import * as controller from '../controllers/controller.js'



// Question Route API
router.get('/questions', controller.getQuestions)
router.post('/questions',controller.insertQuestions)




export default router