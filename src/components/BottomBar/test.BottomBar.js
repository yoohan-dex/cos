import React from 'react'
import { shallow } from 'enzyme'

import BottomBar from './BottomBar'

describe('BottomBar', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<BottomBar {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})