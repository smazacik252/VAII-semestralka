import express from 'express';
import ItemController from '../controllers/item.controller';
import { createItemValidator, updateItemValidator, validateItemId, validateItemType } from '../validators/itemValidator';
import {validateRequest} from "../middleware/validateRequest";

const router = express.Router();
const itemController = new ItemController();

router.get('/items', itemController.getAll);
router.get('/items/:id', validateItemId, validateRequest, itemController.getItemById);
router.get('/items/type/:type', validateItemType, validateRequest, itemController.getItemsByType);
router.post('/items', createItemValidator, validateRequest, itemController.createItem);
router.put('/items/:id', validateItemId, updateItemValidator, validateRequest, itemController.updateItem);
router.delete('/items/:id', validateItemId, validateRequest, itemController.deleteItem);

export default router;
