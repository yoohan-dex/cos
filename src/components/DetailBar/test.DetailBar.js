import React from 'react'
import { shallow } from 'enzyme'

import DetailBar from './DetailBar'

describe('DetailBar', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<DetailBar {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})