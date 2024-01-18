import {Router} from 'express'

import { getItems,  } from '../controllers/headerController.js';

const headerRouter = Router()


headerRouter.get('/get-items',getItems)

export default headerRouter