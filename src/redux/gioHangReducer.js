// default state
const initalState = {
    gioHang: []
};

export const gioHangReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "THEM_GIO_HANG": {
            //B1 lấy ra
            let gioHang = [...state.gioHang];
            //B2 xử lý
           
            // kiểm tra xem sản phẩm có chưa nếu chưa có thì gán là 1
            gioHang.push({ ...payload, soLuong: 1 });

            //nếu đã có rồi thì tăng số lượng lên
            

            //B3 gắn ngược lại
            return { ...state, gioHang };
        }
        default: {
            return { ...state };
        }
    }
}

// Khi nào dùng state, props => 2 tầng
// khi nào dùng store redux