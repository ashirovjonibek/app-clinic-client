import React from 'react';
import placeholder555x493 from "../../assets/img/home.jpg";

const WhatClinic=()=>{


    return(
        <div className="container">
            <div className="row heading heading-icon">
                <h2>KLINIKA NIMA</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 left-block">
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada elementum nisl
                        at rhoncus. Fusce at est hendrerit, laoreet nulla non, cursus neque. Integer a lacinia
                        mauris. Duis rutrum urna finibus, dapibus leo cursus, rutrum nibh. Suspendisse
                        potenti. </i>
                    <p>Quam velit pretium ante, eu posuere sem massa non libero. Nunc viverra pretium nisi ut
                        pellentesque. Nullam sem sem, dignissim nec consequat sed, facilisis eu velit. Nunc
                        pharetra blandit diam commodo consequat. Sed placerat arcu hendrerit lorem finibus, in
                        posuere arcu ullamcorper. In hac habitasse platea dictumst. Donec scelerisque enim vitae
                        magna pretium dapibus ac et sapien.Aliquam erat volutpat. Cras eu neque diam. In
                        pellentesque nunc varius, tempus turpis nec, elementum odio. Pellentesque id metus id
                        velit efficitur lacinia. Proin tincidunt aliquam sollicitudin.</p>
                    <p>Fusce sed dignissim sapien. Curabitur ullamcorper tempus elementum. Duis id tristique
                        erat. Aliquam blandit felis nulla, at dapibus dui mollis id. Curabitur pellentesque
                        pellentesque elit, vitae vestibulum odio tempus ut.</p>
                </div>
                <div className="col-12 col-md-6 right-block">
                    <img src={placeholder555x493} className="img-responsive" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default WhatClinic