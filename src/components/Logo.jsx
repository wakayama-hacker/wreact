import React from 'react'
import PropTypes from 'prop-types'
import LogoImage from './LogoImage.jsx'

export default class Logo extends React.Component {

  /**
   * propTypes
   * @type {object}
   */
   static propTypes = {
     size: PropTypes.arrayOf(PropTypes.number)
   }

   /**
    * constructor
    * @param  {object} props React props.
    * @return {void}
    */
   constructor(props) {
     super(props)
     this.state = {
       isHovered: false,
       count: 0,
     }
     this.onEnter = this.onEnter.bind(this)
     this.onLeave = this.onLeave.bind(this)
   }

   /**
    * onhover handler
    * @return {void}
    */
   onEnter() {
     this.setState({
       isHovered : true,
       count     : this.state.count + 1,
     })
   }

   /**
    * onLeave handler
    * @return {void}
    */
   onLeave() {
     this.setState({
       isHovered : false,
       count     : this.state.count + 1,
     })
   }

   /**
    * switch color of logo by count num
    * @param  {number} count count num
    * @return {string}       determined color by Hex scheme
    */
   switchColor(count) {
      if (count > 16) {
        return '#F6A623'
      } else if (count > 8) {
        return '#F623A6'
      } else {
        return '#23F6A6'
      }
   }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const { isHovered, count } = this.state

    const [width, height] = this.props.size

    const wrapperStyle = {
      width  : width + 'px',
      height : height + 'px',
    }

    const style = {
      transform          : `rotateY(${isHovered ? 180 : 0}deg`,
      transitionDuration : '.5s',
    }

    return (
      <div>
        <p>{ 'Hover me!' }</p>
        <div
          style={ wrapperStyle }
          onMouseEnter={ this.onEnter }
          onMouseLeave={ this.onLeave }
        >
          <div style={ style }>
            <LogoImage color={ this.switchColor(count) } />
          </div>
        </div>
        <p>{ `Hover and leave count: ${count}` }</p>
      </div>
    )
  }
}
