import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const SimpleCounter = (props) => {
    return (
        <div className="counterBox">
            <div className="clock">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div> 
            <div className="one">{props.digitOne}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000) % 10;
    const three = Math.floor(counter/100) % 10;
    const two = Math.floor(counter/10) % 10;
    const one = Math.floor(counter/1) % 10;
    console.log(four, three, two, one);
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.querySelector('#app')
    );
}, 1000);
