import Appliances from "../features/products/Appliances"
import ArtsCrafts from "../features/products/ArtsCrafts"
import BabyProducts from "../features/products/BabyProducts"
import Books from "../features/products/Books"
import Electronics from "../features/products/Electronics"
import Fashion from '../features/products/Fashion'
import PetSupplies from "../features/products/PetSupplies"
import Sports from "../features/products/Sports"
import ToyGames from "../features/products/ToyGames"
import VideoGames from "../features/products/VideoGames"

const Product = () => {
  
  return (
    <>
      <Appliances />
      <Electronics />
      <Fashion />
      <BabyProducts />
      <Sports />
      <VideoGames />
      <ArtsCrafts />
      <Books />
      <ToyGames />
      <PetSupplies />
    </>
  )
}

export default Product