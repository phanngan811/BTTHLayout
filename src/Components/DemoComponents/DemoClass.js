import React, { Component } from 'react'

export default class DemoClass extends Component {
    
    //phương thức render sẽ tự kích hoạt khi mình sửa dụng thẻ comnponent
    
    render() {
        return (
            <div>
                <div className="container bg-dark p-5 text-light">
                    <p className= " display-4 pt-2">Titile</p>
                    <p>content</p>
                </div>
            </div>
        )
    }
}
