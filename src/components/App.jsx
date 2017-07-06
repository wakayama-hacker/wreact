import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class App extends React.Component {

  /**
   * propTypes
   * @type {object}
   */
   static propTypes = {
       title: PropTypes.string,
   }

   /**
    * defaultProps
    * @type {object}
    */
    static defaultProps = {
      title: 'WReact SPA template',
    }

    /**
     * check/uncheck a todo at given index
     * @param  {number} index index of todo
     * @param  {boolean} check check or uncheck
     * @return {void}
     */
    checkTodo(index,check) {
      const newTodos = [...this.state.todos]
      newTodos[index].checked = check

      this.setState({
        ...this.state,
        todos: newTodos,
      })
    }

    /**
     * delete a todo at given index
     * @param  {number} index index of todo
     * @return {void}
     */
    deleteTodo(index) {
      const newTodos = [...this.state.todos]
      newTodos.splice(index, 1)

      this.setState({
        ...this.state,
        todos: newTodos,
      })
    }

    /**
     * add a todo
     * @param  {string} content new todo content
     * @return {void}
     */
    addTodo(content) {
      const newTodos = [...this.state.todos]
      newTodos.push({ content, checked: false })

      this.setState({
        ...this.state,
        todos: newTodos,
        newTodoContent: '',
      })
    }

    updateNewTodo(content) {
      this.setState({
        ...this.state,
        newTodoContent: content
      })
    }

    /**
     * constructor
     * @param  {object} props React props.
     * @return {void}
     */
    constructor(props) {
      super(props)

      this.state = {
        todos: [
          { content: 'apple', checked: false },
          { content: 'banana', checked: true },
          { content: 'orange', checked: false },
        ],
        newTodoContent: '',
      }
    }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const self = this

    const {
      todos,
      newTodoContent,
    } = self.state

    const {
      title,
    } = self.props

    return (
      <div>
        <h1>{ title }</h1>
        <ul className="todo-items">
          {
            todos.map((todo, index) => {

              return (
                <TodoItem
                  key={ `todo-item-${index}` }
                  index={ index }
                  todo={ todo }
                  onChange={ value => self.checkTodo(index, value) }
                  onDeleteClick ={ () => self.deleteTodo(index) }
                />
              )
            })
          }
        </ul>
        <div>
          <label htmlFor="input-new-todo">
            { 'New Todo:' }
          </label>
          <input
            id={ 'input-new-todo' }
            value={ newTodoContent }
            placeholder={ 'New Todo...' }
            onChange={ e => self.updateNewTodo(e.target.value) }
            onBlur={ () => self.addTodo(newTodoContent) }
          />
        </div>
      </div>
    )
  }
}
