import React from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends React.Component {

  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    todo          : PropTypes.object,
    index         : PropTypes.number.isRequired,
    onChange      : PropTypes.func,
    onDeleteClick : PropTypes.func,
  }

 /**
  * defaultProps
  * @type {object}
  */
  static defaultProps = {
    todo          : { content: '', checked: false },
    onChange      : noop => noop,
    onDeleteClick : noop => noop,
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const self = this

    const {
      todo,
      index,
      onChange,
      onDeleteClick,
    } = self.props

    const labelStyle = {
      textDecoration: todo.checked ? 'line-through' : 'none'
    }

    return (
      <li
        key={ `todo-${index}` }
        style={ { listStyle: 'none' } }
      >
        <input
          type="checkbox"
          id={ `todo-${index}` }
          checked={ todo.checked }
          onChange={ () => onChange(!todo.checked) }
        />
        <label
          htmlFor={ `todo-${index}` }
          style={ labelStyle }
        >
          { todo.content }
        </label>
        {
          todo.checked ? (
            <button
              style={ { marginLeft: '1em' } }
              onClick={ () => onDeleteClick(index) }
            >
              { 'delete' }
            </button>
          ) : null
        }
      </li>
    )
  }
}
