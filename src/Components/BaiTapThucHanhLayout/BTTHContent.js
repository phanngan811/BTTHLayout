import React, { Component } from 'react'
import BTTHCarousel from './BTTHCarousel'
import BTTHProductsList from './BTTHProductsList'

export default class BTTHContent extends Component {
    render() {
        return (
            <div>
                <BTTHCarousel />
                <BTTHProductsList />
            </div>
        )
    }
}
