import {  Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <nav className="fixed z-30 items-center w-full px-2 py-4 transition bg-[#f1f5dd] bg-opacity-[0.97]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="container relative flex items-center justify-between">
            <div className="flex flex-shrink-0 items-start sm:items-end">
              <Link
                to="/"
                className="text-3xl font-bold leading-none flex items-center"
              >
                <img
                  src="/src/assets/images/logo/lemon-logo.png"
                  className="w-14"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <ul className="flex items-center space-x-6">
                <li>
                  <Link
                    className="text-base font-semibold text-black hover:text-[#adc178]"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold text-black hover:text-[#adc178]"
                    to="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold text-black hover:text-[#adc178]"
                    to="/reservation"
                  >
                    Reservation
                  </Link>
                </li>
                <li className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    className="text-base font-semibold text-black hover:text-[#adc178]"
                    to="about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
