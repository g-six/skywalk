import React, { lazy, Suspense } from 'react'
const Panel = lazy(() => import(/* console-panel */ './panel'))

const renderLoader = () => <p>Loading...</p>

export const Console = () => (
  <Suspense fallback={renderLoader()}>
    <div id="Console" className="with-header">
      <Panel />
    </div>
  </Suspense>
)

export default Console