import React, {useEffect, useState} from "react";

const Button = (props) => {
    let [visibility, setVisibility] =  useState(false);

    useEffect(() => {
        props.subscribe({scrollPage: setButtonVisibility});
    }, [visibility]);

    const setButtonVisibility = () => {
        if (window.pageYOffset >= 200) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    const scrollPageToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button onClick={scrollPageToTop} style={visibility ? {display: 'block'} : {display: 'none'}}>Scroll</button>
    )
};

export default Button;