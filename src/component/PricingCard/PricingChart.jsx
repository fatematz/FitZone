import React from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
    {
        id: 1,
        name: 'Basic',
        popular: false,
        price: 799,
        duration: 'month',
        description: 'Perfect for beginners',
        rating: 3.5,
        members: 1200,
        discount: 0,
        features: [
            'Gym Equipment Access',
            'Locker Room Access',
            '2 Group Classes/month',
            'Basic Fitness Assessment',
        ],
    },
    {
        id: 2,
        name: 'Pro',
        popular: true,
        price: 1599,
        duration: 'month',
        description: 'For serious training',
        rating: 4.5,
        members: 3400,
        discount: 10,
        features: [
            'Everything in Basic',
            'Unlimited Group Classes',
            '1 Personal Training Session/month',
            'Nutrition Guide',
            'Progress Tracking',
        ],
    },
    {
        id: 3,
        name: 'Elite',
        popular: true,
        price: 2999,
        duration: 'month',
        description: 'For maximum results',
        rating: 4.8,
        members: 870,
        discount: 15,
        features: [
            'Everything in Pro',
            '4 Personal Training Sessions/month',
            'Custom Meal Plan',
            'Priority Equipment Access',
            '24/7 Gym Access',
            'Monthly Body Composition Analysis',
        ],
    },
    {
        id: 4,
        name: 'Starter',
        popular: false,
        price: 399,
        duration: 'month',
        description: 'Just getting off the couch',
        rating: 3.0,
        members: 2100,
        discount: 0,
        features: [
            'Gym Equipment Access',
            '1 Group Class/month',
            'Online Workout Videos',
        ],
    },
    {
        id: 5,
        name: 'Family',
        popular: false,
        price: 3499,
        duration: 'month',
        description: 'Best value for the whole family',
        rating: 4.2,
        members: 650,
        discount: 20,
        features: [
            'Up to 4 Family Members',
            'Unlimited Group Classes',
            'Kids Fitness Zone Access',
            '2 Personal Training Sessions/month',
            'Nutrition Consultation',
            'Locker Room Access',
        ],
    },
    {
        id: 6,
        name: 'Student',
        popular: false,
        price: 599,
        duration: 'month',
        description: 'Special plan for students',
        rating: 4.0,
        members: 1800,
        discount: 25,
        features: [
            'Gym Equipment Access',
            '3 Group Classes/month',
            'Locker Room Access',
            'Student ID Required',
        ],
    },
]
const PricingChart = () => {
    return (
        <div className='p-5'>
            {<h1 className="text-2xl md:text-4xl font-bold text-center pt-7.5">pricing-overview-chart</h1>}

        <div className=' w-full max-w-4xl mx-auto border-2 mt-10'>
          <ResponsiveContainer width="90%" height={400}>
                <LineChart data={chartData}>
                    <XAxis dataKey={'name'}></XAxis>
                    {/* <YAxis></YAxis> */}
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line dataKey={'price'}></Line>
                    <Line dataKey={'members'} stroke='red'></Line>
            </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}

export default PricingChart
