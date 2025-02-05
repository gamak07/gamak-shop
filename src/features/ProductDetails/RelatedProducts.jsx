import { useProduct } from "../products/useProduct";
import Loading from "../../ui/Loading";
import { useRelatedProducts } from "./useRelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import RelatedProductItems from "./RelatedProductItems";

const RelatedProducts = () => {
  const { isPending, product } = useProduct();
  const category = product?.product?.category;
  const productId = product?.product?.id;

  // Call useRelatedProducts with fallback values to ensure it's always called
  const { relatedProducts } = useRelatedProducts(
    category || "",
    productId || ""
  );

  if (isPending) return <Loading />;

  return (
    <div className="mx-[4rem] my-[1.5rem] shadow-md bg-softWhite mb:mx-[1rem] mb:my-[0.5rem]">
      <h1 className="text-gray-700 font-bold text-[20px]">Related Products</h1>
      <Swiper
        modules={[Navigation, Pagination]} // Include Pagination if needed
        spaceBetween={0}
        slidesPerView={5}
        breakpoints={{
          0:{slidesPerView:1},
          480:{slidesPerView:2},
          640:{slidesPerView:3},
          760:{slidesPerView: 5},
        }}
        navigation
              pagination={{ clickable: true }}
              className="flex bg-gray-100 px-8 py-6 rounded-md"
      >
        {relatedProducts?.products?.map((related) => (
          <SwiperSlide key={related.id}>
            <RelatedProductItems related={related} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
