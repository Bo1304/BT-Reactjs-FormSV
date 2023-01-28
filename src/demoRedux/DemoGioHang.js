//rcc

import React, { Component } from 'react';
import { connect } from 'react-redux';

class DemoGioHang extends Component {
    products = [
        {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },
        {
            id: 2,
            name: "Adidas Prophere Black White",
            alias: "adidas-prophere-black-white",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 990,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
        },
        {
            id: 3,
            name: "Adidas Prophere Customize",
            alias: "adidas-prophere-customize",
            price: 375,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 415,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
        },
        {
            id: 4,
            name: "Adidas Super Star Red",
            alias: "adidas-super-star-red",
            price: 465,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 542,
            image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
        }];

    render() {
        const { gioHang, dispatch } = this.props;
        return (
            <div className='row pt-5'>
                <h1 className='text-center'>
                    Giỏ hàng: {gioHang.length}
                </h1>
                {this.products.map((item) => {
                    return <div className='col-4'>
                        <img src={item.image} className="img-fluid" />
                        <br />
                        {item.name}
                        <br />
                        <button className='btn btn-success'
                            onClick={() =>
                                dispatch({
                                    type: "THEM_GIO_HANG",
                                    payload: item
                                })
                            }
                        >Thêm</button>
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

export default connect(mapStateToProps, null)(DemoGioHang);