export default function OrderNow() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="font-medium text-2xl md:text-3xl text-center text-slate-800 mb-10">
        Order <span className="text-red-500">Now</span>
      </h2>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/* Left Image */}
        <div>
          <img
            src="/order.png"   // change to your correct image
            alt="order"
            className="w-full rounded shadow"
          />
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded shadow">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Name"
              className="border border-slate-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-slate-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-slate-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="text"
              placeholder="Food Name"
              className="border border-slate-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />

            {/* Full width textarea */}
            <textarea
              placeholder="Address"
              className="col-span-1 sm:col-span-2 border border-slate-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
              rows="4"
            ></textarea>

          </div>

          {/* Button */}
          <button className="mt-4 px-5 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}