import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from 'components/Header';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';

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
      <section className="relative mb-28">
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
          <div className="mb-16 flex flex-col text-center">
            <h3 className="mb-2 text-lg uppercase text-gray-500">Category</h3>
            <h3 className="font-serif text-5xl uppercase leading-snug text-gray-900">We Offer Best Services</h3>
          </div>
          <div className="flex text-gray-900">
            <div className="w-3/12 px-8">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -right-11 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image layout="fixed" width={60} height={60} src="/images/illustration-satellite.png" />
                  </div>
                  <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 transform rounded-tl-lg rounded-tr-md rounded-br-[18px] rounded-bl-md bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Calculated Weather</h4>
                <h5 className="mb-8 px-8 text-base font-medium text-gray-500">
                  Built Wicket longer admire do barton vanity itself do in it.
                </h5>
              </div>
            </div>
            <div className="w-3/12 px-8">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute z-10 -translate-x-1/2">
                    <Image layout="fixed" width={146} height={133} src="/images/plane.png" />
                  </div>
                  <div className="absolute bottom-10 -left-3 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-lg rounded-br-md rounded-bl-[18px] bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Best Flights</h4>
                <h5 className="mb-8 px-8 text-base font-medium text-gray-500">
                  Engrossed listening. Park gate sell they west hard for the.
                </h5>
              </div>
            </div>
            <div className="w-3/12 px-8">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -left-3 top-2 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image layout="fixed" width={40} height={69} src="/images/illustration-mic.png" />
                  </div>
                  <div className="absolute bottom-5 left-3 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-[18px] rounded-br-md rounded-bl-lg bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Local Events</h4>
                <h5 className="mb-8 px-8 text-base font-medium text-gray-500">
                  Barton vanity itself do in it. Preferd to men it engrossed listening.
                </h5>
              </div>
            </div>
            <div className="w-3/12 px-8">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -right-10 top-3 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image layout="fixed" width={50} height={50} src="/images/illustration-power.png" />
                  </div>
                  <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-lg rounded-br-md rounded-bl-[18px] bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Customization</h4>
                <h5 className="mb-8 px-8 text-base font-medium text-gray-500">
                  We deliver outsourced aviation services for military customers
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col text-center">
            <h3 className="mb-2 text-lg uppercase text-gray-500">Top Selling</h3>
            <h3 className="font-serif text-5xl uppercase leading-snug text-gray-900">Top Destinations</h3>
          </div>
          <div className="relative flex pr-10">
            <div className="absolute bottom-10 right-0 h-[252px] w-[96px]">
              <DecorSwirl1 className="stroke-gray-600" />
            </div>
            <div className="relative z-20 w-4/12 px-4">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image layout="fill" className="object-cover object-top" src="/images/destination-2.jpg" />
                </div>
                <div className="text-gray-500">
                  <div className="flex justify-between px-5 pt-7">
                    <h6 className="text-lg">Rome, Italy</h6>
                    <h6 className="text-lg">$5,42k</h6>
                  </div>
                  <div className="inline-flex items-center px-5 pt-4">
                    <span className="material-icons mr-2 text-black">near_me</span>
                    <span>10 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-20 w-4/12 px-4">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image layout="fill" className="object-cover object-top" src="/images/destination-3.jpg" />
                </div>
                <div className="text-gray-500">
                  <div className="flex justify-between px-5 pt-7">
                    <h6 className="text-lg">London, UK</h6>
                    <h6 className="text-lg">$4,2k</h6>
                  </div>
                  <div className="inline-flex items-center px-5 pt-4">
                    <span className="material-icons mr-2 text-black">near_me</span>
                    <span>12 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-20 w-4/12 px-4">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image layout="fill" className="object-cover object-top" src="/images/destination-1.jpg" />
                </div>
                <div className="text-gray-500">
                  <div className="flex justify-between px-5 pt-7">
                    <h6 className="text-lg">Full Europe</h6>
                    <h6 className="text-lg">$15k</h6>
                  </div>
                  <div className="inline-flex items-center px-5 pt-4">
                    <span className="material-icons mr-2 text-black">near_me</span>
                    <span>28 Days Trip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
