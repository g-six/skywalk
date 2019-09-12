import * as React from 'react'
import { promiseTrackerHoc } from 'react-promise-tracker'

import { Loader } from '@components/Loader'

interface SpinnerProps {
  in_progress?: boolean
}

const InnerLoadingSpinerComponent = (props: SpinnerProps) => {
  if (props.in_progress === true) {
    return (
      <div className="loading">
        <Loader />
      </div>
    )
  } else {
    return null
  }
}

export const LoadingSpinnerComponent = promiseTrackerHoc(
  InnerLoadingSpinerComponent,
)
