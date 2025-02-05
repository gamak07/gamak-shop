import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../ui/Loading";
import FeaturedProductItems from "./FeaturedProductItems";
import { useProducts } from "../products/useProducts";

import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
 const { isPending, products } = useProducts();
  if (isPending) return <Loading />;

  // Ensure `products?.products` exists before filtering
  const featuredProducts = products?.products?.filter((item) => item?.isFeatured) || [];
  

  return (
    <div className="px-[5rem] py-[2.5rem] bg-gray-100 mb:px-[1rem] mb:py-[0.5rem]">
      <h1 className="bg-indigo-600 text-white text-xl font-bold flex items-center justify-between py-2 px-4 rounded-md shadow-md mb-4">
        Featured Products
        
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0:{slidesPerView:1},
          480:{slidesPerView:2},
          640:{slidesPerView:3},
          760:{slidesPerView: 4},
        }}
        autoplay
        className="flex bg-gray-100 px-8 py-6 rounded-md shadow-lg"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <FeaturedProductItems product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
