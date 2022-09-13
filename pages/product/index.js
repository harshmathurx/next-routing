import Link from "next/link"

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Link href="/product/1"><a>
        <h3>Product 1</h3>
      </a></Link>
      <Link href="/product/2"><a>
        <h3>Product 2</h3>
      </a></Link>
      <Link href="/product/3"><a>
        <h3>Product 3</h3>
      </a></Link>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
    </div>
  )
}

export default ProductList