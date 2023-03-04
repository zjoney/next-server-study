import {Component} from 'react'

// 需要引入 link 组件 
import Link from 'next/link'

export class about extends Component {
    constructor(){
        super();
        this.state={
            caihong:{content:'你太美'},
        }
    }

    async getsongsi() {
        const res = await fetch('http://127.0.0.1:8001/caihongpi')
        const backData = await res.json();
        console.log(backData)
        const caihong = backData.data;
        console.log(caihong)
        this.setState({
            caihong:caihong
        })
    }

    render() {
        return (
            <div>
                <h3>Class compontent -- About Pages</h3>

                {/* link 中不能有空格 */}
                <Link href="./list"><a href=""> Goto list  </a></Link>
                <br/>
                <button  onClick={()=>this.getsongsi()} >彩虹屁</button>
                <p>{this.state.caihong.content}</p>
            </div>
        )
    }
}

export default about
