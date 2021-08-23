import  Express  from "express";
const router = express.Router()
import Product from '../models/productModel'

router.get('/', (req, res) => {
  const products = await Product.find({})
})
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

export default router