import Header from "@/components/Header";

export default function Home() {
  const products = [
    {
      name: "Product Name 01",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 02",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 03",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 03",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-[#f1f5dd">
        <div className="mx-auto max-w-7xl md:px-8 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, key) => {
              return (
                <>
                  <div className="relative" key={key}>
                    <div className="-mb-24 mt-">
                      <img
                        className="w-52 text-center mx-auto"
                        src="/src/assets/images/product/food.png"
                      />
                    </div>
                    <div className="bg-white pt-24 pb-6 px-6 rounded-xl shadow-md">
                      <h3 className="text-center font-bold text-md mt-2">
                        {item.name}
                      </h3>
                      <p className="mt-2">{item.description}</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/bg.jpg')] bg-transparent text-center ">
          <div className="bg-[#adc178]/80 backdrop-brightness-75 w-full py-20 text-white">
            <h2 className="text-4xl">We always Provide</h2>
            <h2>You The Best In Town</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              praesentium a nemo porro, temporibus doloremque. Ex illo aliquid
              quam animi iure rerum quis cupiditate repellendus consequuntur!
              Voluptates minima quisquam dolore!
            </p>
            <div></div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl md:px-8 p-5">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="grid grid-rows-2 grid-flow-col grid-cols-5 gap-3">
              <div className="row-span-2 col-span-3 min-w-auto min-w-full w-full h-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="max-w-full w-full h-full rounded-3xl object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/02.jpg"
                />
              </div>
              <div className="col-span-2 h-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="w-auto max-w-full rounded-3xl aspect-square object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/02.jpg"
                />
              </div>
              <div className="w-full h-full row-span-1 col-span-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="w-auto max-w-full rounded-3xl aspect-square object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/03.jpg"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col grid-cols-5 gap-3">
              <div className="row-span-1 col-span-2 w-full h-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="w-auto max-w-full rounded-3xl aspect-square object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/04.jpg"
                />
              </div>
              <div className="row-span-1 col-span-2 h-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="w-auto max-w-full rounded-3xl aspect-square object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/05.jpg"
                />
              </div>
              <div className="row-span-2 col-span-3 min-w-full w-full h-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-3xl">
                <img
                  className="max-w-full w-full h-full rounded-3xl object-cover transition duration-300 ease-in-out hover:scale-110"
                  src="/src/assets/images/gallery/02.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
