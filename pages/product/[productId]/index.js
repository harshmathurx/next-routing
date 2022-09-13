import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter();
    const productId = router.query.productId // this will be the id of the product
  return (
    <div>
        <h1>Product Details</h1>
        <h2>Product {productId}</h2>
    </div>
  )
}

export default ProductDetails