import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from 'components/Header';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';

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
        <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3" />
        </span>
        <div className="absolute -left-80 -top-10 h-[496px] w-[478px] rounded-full bg-accent-4/50 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="mb-6 text-xl font-bold uppercase text-accent-2">Best Destinations around the world</h1>
              <h2 className="mb-8 font-serif text-[84px] leading-[89px] tracking-tighter text-gray-900">
                Travel,{' '}
                <span className="relative">
                  enjoy
                  <span className="absolute top-full left-0 -z-10 -mt-8 -ml-4">
                    <DecorTextUnderlineHero className="h-[12px] w-[393px] fill-accent-2" />
                  </span>
                </span>{' '}
                and live a new and full life
              </h2>
              <p className="mb-8 max-w-lg leading-8 text-gray-500">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                listening. Park gate sell they west hard for the.
              </p>
              <div className="flex">
                <Link href="/">
                  <a className="mr-11 rounded-xl bg-accent-1 px-6 py-4 text-white shadow-[0-25-35px]">Find Out More</a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-accent-2 p-4 text-white shadow-accent-2/30">
                    <span className="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray-500">Play Demo</span>
                </button>
              </div>
            </div>
            <div className="relative h-[764px] w-[783px] pt-24">
              <div className="absolute top-44 left-40 z-30 h-[95px] w-[137px]">
                <Image src="/images/plane.png" layout="responsive" width="100%" height="100%" alt="plane" />
              </div>
              <div className="absolute top-56 right-8 z-10 h-[95px] w-[137px]">
                <Image src="/images/plane.png" layout="responsive" width="100%" height="100%" alt="plane" />
              </div>
              <div className="relative z-20 -translate-x-16 transform">
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
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="absolute -top-10 h-36 w-36 lg:-right-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
