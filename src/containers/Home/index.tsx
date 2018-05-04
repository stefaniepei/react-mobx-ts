/* tslint:disable no-unused-variable*/
import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import * as echarts from 'echarts'

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

  componentDidMount() {
    let myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    })
  }

  componentWillReact() {
    console.log('componentWillReact', this)
  }

  render() {
    const me = this
    const { add, count } = this.props.Base

    return (
      <div className='home-container'>

        <div id='main' style={{ width: 400, height: 400 }}>
          Home {count}
        </div>
        <Button onClick={add} type='primary'>+1</Button>
        <Button onClick={this.addTest} type='danger'>Test</Button>
        <div style={{ paddingTop: '20px', background: '#fff' }}>
          <ul>
            <li><Link to='/login'>login {count}</Link></li>

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
