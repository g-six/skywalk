import React, { lazy, Suspense } from 'react'
import './styles.scss'

const BannerComponent = lazy(() => import(/* team-banner */ './page'))
const MissionComponent = lazy(() => import(/* team-mission */ './mission'))
const ServicesComponent = lazy(() => import(/* team-people */ './services'))
const ValuesComponent = lazy(() => import(/* team-values */ './values'))
const VisionComponent = lazy(() => import(/* team-vision */ './vision'))

const renderLoader = () => <p>Loading...</p>

export const TalentSolutions = () => (<Suspense fallback={renderLoader()}>
  <BannerComponent />
  <ServicesComponent />
  <VisionComponent />
  <MissionComponent />
  <ValuesComponent />
</Suspense>)