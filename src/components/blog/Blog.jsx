import img1 from "../../assets/images/blog/f1.jpg";
import img2 from "../../assets/images/blog/f2.jpg";
import img3 from "../../assets/images/blog/f3.jpg";
import img4 from "../../assets/images/blog/f4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
  id: 1,
    image: img1,
    date: "Portrait Session",
    comments: "Natural Light",
    title: "Elegant Portrait Photography",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "Outdoor Session",
    comments: "Golden Hour",
    title: "Sunset Lifestyle Photography",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "Wedding Session",
    comments: "Love Story",
    title: "Romantic Wedding Moments",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "Brand Session",
    comments: "Commercial",
    title: "Professional Product Photography",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p  className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800">Featured</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
        Each photo session tells a unique story. Here is a selection of my favorite
        works, capturing moments, expressions, and atmosphere with passion.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
