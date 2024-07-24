import apiClient from "./Api";


export default {
    getAnimalsList() {
        return apiClient.get("/images/search", {
          params: {
            limit: 12
          }
        });
      },
      getAnimalByCategory(category) {
        return apiClient.get("/images/search", {
          params: {
            limit: 12,
            category_ids: category
          }
        });
      },
      getAnimalById(breedId) {
        return apiClient.get("/images/search", {
          params: {
            limit: 12,
            breed_ids: breedId
          }
        });
      },
fetchCatImages () {
    return apiClient.get('', {
      params: {
        limit: 10,
        breed_ids: 'beng'
      }
    });
  }
  
};
