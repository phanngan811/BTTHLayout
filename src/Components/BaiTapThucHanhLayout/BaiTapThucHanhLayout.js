import React, { Component } from 'react'
import BTTHCarousel from './BTTHCarousel'
import BTTHContent from './BTTHContent'
import BTTHFooter from './BTTHFooter'
import BTTHHeader from './BTTHHeader'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTTHHeader />
                <br />
                <BTTHContent />

                <BTTHFooter />
                
            </div>
           

        )
    }
}
