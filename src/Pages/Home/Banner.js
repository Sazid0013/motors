import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Auto-Parts-1.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-secondary">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={img} class="max-w-md rounded-lg shadow-xl" />
    <div>
      <h1 class="text-5xl font-bold text-primary">Buy Rc Car Parts From Us!</h1>
      <p class="py-6 font-bold text-white">Drift Motors is one of the best and specialize RC Car Parts manufacturer company in the world. Only we can provide you with the world's highest-quality  products. We do offer worldwide shipping along with long-term warranty service.</p>
      <Link to="/product" class="btn btn-primary text-white">Buy Now</Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;