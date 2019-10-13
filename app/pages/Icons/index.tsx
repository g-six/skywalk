import React, { lazy, Suspense } from 'react'
const Iconography = lazy(() => import(/* icons-iconography */ './iconography'))

const renderLoader = () => <p>Loading...</p>

export const IconPage = () => (
  <Suspense fallback={renderLoader()}>
    <div id="Icons" className="with-header">
      <Iconography />
    </div>
  </Suspense>
)

export default IconPage