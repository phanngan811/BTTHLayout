import React, { Component } from 'react'

export default class Databinding extends Component {

    sinhVien = {
        ma:1,
        ten:"Ken",

    }


    renderSinhVien =() =>{
        let sinhVien = {
            ma:1,
            ten:"Ken",
            hinhAnh:"https://picsum.photos/100/100"
        };

        return <div className="card text-left">
        <img className="card-img-top" src={sinhVien.hinhAnh} alt={sinhVien.hinhAnh} />
        <div className="card-body">
            <h4 className="card-title">{sinhVien.ten}</h4>
            <p className="card-text">{sinhVien.ten}</p>
        </div>
    </div>
    }


    //databinding laf cow chees hieenr thij leen thanhf phanaf giao dieenj
    render() {
        let name = "ken";
        let product = {
            id:1,
            name: 'IphoneX',
            price:100,
            img:"https://picsum.photos/100/100"
        }


        let renderProduct =() =>{
            //Khi nội dung return là component thì phải đc bao phut bới 1 thẻ
            return <div className="container">
                {this.renderSinhVien()}
                <ul>
                    <li>Mã số sinh viện: {this.sinhVien.ma}</li> 
                    <li>Ten sinh viện: {this.sinhVien.ten}</li> 

                 </ul>
                <p>{product.name} </p>
            </div>
        }
        return (
            <div>
                <p id="title">{name}</p>
                <br />
                
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.name}</p>
                    </div>
                </div>
            {renderProduct()}
            </div>
        )
    }
}

