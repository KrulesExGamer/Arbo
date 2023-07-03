import React from 'react'
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route
} from 'react-router-dom'

import Authentication from '../pages/Authentication'
import Contact from '../pages/Contact'
import ErrorPage from '../pages/Error'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Layer from '../pages/Layer'
import ReportSituation from '../pages/ReportSituation'

import Users from '../pages/Users'
import Professional from '../pages/Professional'

import RegisterTree from '../pages/RegisterTree'
import Inventory from '../pages/TreeParkInventory'

import RegisterRisk from '../pages/RegisterRisk'
import RiskSituation from '../pages/RiskSituation'



const elements = createRoutesFromElements(

<Route path='/' element={<Layer />} errorElement={<ErrorPage />}>

      {/* Rotas Públicas */}
      <Route index element={<Landing />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='*' element={<ErrorPage />} />
      <Route path='error' element={<ErrorPage />} />

      {/* Rotas Privadas do Administrador*/}
      <Route path='layer' element={<Layer />} />
      <Route path='home' element={<Home />} />
      <Route path='landing' element={<Landing />} />
      <Route path='contatos' element={<Contact />} />
      <Route path='ocorrencias' element={<ReportSituation />} />
      
      {/* Rotas Privadas do Administrador*/}
      <Route path='users' element={<Users />} />
      <Route path='professionals' element={<Professional />} />
      <Route path='register/tree' element={<RegisterTree />} />
      <Route path='inventory' element={<Inventory />} />
      <Route path='register/risk' element={<RegisterRisk />} />
      <Route path='risksituation' element={<RiskSituation />} />


   </Route>
)

const Router = createBrowserRouter(elements)

export default Router