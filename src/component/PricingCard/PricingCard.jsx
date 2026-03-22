import PricingFeature from "./PricingFeature"

const PricingCard=({pricing}) => {
    console.log(typeof pricing )
    const {name, price, description, features, popular }= pricing
    return (
        <div >
            {
                <div className='bg-amber-300 border m-4 rounded-[20px] p-5'>
                    { popular && 
                    <span  className="bg-purple-800 text-white py-1 px-4  rounded-3xl absolute -mt-9 ml-50 ">most popular</span>
                        }
                    <h1 className="text-3xl md:text-6xl font-bold mt-4 mb-4"> {name} </h1>
                    <h2 className="text-2xl md:text-4xl  font-bold mb-4">${price}/month</h2>

                <div className="bg-amber-200 border-t-2 border-x-2 p-4 rounded-t-4xl h-112.5">
                        <p className=""> {description} </p>
                            {
                                features.map( (feature, index )=> <PricingFeature key={index} feature= { feature}>  </PricingFeature> )
                            }
                    </div>
                    
                    <div className="">
                <button className="btn w-full rounded-b-4xl bg-black text-white">Subscribe</button>
            </div>
                </div>

            }
        </div>
    )
}
export default PricingCard
