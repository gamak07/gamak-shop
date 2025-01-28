import Categories from "../features/home/Categories";
import FeaturedProducts from "../features/home/FeaturedProducts";
import HeroSection from "../features/home/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
    </>
  );

}

export default Home