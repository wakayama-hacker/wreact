import React from 'react'
import PropTypes from 'prop-types'

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
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const {
      title,
    } = this.props

    return (
      <div>
        <h1>{ title }</h1>
      </div>
    )
  }
}
