import React from 'react'
import CarouselMaps from './CarouselMaps'
import CardTreeFeatures from './CardTreeFeatures'
import CardTreeRisks from './CardTreeRisks'
import CardQrCode from './CardTreeQRCode'

function TreeCard({ tree }) {

  return (
      <div className='container container-tree-view'>
        <h1>{tree.name} ({tree.codigo})</h1>
        <CarouselMaps tree={tree}/>
        <div className="row">
          <div className="col-6 text-start">
            <CardQrCode tree={tree}/>
            <CardTreeFeatures tree={tree}/>
          </div>
          <div className="col-6 text-start">
            <CardTreeRisks tree={tree}/>
          </div>
        </div>
      </div>
  )
}

export default TreeCard
