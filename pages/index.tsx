import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "components/Header";
import DecorHero from "assets/images/decor-intersect-1.svg";
import DecorTextUnderlineHero from "assets/images/text-decor-hero.svg";
import DecorPlus1 from "assets/images/decor-plus-style-1.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="Travel Agency APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>
      <section className="relative">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 ">
          <DecorHero className="fill-accent-3" />
        </span>
        <div className="bg-accent-4/50 w-[478px] h-[496px] rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>
              <h2 className="text-gray-900 text-[84px] leading-[89px] font-serif tracking-tighter mb-8">
                Travel,{" "}
                <span className="relative">
                  enjoy
                  <span className="absolute top-full left-0 -mt-8 -ml-4 -z-10">
                    <DecorTextUnderlineHero className="w-[393px] h-[12px] fill-accent-2" />
                  </span>
                </span>{" "}
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="flex">
                <Link href="/">
                  <a className="mr-11 bg-accent-1 text-white rounded-xl shadow-[0-25-35px] px-6 py-4">
                    Find Out More
                  </a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6  bg-accent-2 text-white rounded-full inline-flex items-center justify-center p-4 shadow-accent-2/30">
                    <span className="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>
            <div className="w-[783px] h-[764px] pt-24 relative">
              <div className="absolute w-[137px] h-[95px] top-44 left-40 z-30">
                <Image
                  src="/images/plane.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt="plane"
                />
              </div>
              <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
                <Image
                  src="/images/plane.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt="plane"
                />
              </div>
              <div className="relative z-20 transform -translate-x-16">
                <Image
                  src="/images/hero-traveller.png"
                  priority
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt="traveller"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-10 -top-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
