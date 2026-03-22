import { CircleCheckBig } from 'lucide-react';

const PricingFeature=({feature}) => {
    console.log(typeof feature, feature )
    return ( 
        <p className="p-4 flex gap-2"  > <CircleCheckBig></CircleCheckBig>   {feature} </p>
    );
};

export default PricingFeature;