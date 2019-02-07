import React from 'react'
import { shallow } from 'enzyme'
import  Drawer from '../Drawer'


describe('Drawer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Drawer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call changeDrawerDisplayState on click of menu', () => {
    const spy = jest.spyOn(wrapper.instance(), 'changeDrawerDisplayState')
    wrapper.instance().forceUpdate()
    wrapper.find('i').simulate('click', {
      preventDefault: () => {}
    })

    expect(spy).toHaveBeenCalled()
  })

  it('should set state of showDrawer on click', () => {
    const mockEvent = {
      preventDefault: () => {}
    }
    wrapper.instance().changeDrawerDisplayState(mockEvent)
    expect(wrapper.instance().state.showDrawer).toEqual(true)
  })

  it('should toggle the drawer class', () => {
    wrapper.instance().setState({ showDrawer: true})
    expect(wrapper.find('.drawer-view').length).toEqual(1)
  })

  it('should toggle the tab class', () => {
    wrapper.instance().setState({ showDrawer: true})
    expect(wrapper.find('.tab-view').length).toEqual(1)
  })

  it('should toggle the mock sidebar class', () => {
    wrapper.instance().setState({ showDrawer: true})
    expect(wrapper.find('.mock-sidebar-view').length).toEqual(1)
  })
})