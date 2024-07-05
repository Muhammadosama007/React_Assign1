import React from 'react'
import Preloader from './Preloader'
import GetProButton from './GetProButton'
import Header from './Header'
import SliderArea from './SliderArea'
import ScheduleArea from './ScheduleArea'
import Features from './Features'
import FunFacts from './FunFacts'
import WhyToChoose from './WhyToChoose'
import EmergencyCall from './EmergencyCall'
import Portfolio from './Portfolio'
import Services from './Services'
import PricingTable from './PricingTable'
import BlogArea from './BlogArea'
import Clients from './Clients'
import Appointment from './Appointment'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

function Body() {
  return (
    <>
{/* <Preloader/> */}
<GetProButton/>
<Header/>
<SliderArea/> 
<ScheduleArea/>
<Features/> 
<FunFacts/>
<WhyToChoose/>
<EmergencyCall/>
<Portfolio/>
<Services/>
<PricingTable/>
<BlogArea/>
<Clients/>
<Appointment/>
<NewsLetter/>
<Footer/>
    </>
  )
}

export default Body