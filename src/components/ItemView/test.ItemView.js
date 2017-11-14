import React from 'react'
import { shallow } from 'enzyme'

import ItemView from './ItemView'

describe('ItemView', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ItemView {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})