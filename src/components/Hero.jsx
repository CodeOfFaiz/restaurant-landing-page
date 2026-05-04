export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 min-h-[80vh] bg-[url('/bg.jpg')] bg-cover bg-center ">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      {/* TEXT */}
      <div className="relative w-full md:w-1/2 max-w-xl flex flex-col gap-4 md:gap-6 text-center md:text-left text-white">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Food made with love
        </h2>

        <p className="text-sm md:text-base text-gray-200">
          Delicious meals prepared with fresh ingredients and authentic flavors, made to satisfy your cravings every time.
        </p>

        <button className="px-5 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-black hover:scale-105 transition duration-300 w-fit mx-auto md:mx-0 cursor-pointer">
          Order Now
        </button>

      </div>

      {/* IMAGE */}
      <img
        src="/burger.png"
        alt="burger"
        className="relative w-64 md:w-80 lg:w-[420px] mt-6 md:mt-0"
      />

    </div>
  )
}