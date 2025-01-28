import Appliances from "../features/products/Appliances";
import ArtsCrafts from "../features/products/ArtsCrafts";
import BabyProducts from "../features/products/BabyProducts";
import Books from "../features/products/Books";
import Electronics from "../features/products/Electronics";
import Fashion from "../features/products/Fashion";
import PetSupplies from "../features/products/PetSupplies";
// import Products from "../features/products/Products";
import Sports from "../features/products/Sports";
import ToyGames from "../features/products/ToyGames";
import VideoGames from "../features/products/VideoGames";

// With this approach, you can add as much as possible product categories 
/// without having to worry about the number of categories you have 
// or having to create a new component for each category.

// Add new product category to the array below

// const productCategoryItems = [
//   {
//     name: "Sex",
//     category: "Fucking",
//   },
//   // {
//   //   name: "Applicances",
//   //   category: "appliances",
//   // },
// ];

const Product = () => {
  return (
    <>
      {/* {productCategoryItems.map((x) => {
        return (
          <Products productCategory={x.name} productName={x.category} />
        );
      })} */}
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
  );
};

export default Product;
