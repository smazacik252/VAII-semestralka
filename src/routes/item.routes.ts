import express from 'express';
import ItemController from '../controllers/item.controller';
import { createItemValidator, updateItemValidator, validateItemId, validateItemType } from '../validators/itemValidator';
import {validateRequest} from "../middleware/validateRequest";

const router = express.Router();
const itemController = new ItemController();

router.get('/', itemController.getAll);
router.get('/:id', validateItemId, validateRequest, itemController.getItemById);
router.get('/type/:type', validateItemType, validateRequest, itemController.getItemsByType);
router.post('/', createItemValidator, validateRequest, itemController.createItem);
router.put('/:id', validateItemId, updateItemValidator, validateRequest, itemController.updateItem);
router.delete('/:id', validateItemId, validateRequest, itemController.deleteItem);

export default router;
