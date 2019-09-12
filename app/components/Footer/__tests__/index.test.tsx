import { render } from '@testing-library/react'

import { shallow } from 'enzyme'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router'
import Component from '../'

interface AnyObject {
  [key: string]: string | AnyObject
}

describe('Header component', () => {
  const history = createMemoryHistory()

  it('should render as expected', () => {
    const props: AnyObject = {}
    const comp = shallow(<Component {...props} />)
    expect(comp.find('footer')).toHaveLength(1)
  })

  it('should footer links', async () => {
    const comp = render(
      <Router history={history}>
        <Component />
      </Router>,
    )

    const link = await comp.findByText('IdeaRobin')
    expect(link).toBeDefined()
  })
})
