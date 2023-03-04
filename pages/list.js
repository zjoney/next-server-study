import React, { Component } from 'react'

class list extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.qingshi.source}</li>
                    <li>{this.props.qingshi.content}</li>
                    <li>{this.props.qingshi.author}</li>
                </ul>
            </div>
        )
    }
}

// 
// export async function getStaticProps(){
export async function getServerSideProps(){
    const res = await fetch('http://127.0.0.1:8001/qingshi')
    const backData = await res.json();
    console.log(backData)
    const qingshi = backData.data;
    return {
        props:{
            qingshi
        }
    }
}

export default list
