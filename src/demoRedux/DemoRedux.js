//rcc
import React, { Component } from 'react';
//B1 
import { connect } from 'react-redux';

class DemoRedux extends Component {

    render() {
        console.log(this.props);

        // destructuring
        const { demoRedux, dispatch } = this.props;

        return (
            <h1 className='text-center'>
                {    
                    demoRedux.map(
                        //arrow function
                        (item) => 
                        <span>{item.id} <br /></span>
                    )
                }
                <br />
                <button onClick={
                    // type dùng để phân biệt loại dữ liệu đưa lên store
                    // payload là dữ liệu để đưa lên

                    () => dispatch({
                        type: "CHANGE_NAME",
                        payload: 2
                    })
                }>Change</button>
            </h1>
        )
    }
}
// B2:
const mapStateToProps = (state) => {
    return {
        demoRedux: state.demoReducer.danhSach,
        gioHang: state.gioHangReducer.gioHang
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: () => {
//             //nhận vào object có 2 thuộc tính
//             // thuộc tính 1: type
//             // thuộc tính 2: data

//             // na ná setState({})
//             dispatch({
//                 type: "type",
//                 data: "data"
//             })
//         }
//     }
// }

//B3 
export default connect(mapStateToProps, null)(DemoRedux);

// B1: import hàm connect từ thư viện react-redux
// B2: tạo hàm mapStateToProps => Lấy dữ liệu từ store chung redux về component
// B3: gọi hàm connect truyền vào 2 tham số ở hai hàm
    // hàm 1: mapStateToProps, null
    // hàm 2: Tên của component
// B4: đưa export default phía trên class component xuống trước hàm connect