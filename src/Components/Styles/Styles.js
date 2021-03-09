import React, { Component } from 'react'
// cachs 1: import dduowngf daanx css tuwf file component
// import './Styles.css';
//cachs 2: import css taij
import style from './styles.module.css'


export default class Styles extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-red">ken</p>
                <p className={style.textGreen}>chicken</p>
                <p className={`${style['textGreen']} ${style['bg-black']} display-4`}>chicken</p>

                <section style={{
                    backgroundColor:"black",
                    color:"pink"
                }}>hiken</section>
            </div>
        )
    }
}
