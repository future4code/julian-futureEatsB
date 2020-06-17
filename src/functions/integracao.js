import axios from "axios";

export const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

export const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/restaurants/1`, {
    headers: {
      auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVYSnBGMFNhWTB2ZFVMaGZpdHdUIiwibmFtZSI6IlJpY2siLCJlbWFpbCI6InJpY2tAc2FuY2hlcy5jb20iLCJjcGYiOiI4ODguODg4Ljg4OC04OCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZG9zIGJvYnMsIDAsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU5MjQwNDA1OX0.pfpNOxkrlezfhYKUYcZHR6M8zV637CjwDSAwrIbtT8k",
    },
  });
  return response.data.restaurant.products;
};
