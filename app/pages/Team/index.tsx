import React, { lazy, Suspense } from 'react'
import './styles.scss'

const BannerComponent = lazy(() => import(/* team-banner */ './page'))
const BoardComponent = lazy(() => import(/* team-board */ './board'))
const MissionComponent = lazy(() => import(/* team-mission */ './mission'))
const TeamComponent = lazy(() => import(/* team-people */ './team'))
const ValuesComponent = lazy(() => import(/* team-values */ './values'))
const VisionComponent = lazy(() => import(/* team-vision */ './vision'))

const renderLoader = () => <p>Loading...</p>

export const OurTeam = () => (
  <Suspense fallback={renderLoader()}>
    <BannerComponent />
    <TeamComponent />
    <VisionComponent />
    <BoardComponent />
    <MissionComponent />
    <ValuesComponent />
  </Suspense>
)
