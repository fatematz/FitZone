import {use} from "react";
import PricingCard from "./PricingCard/PricingCard";

const PricingOption=({sentPricing}) => {
    
    const pricingData=use(sentPricing)
    // console.log(pricingData)
    
    return (
        <div className="">
            <h2 className="text-3xl md:text-6xl font-black text-center p-7.5">Get Our Membership</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;