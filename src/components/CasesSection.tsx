"use client"
import { motion } from "framer-motion";
import serviceImplants from "@/public/assets/DSC_0747-removebg-preview.png";
import service3dprint from "@/public/assets/service-3dprint.jpg";
import servicePlanning from "@/public/assets/service-planning.jpg";
import serviceCustom from "@/public/assets/service-custom.jpg";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cases = [
  {
    title: "case 1",
    description: "Patient-specific mandibular and maxillary implants engineered from CT/CBCT data for perfect anatomical fit.",
    image: servicePlanning,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 2",
    description: "Accurate bone replicas for pre-surgical planning, allowing surgeons to rehearse complex procedures.",
    image: service3dprint,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 3",
    description: "Advanced CAD/CAM workflows to design, simulate, and optimize surgical outcomes before the operating room.",
    image: serviceImplants,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 4",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 5",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 6",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 7",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 8",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 9",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "case 10",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  }
];

const CasesSection = () => {
  return (
    <section id="cases" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Cases
          </h2>
        </motion.div>
       {
        cases.map((caseItem, index) => {
          return(
            <div className="mb-8 border p-4 rounded-md bg-white" key={index}>
              <h2 className="text-3xl mb-2">{caseItem.title}</h2>
                <div className={"relative"}>
                    <Swiper
                        loop
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                          }}
                          spaceBetween={50}
                          autoHeight={true}
                        className={"caseSwiper" + index}
                        // slidesPerView={3}
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            el: `.casesPagination`
                          }}
                          navigation={{
                            nextEl: '.cases-swiper-button-next',
                            prevEl: '.cases-swiper-button-prev'
                        }}
                            breakpoints={{
                              400: {
                                slidesPerView: 2,
                                spaceBetween: 10
                              },
                              640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                              },
                                768: {
                                slidesPerView: 3,
                                },
                                1024: {
                                  slidesPerView: 4,
                                },
                              }}
                              >
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                              {cases.map((caseItem, i) => (  
                                <SwiperSlide key={i} className="swiper-case-slide">
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                  className="group  border-border overflow-hidden duration-300"
                                  // style={{ boxShadow: "var(--card-shadow)" }}
                                  onMouseEnter={(e) => {
                                    // (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
                                  }}
                                  onMouseLeave={(e) => {
                                    // (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
                                  }}
                                >
                                  <div className="aspect-square overflow-hidden">
                                    <Image
                                      src={caseItem.image}
                                      alt={caseItem.title}
                                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="bg-secondary p-6 border py-2 mt-2 bg-card rounded-lg">
                                    <h3 className="text-lg text-black font-semibold text-foreground text-center font-sans rounded-pill">{caseItem.title}</h3>
                                    {/* <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p> */}
                                  </div>
                                </motion.div> 
                                </SwiperSlide>
                              ))}
                                </div>

                        <div className={"casesPagination text-primary flex items-center justify-center gap-2 w-fit my-4 mx-auto rounded-full px-4 py-2"}>
                          <div className={`casesPagination text-primary`} ></div>
                        </div>
                        <div className=" mx-auto block flex items-center justify-center gap-2 w-fit">
                        <button className='cases-swiper-button-prev slide-button w-30px h-30px rounded-full border bg-secondary p-1'>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className='cases-swiper-button-next slide-button w-30px h-30px rounded-full border bg-secondary p-1'>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                        </div>
                </Swiper>
              </div>
            </div>
            
          )
        })
       }
      </div>
    </section>
  );
};

export default CasesSection;
