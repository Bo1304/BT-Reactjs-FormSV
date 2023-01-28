const initialState = {
  categories: [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" },
  ],
  selectedCategory: "topclothes",
};

// shallow comparison (oldState === newState)
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "category/UPDATE_SELECTED_CATEGORY":
      state.selectedCategory = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
