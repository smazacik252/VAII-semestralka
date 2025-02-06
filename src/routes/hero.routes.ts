import { Router } from "express";
import HeroController from "../controllers/hero.controller";
import { heroValidator } from "../validators/heroValidator";
import {validateRequest} from "../middleware/validateRequest";

const router = Router();
const heroController = new HeroController();

router.get("/", heroController.getAll);
router.get("/by-name/:urlName", heroController.getHeroByName);
router.get("/:id", heroController.getHeroById);
router.post("/", heroValidator, validateRequest, heroController.createHero);
router.put("/:id", heroValidator, validateRequest, heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

export default router;