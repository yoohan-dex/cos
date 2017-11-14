import React from 'react'
import { shallow } from 'enzyme'

import ItemRow from './ItemRow'

describe('ItemRow', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ItemRow {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})