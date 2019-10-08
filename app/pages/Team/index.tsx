import React, { lazy, Suspense } from 'react'
import './styles.scss'

const BannerComponent = lazy(() => import('./page'))
const MissionComponent = lazy(() => import('./mission'))
const VisionComponent = lazy(() => import('./vision'))

const renderLoader = () => <p>Loading...</p>

export const OurTeam = () => (<Suspense fallback={renderLoader()}>
  <BannerComponent />
  <VisionComponent />
  <MissionComponent />
</Suspense>)