import React from 'react'
import { shallow } from 'enzyme'

import AppBar from './AppBar'

describe('AppBar', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<AppBar {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})