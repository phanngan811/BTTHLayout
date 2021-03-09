import React, { Component } from 'react'
import BT1Footer from './BT1Footer'
import BT1Header from './BT1Header'
import BT1ProductListIP from './BT1ProductListIP'
import BT1ProductListMac from './BT1ProductListMac'
import BT1Slider from './BT1Slider'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <BT1Header />
                <BT1Slider />
                <BT1ProductListIP />
                <BT1ProductListMac />
                <BT1Footer />
            </div>
        )
    }
}
