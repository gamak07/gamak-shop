import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "./useProducts";
import ArtsCraftsItem from "./ArtsCraftsItem";
import Loading from "../../ui/Loading";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const ArtsCrafts = () => {
  const { isPending, products } = useProducts();
  const navigate = useNavigate();
  if (isPending) return <Loading />;

  const ArtsCrafts = products?.products?.filter(
    (product) => product.category === "arts & crafts"
  );

  const limitedProducts = ArtsCrafts.slice(0, 10)
  const categoryName = "arts & crafts";

  return (
    <div className="mx-[5rem] my-[2.5rem] mb:mx-[1rem] my-[0.5rem]">
      <h1 className="bg-indigo-600 text-white text-xl font-bold flex items-center justify-between py-2 px-4 rounded-md shadow-md mb-4">
        Arts & Crafts{" "}
        <span
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => navigate(`/category/${categoryName}`)}
        >
          see all &gt;
        </span>
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0:{slidesPerView:1},
          480:{slidesPerView:2},
          640:{slidesPerView:3},
          760:{slidesPerView: 4},
        }}
        navigation
        pagination={{ clickable: true }}
        className="flex bg-gray-100 px-8 py-6 rounded-md shadow-lg"
      >
        {limitedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ArtsCraftsItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtsCrafts;
