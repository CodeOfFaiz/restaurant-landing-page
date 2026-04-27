export default function HowItWorks() {
    return (
        <div className="flex justify-around">

            {/* favourite food  */}
            <div className="w-40 flex flex-col justify-center items-center text-center">
                <div className="w-35 bg-red-500 rounded-full border-8 border-white overflow-auto">
                    <img src="/fvt-food.png" alt="favourite-food"
                        className="w-33" />
                </div>
                <div className="font-medium text-slate-700">
                    <p>Choose Your Favourite Food</p>
                </div>

            </div>


            {/* delivery  */}
            <div className="w-40 flex flex-col justify-center items-center text-center">
                <div className="w-35 bg-red-500 rounded-full border-8 border-white overflow-auto">
                    <img src="/delivery.png" alt="Free And Fast Delivery"
                        className="" />
                </div>
                <div className="font-medium text-slate-700">
                    <p>Free And Fast Delivery</p>
                </div>

            </div>


            {/* payment methods  */}
            <div className="w-40 flex flex-col justify-center items-center text-center">
                <div className="w-35 bg-red-500 rounded-full border-8 border-white overflow-auto">
                    <img src="/payment.png" alt="Easy Payment Methods"
                        className="" />
                </div>
                <div className="font-medium text-slate-700">
                    <p>Free And Fast Delivery</p>
                </div>

            </div>

            {/* enjoy food  */}
             <div className="w-40 flex flex-col justify-center items-center text-center">
                <div className="w-35 bg-red-500 rounded-full border-8 border-white overflow-auto">
                    <img src="/enjoy-food.png" alt="Enjoy your food"
                        className="" />
                </div>
                <div className="font-medium text-slate-700">
                    <p>And Finally Enjoy Your Food</p>
                </div>

            </div>
        </div>
    )
}