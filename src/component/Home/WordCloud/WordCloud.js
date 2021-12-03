import React, {Component} from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import './style.css'
import data from './words'

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

class WordCloud extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }

    render() {
        return (
            <div className="word-cloud">
                <div className='app-outer'>
                    <div className='app-inner'>
                        <TagCloud
                            className='tag-cloud'
                            style={{
                                fontFamily: 'sans-serif',
                                //fontSize: () => Math.round(Math.random() * 50) + 16,
                                fontSize: 14,
                                color: () => randomColor({
                                    hue: 'blue'
                                }),
                                padding: 5,
                            }}>
                            {
                                data.map((item, i) =>
                                    <div key={i}>
                                        <a style={{
                                            fontFamily: 'serif',
                                            fontSize: 14,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: randomColor()
                                        }} target="_blank" href={item.url}>{item.word}</a>
                                    </div>
                                )
                            }
                        </TagCloud>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordCloud;
