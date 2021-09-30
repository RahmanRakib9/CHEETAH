import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
     width: '700px',
     height: '700px'
};

const center = {
     lat: 31.231131,
     lng: -84.210426
};

function Gmap() {
     const { isLoaded } = useJsApiLoader({
          id: 'pk.eyJ1IjoicmFraWI5IiwiYSI6ImNrdTc5ZnM4czI2MWMyb28xN3IxZjZybXoifQ.wuAKF3BUssizCXnAM-NZ2g',
          // googleMapsApiKey: ""
     })

     const [map, setMap] = React.useState(null)

     const onLoad = React.useCallback(function callback(map) {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
          setMap(map)
     }, [])

     const onUnmount = React.useCallback(function callback(map) {
          setMap(null)
     }, [])

     return isLoaded ? (
          <GoogleMap
               mapContainerStyle={containerStyle}
               center={center}
               zoom={10}
               onLoad={onLoad}
               onUnmount={onUnmount}
          >
               { /* Child components, such as markers, info windows, etc. */}
               <></>
          </GoogleMap>
     ) : <></>
}

export default React.memo(Gmap)