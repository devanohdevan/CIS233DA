function changecity(city) {
    var cities = ['honolulu', 'kailua', 'kapolei', 'oahu'];
  
    for (let i = 0; i < cities.length; i++) {
      let cityContent = document.getElementById(`city-content-${cities[i]}`);
      if (cities[i] === city.toLowerCase()) {
        cityContent.style.display = 'block';
        document.getElementById('selected-city').textContent = city;
      } else {
        cityContent.style.display = 'none';
      }
    }
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    changecity('honolulu');
  });
 