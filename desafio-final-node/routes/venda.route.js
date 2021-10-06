import express from "express";
import VendaController from "../controllers/venda.controller.js";

const router=express.Router();

router.post("/", VendaController.createVenda);
router.get("/", VendaController.getVendas);
router.get("/:id", VendaController.getVendaByClienteId);
// router.get("/:id", VendaController.getVendaByAutorId);
router.put("/", VendaController.updateVenda);
router.delete("/:id", VendaController.deleteVenda);

export default router;