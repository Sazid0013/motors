import React from 'react';
import { Link } from 'react-router-dom';

const AboutCars = () => {
    return (
        <div class="bg-black p-8  ">
            <div class="text-center m-8">
            <h1 class=" text-3xl font-bold text-primary m-4">Lets Know More About RC Cars</h1>
            </div>
            <br />
            <div>
            <p class="text-white p-5">Radio-controlled cars (or RC cars for short) are miniature model cars, buses or trucks that can be controlled from a distance using a specialized transmitter or remote. The term "RC" has been used to mean both "remote controlled" and "radio controlled", where "remote controlled" includes vehicles that are controlled by radio, infrared or a physical wire connection (the latter is now obsolete). Common use of "RC" today usually refers only to vehicles controlled by radio, and this article focuses on radio-controlled vehicles only.

Cars are powered by various sources. Electric models are powered by small but powerful electric motors and rechargeable nickel-cadmium, nickel metal hydride, or lithium polymer cells. There are also brushed or brushless electric motors - brushless motors are more powerful and efficient, but also much more expensive than brushed motors. Most fuel-powered models use glow plug engines, small internal combustion engines fueled by a special mixture of nitromethane, methanol, and oil (in most cases a blend of castor oil and synthetic oil). These are referred to as "nitro" cars. Recently, exceptionally large models have been introduced that are powered by small gasoline engines, similar to string trimmer motors, which use a mix of oil and gasoline. Electric cars are generally considered easier to work with compared to fuel-driven models, but can be equally as complex at the higher budget and skill levels. Both electric and nitro models can be very fast, although electric is easier to upgrade and more versatile.

In both of these categories, both on-road and off-road vehicles are available. Off-road models, which are built with fully functional off-road suspensions and a wide tire selection, can be used on various types of terrain. On-road cars, with a much less robust suspension, are limited to smooth, paved surfaces. There are also rally cars, which fall somewhere between on-road and off-roadand can be driven on gravel, dirt or other loose surfaces. In the past decade, advances in "on-road" vehicles have made their suspension as adjustable as many full scale race cars, today.</p>
            </div>
            <br />
            <div class="text-center">
            <Link to="/cars" class="btn btn-primary text-white">Lets See Some Image</Link>
            </div>
            
            
              
        </div>
    );
};

export default AboutCars;