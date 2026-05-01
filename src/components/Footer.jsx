export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-center py-8 relative">

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["Facebook", "Twitter", "Instagram", "Pinterest", "LinkedIn"].map((item) => (
          <button
            key={item}
            className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-slate-300 text-sm">
        Created By <span className="text-red-500">Mohd Faiz</span> | All Rights Are Reserved
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-red-500 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-red-600 transition"
      >
        ↑
      </button>

    </footer>
  );
}