import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = () => {
    return (
        <div class="bg-black">
            <div class="text-center mb-8">
            <h1 class=" text-3xl font-bold text-primary">Some Of Our Products</h1>
            <p class="text-white text-xl">Quality is our main priority</p>
            </div>
            <div class="grid grid-cols-4 p-5 ">


                <div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <h4>Price:$</h4>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <h4>Price:$</h4>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <h4>Price:$</h4>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <h4>Price:$</h4>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" mt-5">
                <Link to="/product" class="btn btn-primary text-white">See More</Link>
                </div>

            </div>
        </div>

    );
};

export default ProductCard;