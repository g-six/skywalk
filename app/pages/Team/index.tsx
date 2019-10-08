import React, { lazy, Suspense } from 'react'
import './styles.scss'

const PageComponent = lazy(() => import('./page'))

const renderLoader = () => <p>Loading...</p>

export const OurTeam = () => (<Suspense fallback={renderLoader()}>
  <PageComponent />
</Suspense>)