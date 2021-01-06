import React, { useState } from 'react';
import './Map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = React.memo((props) => {
    const [lat, setLat] = useState(46.762716);
    const [lng, setLng] = useState(23.5585658);

    const mapStyles = {
        top: "130px",
        height: "60vh",
        width: "100%",
        display: "flex"
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyABLpXZPX35VHVLsTq3iNWQ4F52Kxhm6-E'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={props.defaultCenter}
                onClick={event => {
                    let coords = event.latLng.toString()
                    let res = coords.replace(/[{()}]/g, '').split(',')
                    setLat(parseFloat(res[0].trim()));
                    setLng(parseFloat(res[1].trim()));

                    console.log('this.props.defaultCenter', props.defaultCenter);
                    props.onchange(res);
                }}
            >
                <Marker position={lat ? { lat: lat, lng: lng } : props.defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
})

export default Map;