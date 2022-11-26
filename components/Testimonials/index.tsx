import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';

const Items = [
  {
    id: '1',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-1.jpg',
    author: 'Susan Smith',
    role: 'London, UK',
  },
  {
    id: '2',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-2.jpg',
    author: 'Robert Danuarta',
    role: 'New York, USA',
  },
  {
    id: '3',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-3.jpg',
    author: 'Mia Khalifa',
    role: 'Los Angeles, USA',
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();

  const handleSlide = (idx: number) => () => {
    {
      // @ts-ignore
      return idx !== activeSlide && swiperRef?.current?.slideTo(idx);
    }
  };

  const handleSlideNext = useCallback(() => {
    // @ts-ignore
    if (activeSlide < Items.length) swiperRef?.current.slideNext();
  }, [swiperRef, activeSlide]);

  const handleSlidePrev = useCallback(() => {
    // @ts-ignore
    if (activeSlide > 0) swiperRef?.current.slidePrev();
  }, [swiperRef, activeSlide]);

  return (
    <div className="mb-28">
      <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
        <div className="flex flex-wrap">
          <div className="w-full px-0 lg:w-5/12 lg:pl-8 lg:pr-20">
            <div className="mb-16 flex flex-col">
              <h3 className="mb-2 text-lg uppercase text-gray-500">Testimonials</h3>
              <h3 className="mb-10 font-serif text-4xl leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
                What people say about Us.
              </h3>
              <ul className="flex gap-x-6">
                {Items.map((item, idx) => (
                  <li
                    key={item.id}
                    className={classNames('h-2 w-2 cursor-pointer rounded-full', {
                      'bg-gray-800': activeSlide === idx,
                      'bg-gray-300': activeSlide !== idx,
                    })}
                    onClick={handleSlide(idx)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative flex h-[320px] w-full items-center justify-center lg:h-auto lg:w-6/12">
            <div className="absolute -inset-4 lg:-inset-10 lg:-top-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ['-100%', '-100%', 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(slide) => setActiveSlide(slide.realIndex)}
                onSwiper={(swiper) => {
                  // @ts-ignore
                  swiperRef.current = swiper;
                }}
              >
                {Items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-12 pt-10 pb-48 lg:px-32 lg:pt-20">
                      <div className="relative">
                        <div className="relative z-20 rounded-xl bg-white p-6 shadow-great">
                          <span className="absolute top-0 left-0 mr-3 h-12 w-12 flex-none -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full">
                            <Image
                              layout="responsive"
                              className="object-cover"
                              width="100%"
                              height="100%"
                              src={`/images/${item.image}`}
                              alt={item.author}
                            />
                          </span>
                          <p className="mb-8 text-gray-500">{item.desc}</p>
                          <h6 className="text-lg text-gray-900">{item.author}</h6>
                          <h6 className="text-sm text-gray-500">{item.role}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="hidden w-full items-center justify-center lg:flex lg:w-1/12">
            <div className="flex flex-col">
              <button
                onClick={handleSlidePrev}
                className={classNames({
                  'text-gray-300': activeSlide === 0,
                  'text-gray-800': activeSlide !== 0,
                })}
              >
                <span className="material-icons mr-2">keyboard_arrow_up</span>
              </button>
              <button
                onClick={handleSlideNext}
                className={classNames({
                  'text-gray-300': activeSlide === Items.length - 1,
                  'text-gray-800': activeSlide !== Items.length - 1,
                })}
              >
                <span className="material-icons mr-2">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
