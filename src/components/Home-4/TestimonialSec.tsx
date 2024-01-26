"use client"
import testimonials from "@/data/testimonal-home-4-data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import testimonalBg from "../../../public/assets/img/bg/testimonial-bg.jpg";
import Link from "next/link";
interface classType {
  pb:string
}
const TestimonialSec = ({pb}:classType) => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    loop:false,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className={`bd-testimonial-area-2 p-relative pt-150 ${pb}`}>
        <div
          className="bd-testimonial-2__bg"
          style={{ backgroundImage: `url(${testimonalBg.src})` }}
        ></div>
        <div className="container">
          <div className="bd-testimonial-2__section-title mb-35">
            <div
              className="row align-items-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="col-lg-9">
                <div className="bd-section__title-wrapper is-white ">
                  <p className="bd-section__subtitle mb-20">Testimonials</p>
                  <h2 className=" bd-section__title mb-40 mbs-10">
                    What our customers
                    <br />
                    are saying
                  </h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="bd-testimonial__btn mb-60 mbs-30">
                  <Link href="/contact" className="bd-btn-2 is-white">
                    View all review{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay=".5s">
            <div className="bd-testimonial-2__slider p-relative ryl-slider2-pagination ADASD">
              <div className="bd-testimonial-2-active">
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSec;
