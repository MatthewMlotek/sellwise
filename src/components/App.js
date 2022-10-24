import React from 'react';
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import TopBarNav from './TopBarNav';
import PageNotFound from './PageNotFound';
import HelloContainer from './HelloContainer';
import OfferContainer from './OfferContainer';
import AdditionalServicesContainer from './AdditionalServicesContainer';
import IndustriesContainer from './IndustriesContainer';
import OpinionsCarousel from './OpinionsCarousel';
import CompaniesContainer from './CompaniesContainer';
import BenefitsContainer from './BenefitsContainer';
import ConsultationContainer from './ConsultationContainer';
import ContactContainer from './ContactContainer';
import FooterContainer from './FooterContainer';
import HelloSvgComponent from './HelloSvgComponent'

import MeetUs from './o-nas/MeetUs';
import AboutUs from './o-nas/AboutUs';
import Team from './o-nas/Team';
import ProjectsResults from './o-nas/ProjectsResults';

import CaseStudyResults from './caseStudy/CaseStudyResults';

import ServicesDoradztwoContainer from './doradztwo/ServicesDoradztwoContainer';
import HeaderSzkolenieOtwarte from './szkoleniaOtwarte/HeaderSzkolenieOtwarte';
import TargetContainer from './szkoleniaOtwarte/TargetContainer';
import InfoContainer from './szkoleniaOtwarte/InfoContainer';
import LeaderContainer from './szkoleniaOtwarte/LeaderContainer';
import YoutubeContainer from './szkoleniaOtwarte/YoutubeContainer';
import DifferencesContainer from './szkoleniaOtwarte/DifferencesContainer';
import SzkolenieInfo from './szkoleniaOtwarte/SzkolenieInfo';
import SzkolenieCarousel from './szkoleniaOtwarte/SzkolenieCarousel';

import RekrutacjaCarousel from './RekrutacjaHandlowcow/RekrutacjaCarousel';
import RekrutacjaHelloContainer from './RekrutacjaHandlowcow/RekrutacjaHelloContainer';
import RekrutacjaForm from './RekrutacjaHandlowcow/RekrutacjaForm';
import RekrutacjaTeam from './RekrutacjaHandlowcow/RekrutacjaTeam';
import HireWiseContainer from './RekrutacjaHandlowcow/HireWiseContainer';
import ArticlesContainer from './artykuly/ArticlesContainer';
import ArticlePodcast from './artykuly/ArticlePodcast';
import PodcastMainContainer from './Podcast/PodcastMainContainer';
import PodcastEpisodesContainer from './Podcast/PodcastEpisodesContainer';

import QuestionsContainer from './DarmowaKonsultacja/QuestionsContainer';
import KonsultacjaMainContainer from './DarmowaKonsultacja/KonsultacjaMainContainer';
import KonsultacjaFAQ from './DarmowaKonsultacja/KonsultacjaFAQ';


