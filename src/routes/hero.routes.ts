import { Router } from "express";
import HeroController from "../controllers/hero.controller";

const router = Router();
const heroController = new HeroController();

router.get("/", heroController.getAll);
router.get("/by-name/:urlName", heroController.getHeroByName);
router.get("/:id", heroController.getHeroByName);
router.post("/", heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

export default router;
