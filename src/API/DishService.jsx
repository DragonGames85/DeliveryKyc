import axios from "axios";

export default class PostService {
  static async getAll(page = 1) {
    const response = await axios.get(
      "https://food-delivery.kreosoft.ru/api/dish",
      {
        params: {
          page: page,
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      "https://food-delivery.kreosoft.ru/api/dish/" + id
    );
    return response;
  }

  static async getRateCheck(id) {
    const response = await axios.get(
      `https://food-delivery.kreosoft.ru/api/dish/${id}/rating/check`
    );
    return response;
  }
}
