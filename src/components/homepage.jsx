import React from 'react'
import Hero from './hero'
import Homepagecourse from "./homepage/homepagecoursesmenu/homepagecourse"
import LearningPath from './homepage/learningpathhomepage/learningpathhp'
import SkillfymeFeatures from './homepage/skillfymefeaturehp/skillfymefeatreshp'
import CompanyLogos from './homepage/alumnicompanies/alumnicompanies'
import TestimonialCarousel from './homepage/testimonial/testimonial'
import TrendingTools from './homepage/TrendingTools/trendingTools'

const Homepage = () => {
  return (
    <>
    <Hero />
    <Homepagecourse />
    <LearningPath />
    <SkillfymeFeatures />
    <CompanyLogos />
    <TestimonialCarousel isHomepage={true}/>
    <TrendingTools />
    </>
  )
}

export default Homepage