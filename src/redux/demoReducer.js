
// default state
const initalState = {
    danhSach: [{ id: 1 }],
    text: "abc",
    number: 123
};
export const demoReducer = (state = initalState, action) => {

    const { type, payload } = action;
    switch (type) {
        case "CHANGE_NAME": {
            // B1: lấy ra
            let danhSach = [...state.danhSach];
            // B2: xử lý
            let data = {
                id: payload
            };
            danhSach.push(data);

            // B3: Gán ngược lại
            // state.danhSach = newDanhSach;
            // spread operator
            return { ...state , danhSach};
        }

        default: {

            return { ...state }; // => return 0
        }
    }

}

// export const userReducer = () => {

// }

// store user
// store giohang
// store product