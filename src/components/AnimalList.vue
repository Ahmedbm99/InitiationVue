<template>
  <div class="container">
    <h1 class="title">List of Animals</h1>
    <div class="search-box">
      <label for="category" class="search-label">Category</label>
      <input
        type="number"
        placeholder="Search for a specific category by number"
        name="category"
        v-model="categoryId"
        @change="searchByCategory"
        class="search-input"
      />
    </div>
    <ul class="animal-list" v-if="animalsData.length">
      <li v-for="animal in animalsData" :key="animal.id" class="animal-item">
        <img :src="animal.url" :alt="animal.id" class="animal-img" />
        <div class="animal-info">
          <h3 class="animal-category" v-if="animal.categories && animal.categories.length > 0">
            Category: {{ animal.categories[0].name }}
          </h3>
          <h3 class="animal-category" v-else>
            No category
          </h3>
        </div>
      </li>
    </ul>
    <p class="no-animals" v-else>No animals found.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AnimalService from '../services/AnimalService';

export default {
  name: 'AnimalList',
  setup() {
    const animalsData = ref([]);
    const loading = ref(false);
    const categoryId = ref(0);

    const fetchAnimals = async () => {
      try {
        loading.value = true;
        const response = await AnimalService.getAnimalsList();
        animalsData.value = response.data;
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        loading.value = false;
      }
    };

    const getAnimalByCategory = async (category) => {
      try {
        loading.value = true;
        if (category >= 0) { 
          const response = await AnimalService.getAnimalByCategory(category);
          animalsData.value = response.data;
        } else {
          alert("There is no category for that number");
        }
      } catch (error) {
        console.error("Error fetching animals by category:", error);
      } finally {
        loading.value = false;
      }
    };

    const searchByCategory = () => {
      getAnimalByCategory(categoryId.value);
    };

    onMounted(() => {
      fetchAnimals();
    });

    return {
      animalsData,
      loading,
      categoryId,
      fetchAnimals,
      getAnimalByCategory,
      searchByCategory,
    };
  },
};
</script>

<style scoped>
.container {
  height: 50%;
  width: 70%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.search-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.search-label {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.search-input {
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
}

.animal-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.animal-item {
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  padding: 10px;
}

.animal-img {
  height: 50%;
  width: 70%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.animal-info {
  padding: 10px;
}

.animal-category {
  font-size: 1.2em;
  margin: 0;
  color: #555;
}

.no-animals {
  text-align: center;
  font-size: 1.2em;
  color: #777;
}
</style>
