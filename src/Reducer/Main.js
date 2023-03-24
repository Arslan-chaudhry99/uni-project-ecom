const initial = [];
const MainData = (data = initial, action) => {
  if (action.type === "getMainData") {
    return action.payload
  }
  return data;
};
export default MainData;
