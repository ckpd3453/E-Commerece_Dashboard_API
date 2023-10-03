import express from 'express';
// import { newVendorValidator } from '../validators/vendor.validator';
import * as productController from '../controllers/product.controllet';
const router = express.Router();

//route to get all users
router.get('', productController.getAllProducts);

router.post('', productController.addProducts);

router.put('/:_id', productController.updateProductDetails);

router.delete('/:_id', productController.deleteProductDetails);

// router.post('/varient/:_id/:_idV', productController.addVarient);

export default router;
