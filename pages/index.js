import Link from "next/link"
import { useRouter } from "next/router"


const Home = () => {

  const router = useRouter();

  const handleClick = () => {
    console.log("Clicked");
    router.push("/product");
  }

  return (
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
        <h1>Harsh Mathur</h1>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <button onClick={handleClick}>
          Place Order
        </button>
    </div>
  )
}

export default Home