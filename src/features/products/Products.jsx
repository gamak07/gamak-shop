import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../ui/Loading";
import { useProducts } from "./useProducts";
import ProductItem from "./ProductItem";

import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../ui/Button";

const Products = (props) => {
  // Pass props to the component
  const { productCategory, productName } = props;
  const { isPending, products, error } = useProducts();
  const navigate = useNavigate();
  if (isPending) return <Loading />;

  const categorizedProducts = products?.products?.filter(
        (product) => product.category === productCategory.toString() // convert to string if category isn't in string format
      )?.slice(0, 10) || [];

  return (
    <div className="mx-[5rem] my-[2.5rem] mb:mx-[1rem] mb:my-[0.5rem]">
      <h1 className="bg-indigo-600 text-white text-xl font-bold flex items-center justify-between py-2 px-4 rounded-md shadow-md mb-4">
        {productName}{" "}
        <Button
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => navigate(`/category/${productName}`)}
        >
          see all &gt;
        </Button>
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
        {categorizedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
