import styled from "styled-components";
import Slider from "react-slick";

export const SliderStyle = styled(Slider)`
  margin-bottom: 30px;
  margin-top: 20px;
  .thumb, figure {
    // float: left;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  figure {
    position: relative;
    z-index: 999;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: unset;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    &.h-400 {
      height: 400px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  figcaption {
    position: absolute;
    width: 100%;
    padding: 15px;
    transform: translateY(-50%);
    top: 50%;
    a {
      font-size: 60px;
      line-height: normal;
      margin: auto;
      text-align: center;
      color: #fff;
      z-index: 9999;
      opacity: 1;
      position: relative;
      width: calc(100% - 30px);
      height: 100%;
      background: rgba(0,0,0, 0.6);
      padding: 15px;
    }
  } 

  h5 {
    font-size: 18px;
  }
  .slick-dots {
    bottom: 0;
    li {
      button {
        &:before {
          font-size: 10px;
          color: #fff;
          opacity: 1;
        }
      }
    }
  }
  .slick-prev, 
  .slick-next {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    z-index: 1;
    transform: translateY(-50%);
    font-size: 40px;
    color: #ffffff;
    background: rgba(0,0,0, 0.8);
    &:before {
      content: "";
    }
    &:hover {
      color: #ffffff;
      background: rgba(0,0,0, 0.8);
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;
