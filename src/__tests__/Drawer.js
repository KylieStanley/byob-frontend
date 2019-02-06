import React from 'react'
import { shallow } from 'enzyme'
import Drawer from '../Drawer'


describe('Drawer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Drawer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})