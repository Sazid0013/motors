import React from 'react';

import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img6 from '../../../assets/6.jpg'
import img7 from '../../../assets/7.jpg'
import img8 from '../../../assets/8.jpg'
import img9 from '../../../assets/9.jpg'
import img10 from '../../../assets/10.jpg'



const Cars = () => {
    return (
        <div class="grid grid-cols-4 gap-4">
            <div><img src={img1} alt="" srcset="" /></div>
            <div><img src={img2} alt="" srcset="" /></div>
            <div><img src={img3} alt="" srcset="" /></div>
            <div><img src={img4} alt="" srcset="" /></div>
            <div><img src={img5} alt="" srcset="" /></div>
            <div><img src={img6} alt="" srcset="" /></div>
            <div><img src={img7} alt="" srcset="" /></div>
            <div><img src={img8} alt="" srcset="" /></div>
            <div><img src={img9} alt="" srcset="" /></div>
            <div><img src={img10} alt="" srcset="" /></div>
            
        </div>
    );
};

export default Cars;