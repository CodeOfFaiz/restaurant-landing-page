export default function Testimonials() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="font-medium text-2xl md:text-3xl text-center text-slate-800 mb-10">
        Our Customers <span className="text-red-500">Reviews</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Card */}
        <div className="relative bg-slate-800 text-center rounded shadow-lg pt-16 pb-6 px-5">

          <img
            src="/1-testimonials.png"
            alt="person"
            className="w-20 h-20 rounded-full object-cover border-4 border-white absolute -top-10 left-1/2 -translate-x-1/2"
          />

          <h3 className="text-white font-semibold text-lg mt-2">John Deo</h3>

          <div className="text-red-500 my-2 text-lg">★★★★☆</div>

          <p className="text-slate-300 text-sm">
            Fast delivery, great taste, and excellent service. The whole experience feels premium. I’ll definitely be ordering again very soon!
          </p>
        </div>

        {/* Repeat */}
        <div className="relative bg-slate-800 text-center rounded shadow-lg pt-16 pb-6 px-5">
          <img src="/2-testimonials.png" className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-1/2 -translate-x-1/2" />
          <h3 className="text-white font-semibold text-lg mt-2">Marlin Casey</h3>
          <div className="text-red-500 my-2 text-lg">★★★★★</div>
          <p className="text-slate-300 text-sm">The food arrived hot and fresh, and the delivery was super quick. Ordering was smooth, and everything tasted amazing. Definitely my go-to place now!</p>
        </div>

        <div className="relative bg-slate-800 text-center rounded shadow-lg pt-16 pb-6 px-5">
          <img src="/3-testimonials.png" className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-1/2 -translate-x-1/2" />
          <h3 className="text-white font-semibold text-lg mt-2">Herlin Timo</h3>
          <div className="text-red-500 my-2 text-lg">★★★★☆</div>
          <p className="text-slate-300 text-sm">I love how easy it is to order from here. The variety is great, and the quality is always consistent. Highly recommended for anyone who loves good food.</p>
        </div>

      </div>
    </div>
  );
}