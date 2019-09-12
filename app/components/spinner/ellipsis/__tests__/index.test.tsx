import * as React from 'react'
import { render } from '@testing-library/react'
import Ellipsis from '../'

describe('Ellipsis', () => {
  it('should show loading spinner', () => {
    const { container } = render(<Ellipsis dark={false} />)
    expect(container.querySelectorAll('.lds-ellipsis div')).toHaveLength(4)
  })
})
