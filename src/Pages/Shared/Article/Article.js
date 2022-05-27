import React from 'react';
import './Article.css'


const Article = () => {
    return (
        <div class="bg-black">
             <h2 class='text-2xl font-bold text-primary text-center'>WHY CHOSE US?</h2>

            <div class="card w-96 bg-base-100 shadow-xl">
                <h1 class='imageIcon p-3 rounded-circle'>
                    <i class="fa-solid fa-globe "></i></h1>
                <div class="card-body">
                <h4 class='flexTitle text-center'>World Wide Delivery</h4>
                       <p class='text-center flexParagraph'>We can deliver over 170+ country all over the world</p>
                </div>
            </div>


            <div class="card w-96 bg-base-100 shadow-xl">
            <h1 class='imageIcon p-3 px-4 rounded-circle'>
                           <i class="fa-solid fa-users"></i></h1>
                <div class="card-body">
                
                    <h4 class='flexTitle text-center'>Over 2000 Customer</h4>
                       <p class='text-center flexParagraph'>Your trust,our service </p>
                </div>
            </div>


            <div class="card w-96 bg-base-100 shadow-xl">
            <h1 class='imageIcon p-3 rounded-circle'>
                             <i class="fa-solid fa-chart-line"></i></h1>
                <div class="card-body">
                <h4 class='flexTitle text-center'>80M+ Annual Revenue</h4>
                        <p class='text-center flexParagraph'>Customer Service is our main priority</p>
                </div>
            </div>


            <div class="card w-96 bg-base-100 shadow-xl">
            <h1 class='imageIcon p-3 rounded-circle'>
                            <i class="fa-solid fa-headset"></i></h1>
                <div class="card-body">
                <h4 class='flexTitle text-center'>24/7 Customer Support</h4>
                      <p class='text-center flexParagraph'>Call anytime anywhere</p>
                </div>

            </div>
        </div>

        //     

        //             <div class="col">
        //                 <div class='d-flex justify-content-center'>
        //                     
        //                 </div>
        //                
        //             </div>

        //             <div class="col">
        //                 <div class='d-flex justify-content-center'>
        //                     
        //                 </div>
        //                
        //             </div>

        //         </div>
        //     </div>
        // </article>
    );
};

export default Article;