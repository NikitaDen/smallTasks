import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function App() {
    let [func, setFunc] = useState({scrollPage: () => {}});

    const subscribe = (observer) => {
        setFunc(observer);
    };

    window.addEventListener('scroll', () => {
        func.scrollPage();
    });

    // const Map = () => {
    //     return (
    //         <GoogleMap defaultZoom={10} defaultCenter={{lat: 53.904541, lng: 27.561523}}>
    //
    //         </GoogleMap>
    //     )
    // };
    //
    // const WrappedMap = withScriptjs(withGoogleMap(Map));


    return (
        <div className="App">
            {/*<Map/>*/}
            <Button subscribe={subscribe}/>
        </div>
    );
}

export default App;
