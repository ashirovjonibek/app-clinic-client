import React, {useEffect} from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {withTranslation} from "react-i18next";

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};

function WordCloud({t}) {
    return (
        <div className='app-outer'>
            <div className='app-inner'>
                <TagCloud
                    className='tag-cloud'
                    style={{
                        fontFamily: 'sans-serif',
                        fontSize: 30,
                        color: () => randomColor({
                            hue: 'blue'
                        }),
                        padding: 5,
                    }}>
                    <div
                        style={{
                            fontFamily: 'serif',
                            fontSize: 40,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: randomColor()
                        }}>Futurama</div>
                    <div style={styles.large}>Transformers</div>
                    <div style={styles.large}>Simpsons</div>
                    <div style={styles.large}>Dragon Ball</div>
                    <div style={styles.large}>Rick & Morty</div>
                    <div style={{fontFamily: 'courier'}}>He man</div>
                    <div style={{fontSize: 30}}>World trigger</div>
                    <div style={{fontStyle: 'italic'}}>Avengers</div>
                    <div style={{fontWeight: 200}}>Family Guy</div>
                    <div style={{color: 'green'}}>American Dad</div>
                    <div>
                        <a href="#">Gobots</a>
                    </div>
                    <div>
                        <a style={{textDecoration:"none"}} href="#">Gobots</a>
                    </div>

                </TagCloud>
            </div>
        </div>
    );
}

export default withTranslation()(WordCloud);