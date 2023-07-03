import React from 'react'

function Carousel({ id, archives }) {

    let first = true
    archives = [
        'images/arb1.jpg',
        'images/arb2.jpg',
        'images/arb3.jpg',
    ]

    return (
        <div id={"carousel"+id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {archives.map(name => {
                    if (first) {
                        first = false
                        return (
                            <div className="carousel-item active carouselSizeLimits">
                                <img src={name} className="d-block carouselSizeLimits" alt="Arvore" />
                            </div>)
                    }
                    return (
                        <div className="carousel-item carouselSizeLimits">
                            <img src={name} className="d-block carouselSizeLimits" alt="Arvore" />
                        </div>)
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"#carousel"+id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={"#carousel"+id} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próxima</span>
            </button>
        </div>
    )
}
export default Carousel