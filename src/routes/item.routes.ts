import { Router } from "express";
import ItemController from "../controllers/item.controller";

const router = Router();
const itemController = new ItemController();

router.get("/", itemController.getAll);
router.get("/:id", itemController.getItemById);
router.get("/by-type/:type", itemController.getItemsByType);
router.post("/", itemController.createItem);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

export default router;
