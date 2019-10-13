import React, { lazy, Suspense } from 'react'
import './styles.scss'

const BannerComponent = lazy(() => import(/* tech-banner */ './page'))
const ServicesComponent = lazy(() => import(/* tech-services */ './services'))
const Specializations = lazy(() => import(/* tech-many */ './specializations'))
const HopOnCall = lazy(() => import(/* tech-hop-on-call */ './hop-on-call'))

const renderLoader = () => <p>Loading...</p>

export const TechSolutions = () => (
  <Suspense fallback={renderLoader()}>
    <BannerComponent />
    <ServicesComponent />
    <Specializations />
    <HopOnCall />
  </Suspense>
)
