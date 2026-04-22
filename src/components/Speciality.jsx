export default function Speciality() {
    return (
        <div className="py-4">
            <h2 className="text-2xl text-center font-medium text-slate-800">Our <span className="text-red-500">Speciality</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-4">
                {/* tasty burger  */}
                <div className="flex flex-col gap-2 justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/burger-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Tasty Burger</h3>
                    <p className="text-slate-600 text-sm">Freshly made burgers with premium ingredients and rich flavors.</p>
                </div>
                
                 {/* tasty pizza  */}
                <div className="flex flex-col gap-2 justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/pizza-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Tasty Pizza</h3>
                    <p className="text-slate-600 text-sm">Hot and cheesy pizzas topped with fresh veggies and authentic sauces.</p>
                </div>

                 {/* Cold Ice-Cream  */}
                <div className="flex flex-col justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/IceCream-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Cold Ice-Cream</h3>
                    <p className="text-slate-600 text-sm">Creamy and delicious ice creams made with high-quality ingredients.</p>
                </div>

                 {/* Cold Drinks  */}
                <div className="flex flex-col justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/ColdDrinks-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Cold Drinks</h3>
                    <p className="text-slate-600 text-sm">Refreshing cold drinks made with natural fruits and energizing flavors.</p>
                </div>

                 {/* tasty sweets  */}
                <div className="flex flex-col justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/TastySweets-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Tasty Sweets</h3>
                    <p className="text-slate-600 text-sm">Delightful sweets crafted with love to satisfy your sweet cravings.</p>
                </div>

                 {/* tasty breakfast  */}
                <div className="flex flex-col justify-center items-center text-center rounded-md p-5 bg-slate-50 shadow-md border border-black/10 h-50">
                    <img
                        src="/TastyBreakfast-opt.png"
                        alt="burger"
                        className="w-10"
                    />
                    <h3 className="text-slate-700 font-bold">Tasty Breakfast</h3>
                    <p className="text-slate-600 text-sm">Healthy and tasty breakfast options to kickstart your day right.</p>
                </div>
            </div>
        </div>
    )
}