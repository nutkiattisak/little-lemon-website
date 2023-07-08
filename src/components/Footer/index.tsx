export default function index() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const social = [
    {
      name: "Facebook",
      href: "#",
      icon: () => (
        <svg
          className="svg-inline--fa fa-facebook-square fa-w-14 fa-2x inline-block w-[28px] h-[32px] text-white"
          aria-hidden="true"
          data-fa-processed
          data-prefix="fab"
          data-icon="facebook-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
          />
        </svg>
      ),
    },
    {
      name: "+6691 445 6633",
      href: "#",
      icon: () => (
        <svg
          className="svg-inline--fa fa-phone-square fa-w-14 fa-2x inline-block w-[28px] h-[32px] text-white"
          aria-hidden="true"
          data-fa-processed
          data-prefix="fa"
          data-icon="phone-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"
          />
        </svg>
      ),
    },
    {
      name: "contact@littlelemon.com",
      href: "mailto:contact@littlelemon.com",
      icon: () => (
        <svg
          className="svg-inline--fa fa-envelope-square fa-w-14 fa-2x inline-block w-[28px] h-[32px] text-white"
          aria-hidden="true"
          data-fa-processed
          data-prefix="fa"
          data-icon="envelope-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <footer className="bg-[#adc178]">
        <div className="container px-5 mx-auto max-w-7xl">
          <div className="grid gap-3 md:gap-4 py-5 md:grid-cols-3 grid-cols-1">
            <div>
              <figure>
                <img
                  src="/src/assets/images/logo/lemon-logo.png"
                  className=" w-full max-w-[100px]"
                  alt="Logo"
                />
                <p className="text-white">Little Lemon</p>
              </figure>
            </div>
            <div className="text-white">
              <p className="text-lg">Little Lomon</p>
              <p className="text-base font-thin">Open 9AM - 9PM</p>
              <p className="text-base font-thin"></p>
            </div>
            <div className="text-white">
              {social.map((item) => {
                return (
                  <>
                    <p className="mb-1">
                      <item.icon />
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Little Lemon"
                      >
                        <span className="ml-1 align-bottom text-base">
                          {item.name}
                        </span>
                      </a>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="group flex justify-center items-center bg-[#f7f7f7] rounded-full fixed right-7 bottom-7 w-[35px] h-[35px]"
        >
          <svg
            className="svg-inline--fa fa-chevron-up fa-w-14 w-[14px] h-4 text-[#999]"
            aria-hidden="true"
            data-fa-processed
            data-prefix="fa"
            data-icon="chevron-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
            />
          </svg>
        </button>
      </footer>
    </>
  );
}
