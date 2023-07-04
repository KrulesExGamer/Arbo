import React, { useState } from 'react'

import { 
    GoogleMap, 
    useJsApiLoader, 
    Marker 
} from '@react-google-maps/api'

const apiKey = 'AIzaSyCZdI_DHNOwpuH2jisTsavJoStwfO32EXo'

function GMaps({ 
    height, 
    width, 
    markers, 
    initialCenter = [-22.006388, -47.897335],
    handleLat,
    handleLng,
    couldChange = true
    }){

    // Estados do componente
    const [markerInfo, setMarkerInfo] = useState(false)
    const [latitude, setLatitude] = useState(initialCenter[0])
    const [longitude, setLongitude] = useState(initialCenter[1])
    const [mapCenter, setMapCenter] = useState(initialCenter)

    // Atualiza a posição
    function showCoordinates(e) {
        if (!couldChange) return

        let lat = e.latLng.lat()
        let lng = e.latLng.lng()

        if (handleLat) handleLat(lat)
        if (handleLng) handleLng(lng)
        setMarkerInfo(true)
        setLatitude(lat)
        setLongitude(lng)
        setMapCenter([lat, lng])
    }
    
    // Define a chave para utilizar a api
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    })
    
    // Inicializa e monta o mapa
    const center = {lat: mapCenter[0], lng: mapCenter[1]}
    const [map, setMap] = React.useState(null) // eslint-disable-line
    const onLoad = React.useCallback(function callback(map) {setMap(map)}, [])
    const onUnmount = React.useCallback(function callback(map) {setMap(null)}, [])

    // Carrega o mapa
    return isLoaded ? (
        <GoogleMap
            onClick={(e) => showCoordinates(e)}
            mapContainerStyle={{width: width, height: height, border: '3px solid black'}}
            center={center}
            zoom={17}
            onLoad={onLoad}
            options={{
                streetViewControl: false, 
                zoomControl: false, 
                clickableIcons: false, 
                mapTypeId: "satellite",
                mapTypeControl: false}}
            onUnmount={onUnmount}>
            
            { markers && (markers.length > 0) && markers.map(position => <Marker position={position} />)}
            { markerInfo && <Marker position={{lat: latitude, lng: longitude}} />}

        </GoogleMap>
    ) : <></>
}

export default GMaps