const Main = () => (
      <>
        <HelloContainer title="Rozwój sprzedaży to " titleStrong="proces" contentLeft="DORADZTWO SZKOLENIA I REKRUTACJA" contentRight="Wierzymy, że prawdziwy rozwój sprzedaży to proces, dlatego pracujemy od A do Z. Przeprowadzamy audyt, wspólnie z klientem przygotowujemy strategię, procesy i wdrażamy narzędzia IT, a na koniec – profesjonalnie szkolimy i uzupełniamy zespół." svg={<HelloSvgComponent/>}/>
        <OfferContainer/>
        <AdditionalServicesContainer/>
        <IndustriesContainer/>
        <OpinionsCarousel />
        <CompaniesContainer/>
        <BenefitsContainer/>
        <ConsultationContainer />
        <ContactContainer />
        <FooterContainer/>
      </>
)
const ONas = () => (
  <>
        <MeetUs/>
        <AboutUs/>
        <Team/>
        <ProjectsResults/>
        <ConsultationContainer />
        <ContactContainer />
        <FooterContainer/>
  </>
)
const CaseStudy = () => (
  <>      <HelloContainer title="Case study - efekty współpracy z naszymi klientami" titleStrong="" contentRight="W tej kategorii poznasz rekomendacje naszych klientów na temat współpracy z naszą firmą. Sprawdź jakie efekty uzyskały firmy współpracując z naszymi konsultantami." svg={<img src='https://www.sellwise.pl/wp-content/uploads/2021/08/ilustracja_case-study.png' alt='grafika' className='img-fluid'/>}/>
        <CaseStudyResults />
        <ConsultationContainer />
        <ContactContainer />
        <FooterContainer/>
  </>
)
const DoradztwoB2B = () => (
  <>
  
        <ServicesDoradztwoContainer/>
        <ConsultationContainer />
        <ContactContainer />
        <FooterContainer/>
  </>
)
const SzkoleniaOtwarte = () => (
      <>
        <HeaderSzkolenieOtwarte/>
        <TargetContainer/>
        <InfoContainer />
        <LeaderContainer />
        <YoutubeContainer/>
        <DifferencesContainer/>
        <SzkolenieInfo/>
        <SzkolenieCarousel/>
        <ContactContainer />
        <FooterContainer/>
      </>  
)
const RekrutacjaHandlowcow = () => (
    <>

        <RekrutacjaHelloContainer/>
        <RekrutacjaForm/>
        <RekrutacjaTeam/>
        <HireWiseContainer/>

        <RekrutacjaCarousel/>
        <CompaniesContainer/>
        <ContactContainer />
        <FooterContainer/>
    </>
)
const Artykuly = () => (
  <>
  <HelloContainer title="Artykuły o sprzedaży i zarządzaniu w firmach B2B" titleStrong="" contentRight="Na naszym blogu przeczytasz o rozwijaniu sprzedaży, zarządzaniu, najnowszych technologiach i nie tylko. Nierzadko pojawia się też recenzja lub ranking." svg={<img src='https://www.sellwise.pl/wp-content/uploads/2021/08/ilustracja_artyku%C5%82.png' alt='grafika' className='img-fluid'/>}/>
  <ArticlesContainer/>
  <ArticlePodcast/>
  <FooterContainer/>
  </>
)
const Podcast = () => (
  <>
  <HelloContainer title="Podcast Nowoczesna Sprzedaż i Marketing" titleStrong="" contentRight="Podcast NSM to wynik misji Sellwise. Chcemy profesjonalizować sprzedaż i marketing B2B w Polsce poprzez szkolenia, doradztwo i … Podcast." svg={<img src='https://www.sellwise.pl/wp-content/uploads/2020/04/ilustracja_podcast_2-1.svg' alt='grafika' className='img-fluid'/>}/>
  <PodcastMainContainer/>
  <PodcastEpisodesContainer/>
  <ContactContainer/>
  <FooterContainer/>
  </>
)
const Konsultacja = () => (
  <>
  <KonsultacjaMainContainer/>
  <QuestionsContainer/>
  <KonsultacjaFAQ/>
  <CompaniesContainer/>
  <ContactContainer />
  <FooterContainer/>
  </>
)


function App() {
  return (
    <div className="App">
      
      <Router>
      <TopBarNav />
      

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/o-nas' element={<ONas/>}/>
        <Route path='/case-study' element={<CaseStudy/>}/>
        <Route path='/doradztwo-w-sprzedazy-i-marketingu-b2b' element={<DoradztwoB2B/>}/>
        <Route path='/szkolenia-otwarte' element={<SzkoleniaOtwarte/>}/>
        <Route path='/outsourcing-rekrutacji-handlowcow' element={<RekrutacjaHandlowcow/>}/>
        <Route path='/artykuly' element={<Artykuly/>}/>
        <Route path='/nsm' element={<Podcast/>}/>
        <Route path='/darmowa-konsultacja' element={<Konsultacja/>}/>
      </Routes>

      
      </Router>
    </div>
  );
}

export default App;
