import { Router } from "express";
import HeroController from "../controllers/hero.controller";

const router = Router();
const heroController = new HeroController();

router.get("/", heroController.getAll);
router.get("/:id", heroController.getHeroById);
router.get("/:name", heroController.getHeroByName);
router.post("/", heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

export default router;
