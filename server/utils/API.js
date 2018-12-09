import axios from 'axios';

export default {
  // Gets all animals
  getAnimals: function() {
    return axios.get('/api/animals');
  },
  // Gets the animal with the given id
  getAnimal: function(id) {
    return axios.get('/api/animals/' + id);
  },
  // Deletes the animal with the given id
  deleteAnimal: function(id) {
    return axios.delete('/api/animals/' + id);
  },
  // Saves an animal to the database
  saveAnimal: function(animalData) {
    return axios.post('/api/animals', animalData);
  }
};
