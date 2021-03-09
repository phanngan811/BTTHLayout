import React, { PureComponent } from 'react'

export default class CardProduct extends PureComponent {
    render() {
        return (
            <div >
            <div className="card text-left">
                <img className="card-img-top" src="holder.js/100px180/" alt="123" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
            </div>

        )
    }
}
