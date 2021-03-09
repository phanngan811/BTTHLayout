import React, { Component } from 'react'
import BTTHProductItem from './BTTHProductItem'

export default class BTTHProductsList extends Component {
    render() {
        return (
            <div className=" container-fluid">
                
                <div className="row ">
                    <div className="  col-md-3 ">
                        <BTTHProductItem />
                    </div>
                    <div className="  col-md-3">
                        <BTTHProductItem />
                    </div>
                    <div className=" col-md-3">
                        <BTTHProductItem />
                    </div>
                    <div className=" col-md-3">
                        <BTTHProductItem />
                    </div>
            
                </div>
            </div>
        )
    }
}

