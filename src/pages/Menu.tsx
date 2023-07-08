export default function Menu() {
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
      name: "Product Name 04",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 05",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 06",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 07",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 08",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 09",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 10",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 11",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
    {
      name: "Product Name 12",
      description: "detail captiom",
      price: 35.0,
      image: "/src/assets/images/product/food.png",
    },
  ];
  return (
    <>
      <section className="bg-[#f1f5dd">
        <div className="mx-auto max-w-7xl md:px-8 !pt-28 p-5">
        <h1 className="text-4xl font-bold text-black text-center mb-3">
              Menu
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, key) => {
              return (
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
                    <p className="mt-2">detail captiom</p>
                    <p className="font-bold">$35.00</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
