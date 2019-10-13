import React, { lazy, Suspense } from 'react'
import './styles.scss'

const BannerComponent = lazy(() => import(/* talent-banner */ './page'))
const ServicesComponent = lazy(() => import(/* talent-services */ './services'))
const ManyThings = lazy(() => import(/* talent-many */ './many-things'))
const HopOnCall = lazy(() => import(/* talent-hop-on-call */ './hop-on-call'))

const renderLoader = () => <p>Loading...</p>

export const TalentSolutions = () => (
  <Suspense fallback={renderLoader()}>
    <BannerComponent />
    <ServicesComponent />
    <ManyThings />
    <HopOnCall />
  </Suspense>
)
