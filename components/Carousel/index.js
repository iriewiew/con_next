import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

import { SliderStyle } from "./style";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};
const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function SampleNextArrow({ currentSlide, slideCount, ...props }) {
  const { className, style, onClick } = props;
  return (
    <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
      <MdKeyboardArrowRight />
    </button>
  );
}

function SamplePrevArrow({ currentSlide, slideCount, ...props }) {
  const { className, style, onClick } = props;
  return (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <MdKeyboardArrowLeft />
    </button>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Carousel = (props) => {
  const { data, className } = props;
  return (
    <SliderStyle {...settings}>
      {data.map(({ fields }, k) => (
        <figure className={`h-400 ${className}`} key={k.toString()}>
          <img
            src={fields.heroImage.fields.file.url}
            className="card-img-top" alt={fields.title}
          />
          <motion.figcaption
            variants={title}
            className="flex flex-col w-full mb-12 text-center"
          >
            <Link
              href={{
                pathname: `/blog/[slug]`,
              }}
              as={`/blog/${fields.slug}`}
            >
              {fields.title}
            </Link>
          </motion.figcaption>
        </figure>
      ))}
    </SliderStyle>
  )
}
Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};
Carousel.defaultProps = {
  className: ''
};

export default Carousel;
