import React, { Component } from 'react'
import BT1ProductList from './BT1ProductList'

export default class BT1ProductListIP extends Component {
    render() {
        return (
            <div className="bg-dark text-light container-fluid">
                <h1 className="display-4 text-center">BEST SMARTPHONE</h1>
                <div className="row text-dark">
                    <div className="col-3">
                        <BT1ProductList />
                    </div>
                    <div className="col-3">
                        <BT1ProductList />
                    </div>
                    <div className="col-3">
                        <BT1ProductList />
                    </div>
                    <div className="col-3">
                        <BT1ProductList />
                    </div>
                </div>
            </div>

        )
    }
}
