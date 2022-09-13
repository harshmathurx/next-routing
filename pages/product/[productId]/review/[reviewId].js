import { useRouter } from "next/router";


const Review = () => {
  const router = useRouter();
  const {productId,reviewId} = router.query // this will be the id of the review
  return (
    <div>
        <h1>Review Details</h1>
        <h2>Review {reviewId}</h2>
        <h2>ProductId {productId}</h2>
    </div>
  )
}

export default Review