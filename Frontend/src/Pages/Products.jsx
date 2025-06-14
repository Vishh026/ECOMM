import { useSelector } from "react-redux"
import ProductCart from "../Components/ProductCart"


const Products = () => {
  const products = useSelector((state) => state.productReducer.products)
  const renderProduct = products.map((product)=> {
    return <ProductCart key = {product.id}  product= {product}/>
  })
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black p-6">
  {products ? (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderProduct}
    </div>
  ) : (
    <div className="text-white text-center text-lg">Loading...</div>
  )}
</div>

  )
}

export default Products