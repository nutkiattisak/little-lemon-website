import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <section>
        <div className="container mx-auto max-w-7xl lg:px-5 md:px-8 pt-24 pb-2 sm:pt-32">
          <div className="">
            <div className="relative pt-16 md:pt-24 lg:flex justify-between lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-4xl font-bold tracking-tight text-black">
                  Zest Up Your Life
                  <br />
                  with Little Lemon!
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Discover the Art of Lemon Delights, Crafted to Perfection!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    className="rounded-full bg-[#adc178] px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-[#adc178] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    to="/menu"
                  >
                    View Menu
                  </Link>
                  <Link
                    className="rounded-full  px-4 py-2.5 font-semibold leading-6 text-[#adc178] border border-solid border-[#adc178]"
                    to="/reservation"
                  >
                    Booking Now
                  </Link>
                </div>
              </div>
              <div className="">
                <img
                  className="max-w-[460px] w-full"
                  src="/src/assets/images/product/food.png"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
