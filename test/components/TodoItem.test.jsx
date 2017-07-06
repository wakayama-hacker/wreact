import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import TodoItem from 'components/TodoItem'

describe('<TodoItem />', () => {
  it('should render todo.content', () => {
    const wrapper = shallow(<TodoItem
      index={ 0 }
      todo={ { content: 'the content' } }
    />)
    expect(wrapper.text()).to.include('the content')
  })

  it('should render checkbox', () => {
    const wrapper = shallow(<TodoItem
      index={ 0 }
      todo={ { content: 'the content', checked: true } }
    />)
    const checkbox = wrapper.find('input')
    expect(checkbox).to.have.length(1)
    expect(checkbox.node.props.type).to.equal('checkbox')
    expect(checkbox.node.props.checked).to.be.true
  })

  it('should call onChange when changed', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<TodoItem
      index={ 0 }
      todo={ { content: 'the content', checked: true } }
      onChange={ spy }
    />)
    const checkbox = wrapper.find('input')
    // https://github.com/airbnb/enzyme/issues/216#issuecomment-191114107
    checkbox.simulate('change', { target: { checked: false } })
    expect(spy.calledWith(false)).to.be.true
  })

  it('should call onDeleteClick when delete button clicked', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<TodoItem
      index={ 0 }
      todo={ { content: 'the content', checked: true } }
      onDeleteClick={ spy }
    />)
    const deleteButton = wrapper.find('button')
    deleteButton.simulate('click')
    expect(spy.calledWith(0)).to.be.true
  })
})
