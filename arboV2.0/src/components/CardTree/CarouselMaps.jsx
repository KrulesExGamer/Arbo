import React from 'react'
import GMaps from '../../services/GMaps'
import Carousel from '../Carousel'

function CarouselMaps({ tree }) {
    return (
        <div className='row'>
            <div className='col'>
                <Carousel
                    id='idCarouselTreeView'
                    height=''
                    width=''
                    archives={tree.images} />
            </div>

            <div className='col-6'>
                {/* Tamanho sugerido: 420px x 226px*/}
                <GMaps
                    height='226px'
                    width='auto'
                    initialCenter={[tree.lat, tree.long]}
                    markers={[{ lat: tree.lat, lng: tree.long }]}
                    couldChange={false} />
            </div>
        </div>
    )
}

export default CarouselMaps