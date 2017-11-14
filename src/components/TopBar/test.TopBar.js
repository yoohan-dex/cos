import React from 'react'
import { shallow } from 'enzyme'

import TopBar from './TopBar'

describe('TopBar', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<TopBar {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})