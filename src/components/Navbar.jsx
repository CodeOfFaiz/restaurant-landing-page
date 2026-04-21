import { useState } from "react"

export default function Navbar() {
    const navOpt = ["Home", "Speciality", "Popular", "Gallery", "Review", "Order"]

    return (
        <>
            <header className="sticky top-0 z-50">
                <nav className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-1 md:py-1.5 lg:py-2 bg-slate-50 shadow-md">
                    <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 text-xl md:text-2xl lg:text-3xl font-bold text-slate-600">
                        <img
                            src="/public/logo.png"
                            alt="Food"
                            className="w-10"
                        />
                        Food
                    </div>

                    <div className="flex text-sm md:text-base lg:text-lg gap-2 md:gap-4 lg:gap-8 text-slate-600 font-medium">
                        {navOpt.map((i) => (
                            <a
                                href={`#${i.toLowerCase()}`}
                                key={i}
                                className="relative hover:text-red-500 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
                            >{i}</a>
                        ))}
                    </div>
                </nav>

                
            </header>
        </>
    )
}