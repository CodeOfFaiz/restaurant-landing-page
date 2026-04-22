import burgerSpec from "../assets/burgerSpec.jpg"
import cakeSpec from "../assets/cakeSpec.jpg"
import sweetsSpec from "../assets/sweetsSpec.jpg"
import cupcakeSpec from "../assets/cupcakeSpec.webp"
import colddrinksSpec from "../assets/colddrinksSpec.jpg"
import icecreamsSpec from "../assets/icecreamsSpec.webp"


export default function PopularFoods() {
    return (
        <div className="px-6 md:px-12 py-10">

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl text-center font-medium text-slate-800 mb-8">
                Most <span className="text-red-500">Popular</span> Foods
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* burger */}

                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={burgerSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Tasty Burger</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

                {/* cakes */}
                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={cakeSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Tasty Cakes</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

                {/* sweets */}
                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={sweetsSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Tasty Sweets</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

                {/* cupcake */}
                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={cupcakeSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Tasty Cupcakes</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

                {/* cold drinks */}
                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={colddrinksSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Cold Drinks</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

                {/* ice creams */}
                <div className="bg-slate-50 rounded-md shadow-md border border-black/5 p-4">

                    {/* IMAGE + BADGE */}
                    <div className="relative">
                        <img
                            src={icecreamsSpec}
                            alt="tasty burger"
                            className="w-full h-44 object-cover rounded-sm"
                        />

                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            $5 - $20
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center p-4">
                        <h3 className="font-semibold text-slate-700">Tasty Ice-Creams</h3>

                        <div className="text-yellow-400 text-sm mt-1">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <button className="mt-3 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
                            Order Now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}