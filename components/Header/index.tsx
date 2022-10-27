import React from 'react';
import Link from 'next/link';

import Logo from 'assets/images/logo.svg';

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>
        <div className="w-auto">
          <ul className="flex items-center">
            <li>
              <Link href="/destination">
                <a className="px-9 text-gray-800">Destinations</a>
              </Link>
            </li>
            <li>
              <Link href="/hotels">
                <a className="px-9 text-gray-800">Hotels</a>
              </Link>
            </li>
            <li>
              <Link href="/flights">
                <a className="px-9 text-gray-800">Flights</a>
              </Link>
            </li>
            <li>
              <Link href="/bookings">
                <a className="px-9 text-gray-800">Bookings</a>
              </Link>
            </li>
            <li>
              <Link href="/destination">
                <a className="px-9 text-gray-800">Destinations</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="px-9  text-gray-800">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <a className="mx-3 rounded-md border border-gray-900 px-5 py-1 text-gray-800">Sign Up</a>
              </Link>
            </li>
            <li>
              <button className="relative px-9 text-gray-800">
                EN
                <span className="absolute ml-2 h-2 w-2 translate-y-1/2 rotate-45 transform border-b border-r border-gray-800"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
