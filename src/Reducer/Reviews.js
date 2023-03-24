const initial = [];
const ReviewsDatas = (data = initial, action) => {
  if (action.type === "getAllReviews") {
    return action.payload;
  }
  return data;
};
export default ReviewsDatas;
