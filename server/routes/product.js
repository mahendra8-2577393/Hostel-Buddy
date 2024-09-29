import express from 'express'
import multer from 'multer';
import { addProduct, deleteProduct, editProduct, getProductsMetadata } from '../controllers/product.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });




router.post('/edit', upload.array('images'), editProduct);
// router.post('/add', auth, addProduct);
router.post('/add',addProduct);

router.delete('/delete', deleteProduct);
router.get('/all', getProductsMetadata);

export default router;