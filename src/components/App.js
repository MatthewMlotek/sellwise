import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBarNav from './TopBarNav';
import HelloContainer from './HelloContainer';
import OfferContainer from './OfferContainer';
import AdditionalServicesContainer from './AdditionalServicesContainer';
import IndustriesContainer from './IndustriesContainer';
import OpinionsCarousel from './OpinionsCarousel';
import CompaniesContainer from './CompaniesContainer';
import BenefitsContainer from './BenefitsContainer';


function App() {
  return (
    <div className="App">
      
      <TopBarNav />
      <HelloContainer/>
      <OfferContainer/>
      <AdditionalServicesContainer/>
      <IndustriesContainer/>
      <OpinionsCarousel />
      <CompaniesContainer/>
      <BenefitsContainer/>
     
    </div>
  );
}

export default App;
