import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from 'components/Header';
import Testimonials from 'components/Testimonials';

import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorEllipse1 from 'assets/images/decor-ellipse-style-1.svg';
import FacebookIco from 'assets/images/facebook.svg';
import InstagramIco from 'assets/images/instagram.svg';
import TwitterIco from 'assets/images/twitter.svg';

const Home: NextPage = () => {
  const Clients = [
    { image: 'client-1.png', alt: 'axon' },
    { image: 'client-2.png', alt: 'jet start' },
    { image: 'client-3.png', alt: 'expedia' },
    { image: 'client-4.png', alt: 'qantas' },
    { image: 'client-5.png', alt: 'alitalia' },
  ];
  return (
    <div>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="travel app, booking app, life app, aplikasi jalan - jalan, dan sebagainya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tag */}
        <meta property="og:url" content="https://next-travel-agency.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo Travel Agency" />
        <meta
          property="og:description"
          content="travel app, booking app, life app, aplikasi jalan - jalan, dan sebagainya"
        />
        <meta property="og:image" content="https://next-travel-agency.vercel.app/jadoo-travel-agency.jpg" />
      </Head>
      {/* Header */}
      <div className="absolute z-20 w-full py-6 lg:z-10 lg:py-12">
        <Header />
      </div>
      {/* Section Hero */}
      <section className="relative mb-28">
        <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3" />
        </span>
        <div className="absolute -left-80 -top-10 h-[496px] w-[478px] rounded-full bg-accent-4/50 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full pt-52 lg:w-6/12">
              <h1 className="mb-6 text-sm font-bold uppercase text-accent-2 lg:text-xl">
                Best Destinations around the world
              </h1>
              <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900 lg:text-[84px] lg:leading-[89px]">
                Travel,{' '}
                <span className="relative">
                  enjoy
                  <span className="absolute top-full left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
                    <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-2 lg:h-[12px] lg:w-[393px]" />
                  </span>
                </span>
                and live a new and full life
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 lg:text-base lg:leading-8">
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
                  <span className="hidden text-gray-500 lg:block">Play Demo</span>
                </button>
              </div>
            </div>
            <div className="relative hidden h-[764px] w-[783px] pt-24 lg:block">
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
                  alt="traveler"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Category */}
      <section className="mb-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="absolute -top-10 h-36 w-36 lg:-right-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="mb-16 flex flex-col text-center">
            <h3 className="mb-2 text-lg uppercase text-gray-500">Category</h3>
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              We Offer Best Services
            </h3>
          </div>
          <div className="flex flex-wrap text-gray-900">
            <div className="w-full px-8 lg:w-3/12">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -right-11 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/illustration-satellite.png"
                      alt="satellite"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 transform rounded-tl-lg rounded-tr-md rounded-br-[18px] rounded-bl-md bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Calculated Weather</h4>
                <h5 className="mb-8 px-0 text-base font-medium text-gray-500 lg:px-8">
                  Built Wicket longer admire do barton vanity itself do in it.
                </h5>
              </div>
            </div>
            <div className="w-full px-8 lg:w-3/12">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute z-10 -translate-x-1/2">
                    <Image layout="fixed" width={146} height={133} src="/images/plane.png" alt="plane" />
                  </div>
                  <div className="absolute bottom-10 -left-3 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-lg rounded-br-md rounded-bl-[18px] bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Best Flights</h4>
                <h5 className="mb-8 px-0 text-base font-medium text-gray-500 lg:px-8">
                  Engrossed listening. Park gate sell they west hard for the.
                </h5>
              </div>
            </div>
            <div className="w-full px-8 lg:w-3/12">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -left-3 top-2 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image layout="fixed" width={40} height={69} src="/images/illustration-mic.png" alt="microphone" />
                  </div>
                  <div className="absolute bottom-5 left-3 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-[18px] rounded-br-md rounded-bl-lg bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Local Events</h4>
                <h5 className="mb-8 px-0 text-base font-medium text-gray-500 lg:px-8">
                  Barton vanity itself do in it. Preferd to men it engrossed listening.
                </h5>
              </div>
            </div>
            <div className="w-full px-8 lg:w-3/12">
              <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
                <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:opacity-100"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="absolute -right-10 top-3 z-10 translate-y-1/2 -translate-x-1/2">
                    <Image layout="fixed" width={50} height={50} src="/images/illustration-power.png" alt="gear" />
                  </div>
                  <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 transform rounded-tl-md rounded-tr-lg rounded-br-md rounded-bl-[18px] bg-accent-3"></div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Customization</h4>
                <h5 className="mb-8 px-0 text-base font-medium text-gray-500 lg:px-8">
                  We deliver outsourced aviation services for military customers
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Destinations Section */}
      <section className="mb-28">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col text-center">
            <h3 className="mb-2 text-lg uppercase text-gray-500">Top Selling</h3>
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              Top Destinations
            </h3>
          </div>
          <div className="relative flex flex-wrap space-y-5 pr-0  lg:space-y-0 lg:pr-10">
            <div className="absolute bottom-10 right-0 h-[252px] w-[96px]">
              <DecorSwirl1 className="stroke-gray-600" />
            </div>
            <div className="relative z-20 w-full px-4 lg:w-4/12">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image layout="fill" className="object-cover object-top" src="/images/destination-1.jpg" alt="Rome" />
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
            <div className="relative z-20 w-full px-4 lg:w-4/12">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image
                    layout="fill"
                    className="object-cover object-top"
                    src="/images/destination-2.jpg"
                    alt="Big Bang"
                  />
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
            <div className="relative z-20 w-full px-4 lg:w-4/12">
              <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                  <Image
                    layout="fill"
                    className="object-cover object-top"
                    src="/images/destination-3.jpg"
                    alt="europe"
                  />
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
      {/* Section Easy in Fast */}
      <div className="mb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-4">
          <div className="flex flex-wrap space-x-4 space-y-4 lg:space-y-0 lg:space-x-0">
            <div className="w-full pl-0 lg:w-6/12 lg:pl-6">
              <div className="mb-3 flex flex-col text-left lg:mb-16">
                <h3 className="mb-2 text-lg uppercase text-gray-500">Easy in Fast</h3>
                <h3 className="mb-8 font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
                  Book your next trip in 3 easy steps
                </h3>
              </div>
              <ul className="flex flex-col gap-y-8 lg:gap-y-12">
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                    <span className="material-icons text-white">navigation</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className="font-bold text-gray-900">Choose Destination</h6>
                    <p className="font-thin text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.{' '}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-2">
                    <span className="material-icons text-white">credit_card</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className="font-bold text-gray-900">Make Payment</h6>
                    <p className="font-thin text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.{' '}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-7">
                    <span className="material-icons text-white">plane</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className="font-bold text-gray-900">Reach Airport on Selected Date</h6>
                    <p className="font-thin text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.{' '}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex w-full items-center justify-center lg:w-6/12">
              <div className="relative w-[370px]">
                <div className="absolute -top-10 -right-10 z-10 h-60 w-60 rounded-full bg-accent-7/40 blur-3xl"></div>
                <div className="absolute bottom-16 -right-1 z-30 w-[263px] translate-x-0 transform rounded-2xl bg-white p-4 pr-7 shadow-great lg:right-0 lg:translate-x-1/2">
                  <div className="flex">
                    <span className="mr-3 h-12 w-12 flex-none overflow-hidden rounded-full">
                      <Image
                        src="/images/destination-5.jpg"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt="city of greece"
                      />
                    </span>
                    <div className="mb-2 flex w-full flex-col">
                      <span className="text-sm text-gray-500">Ongoing</span>
                      <span className="mb-2 text-sm text-gray-900">Trip to Rome</span>
                      <span className="mb-1 text-xs">
                        <span className="mr-1 text-accent-6">40%</span>
                        <span className="text-gray-900">Completed</span>
                      </span>
                      <span className="flex h-1 w-full rounded-full bg-gray-200">
                        <span className="h-full w-20 rounded-full bg-accent-6" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative z-20 rounded-xl bg-white px-4 pt-4 pb-5 shadow-great">
                  <div className="relative mb-6 h-40 overflow-hidden rounded-3xl">
                    <Image
                      layout="fill"
                      width="100%"
                      height="100%"
                      className="object-cover"
                      src="/images/destination-4.jpg"
                      alt="greece"
                    />
                  </div>
                  <h6 className="mb-2 text-lg font-bold text-gray-900">Trip to Greece</h6>
                  <div className="mb-4 flex text-gray-500">
                    <h6>14-29 June</h6>
                    <span className="mx-2">|</span>
                    <h6>by Robbin joseph</h6>
                  </div>
                  <div className="mb-6 flex gap-x-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600">
                      <span className="material-icons text-base">spa</span>
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600">
                      <span className="material-icons text-base">map</span>
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600">
                      <span className="material-icons text-base">near_me</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3 text-gray-500">
                      <span className="material-icons text-base">apartment</span>
                      <span>24 people going</span>
                    </div>
                    <span className="material-icons text-2xl text-accent-6">favorite_border</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Testimonial */}
      <Testimonials />
      {/* Section Clients */}
      <section className="mb-28">
        <div className="relative mx-auto max-w-full lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-5 lg:gap-y-0 lg:gap-x-4">
            {Clients.map((item, idx) => (
              <div
                key={idx}
                className="relative h-20 transform rounded-2xl bg-white p-4 grayscale transition-all duration-300 hover:-translate-y-1 hover:shadow-great hover:grayscale-0"
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.alt}
                  className="object-contain lg:object-none"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section News Letter */}
      <section className="mb-32">
        <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
          <div className="absolute bottom-0 -z-10 h-36 w-36 translate-y-1/2 rotate-90 transform lg:-right-20">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="relative w-full bg-white">
            <div className="relative top-8 right-auto left-1/2 z-30 h-16 w-16 -translate-x-1/2 translate-y-0 transform rounded-full bg-gradient-to-b from-accent-6/60 to-accent-6 lg:absolute lg:top-0 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/2">
              <span className="material-icons flex h-16 w-16 items-center justify-center text-white">near_me</span>
            </div>
            <div className="relative z-20 mb-8 overflow-hidden rounded-xl rounded-tl-3xl bg-accent-4/20 pt-20 pb-20 lg:rounded-3xl lg:rounded-tl-[120px]">
              <div className="absolute top-0 right-0 h-[290px] w-[284px] -translate-y-1/3 translate-x-1/4 rotate-[45deg] scale-x-[-1] transform">
                <DecorEllipse1 className="stroke-accent-6/10 opacity-10" />
              </div>
              <div className="absolute -bottom-0 left-4 h-[397px] w-[389px] translate-y-1/3 transform">
                <DecorEllipse1 className="stroke-accent-6/10 opacity-10" />
              </div>
              <div className="relative z-10">
                <h6 className="mb-10 px-4 text-center text-lg font-bold leading-normal text-gray-500 lg:px-36 lg:text-3xl">
                  Subscribe to get information, latest news and other interesting offers about Cobham
                </h6>
                <form action="" className="flex justify-center lg:space-x-5">
                  <fieldset className="relative">
                    <span className="material-icons absolute flex h-full w-16 items-center justify-center text-gray-500">
                      mail_outline
                    </span>
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-auto appearance-none rounded-l-lg border-2 border-transparent bg-white py-4 pl-14 transition duration-300 focus:border-accent-6 focus:outline-none lg:w-96 lg:rounded-lg"
                    />
                  </fieldset>
                  <button className="rounded-r-lg bg-gradient-to-b from-accent-2/90 to-accent-2 py-4 px-4 text-white lg:rounded-lg lg:px-16">
                    <span className="hidden lg:block">Subscribe</span>
                    <span className="material-icons block lg:hidden">search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative overflow-x-hidden pb-32">
        <div className="h-6- bg-accent-6.20 absolute -bottom-0 -right-10 z-10 w-60 rounded-full blur-3xl"></div>
        <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
          <div className="mb-12 flex flex-wrap">
            <div className="w-full lg:w-3/12 lg:px-4">
              <h6 className="mb03 mb-4 text-5xl tracking-tight text-gray-900">Jadoo.</h6>
              <p className="pr-8 text-sm text-gray-500">Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-4">
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Company</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Mobile</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Contact</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>Help</a>
                      </Link>
                      /FAQ
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Press</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Affiliates</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">More</h6>
                  <ul className="space-y-2 text-lg text-gray-500">
                    <li>
                      <Link href="/#">
                        <a>Airlinefees</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Airline</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>Low fare tips</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full lg:mt-0 lg:w-3/12">
              <div className="flex space-x-5">
                <Link href="https://facebook.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <FacebookIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="https://instagram.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <InstagramIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="https://twitter.com" className="cursor-pointer" passHref>
                  <a target="blank" rel="noreferrer noopener">
                    <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white fill-black shadow-xl">
                      <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                      <span className="relative z-20">
                        <TwitterIco className="fill-black group-hover:fill-white" />
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
              <h6 className="mt-7 text-xl tracking-tight text-gray-500">Discover our app</h6>
              <div className="mt-4 flex space-x-1">
                <div className="relative h-[35px] w-[107px]">
                  <a href="https://play.google.com" target="_blank" className="relative flex h-full w-full">
                    <Image layout="fill" alt="play store" className="object-contain" src="/images/google-play-1.jpg" />
                  </a>
                </div>
                <div className="relative h-[35px] w-[107px]">
                  <a href="https://www.apple.com/id/app-store/" target="_blank" className="relative flex h-full w-full">
                    <Image layout="fill" alt="apps store" className="object-contain" src="/images/apple-1.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-gray-500">All rights reserved@jadoo.co</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
