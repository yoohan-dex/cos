import React from 'react'
import { shallow } from 'enzyme'

import AppBottomBar from './AppBottomBar'

describe('AppBottomBar', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<AppBottomBar {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})