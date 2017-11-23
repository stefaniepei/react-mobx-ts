/* tslint:disable no-unused-variable*/
import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

/** 所有需用到的组件 **/

interface props {
  Base: any
}

// @inject('RouterStore')
@inject('Base')
@observer
class Home extends React.Component<props, any> {

  constructor(props: props) {
    super(props)
  }

  componentWillReact() {
    console.log('componentWillReact', this)
  }

  render() {
    const me = this
    const { add, count } = this.props.Base

    return (
      <div className='home-container'>
        <div className='head'>
          Home {count}
        </div>
        <Button onClick={add} type='primary'>+1</Button>
        <Button onClick={this.addTest} type='danger'>Test</Button>
        <div style={{ paddingTop: '20px', background: '#fff' }}>
          <ul>
            <li><Link to='/login'>login</Link></li>

          </ul>
        </div>
      </div>
    )
  }

  addTest() {
    console.log('假的+1操作!')
  }
}

export default Home
