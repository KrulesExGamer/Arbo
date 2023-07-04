import React from 'react'
import CardTree from '../../components/CardTree'

const tree1 = {
  codigo: '54623456',
  name: 'Ipê Amarelo',
  especie: 'Handroanthus albus',
  insertBy: 'Carlos Filipe de Castro Lemos',
  lat: -22.008005058347152,
  long: -47.89603959446731,
  porte: "Médio porte (10 a 20 metros)",
  diametro: "1.0 a 2.0 metros",
  ameaca: "Ameaça Baixa",
  radicula: "Pivotante",
  copa: "Copas Arredondadas",
  idade: "20 a 30 anos",
  images: [
    'images/arb1.jpg',
    'images/arb2.jpg',
    'images/arb3.jpg',
  ],
  risks: [
    "Atropelamentos ou colisões com árvores",
    "Construção de estradas ou edificações",
    "Atropelamentos ou colisões com árvores",
    "Construção de estradas ou edificações",
    "Atropelamentos ou colisões com árvores",
    "Construção de estradas ou edificações",
  ]
}

const tree2 = {
  codigo: '54623457',
  name: 'Ipê Rosa',
  especie: 'Handroanthus albus',
  insertBy: 'Handroanthus heptaphyllus',
  lat: -22.008617693279277,
  long: -47.89662855632491,
  porte: "Grande Porte (20 ou mais metros)",
  diametro: "1.0 a 2.0 metros",
  ameaca: "Ameaça Baixa",
  radicula: "Pivotante",
  copa: "Copas Arredondadas",
  idade: "40 a 50 anos",
  images: [
    'images/eesc1.jpeg',
    'images/eesc2.jpeg',
    'images/eesc3.jpeg',
  ],
  risks: [
    "Podas excessivas ou inadequadas",
    "Ataques de pragas",
    "Desmatamento"
  ]
}

function TreeParkInventory() {
  return (
    <div className='pageRegisterRisk boxContent'>
        <h1>Inventário do Parque Arbóreo</h1>
        <CardTree tree={tree2} />
        <CardTree tree={tree1} />
    </div>
  )
}

export default TreeParkInventory