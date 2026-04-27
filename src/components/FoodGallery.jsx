export default function FoodGallery() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Title */}
      <h2 className="font-medium text-2xl md:text-3xl text-center text-slate-800 mb-6">
        Our Food <span className="text-red-500">Gallery</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">

        <img src="/burger-gallery.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />
        <img src="/sandwich.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />

        <img src="/roll.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />
        <img src="/sweets.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />

        <img src="/cupcake.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />
        <img src="/choco.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />

        <img src="/fried.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />
        <img src="/breakfast.jpg" className="w-full h-40 object-cover rounded border-4 border-white" />

        {/* Full width image */}
        <img 
          src="/cookies.jpg" 
          className="col-span-2 w-full h-48 object-cover rounded border-4 border-white" 
        />

      </div>
    </div>
  );
}