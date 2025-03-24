function countCities(cityList) {
    let count = {};
  
    cityList.forEach(function (city) {
      if (count[city]) {
        count[city]++;
      } else {
        count[city] = 1;
      }
    });
  
    let sortedCities = Object.entries(count).sort(function (a, b) {
      return b[1] - a[1];
    });
  
    let topCities = sortedCities.slice(0, 5);
  
    console.log('Top 5 most repeated cities:');
    topCities.forEach(function (city) {
      console.log(`${city[0]}: ${city[1]} times`);
    });
  }
  
  const cityList = [
    'nashville',
    'nashville',
    'los angeles',
    'nashville',
    'Madrid',
    'memphis',
    'barcelona',
    'los angeles',
    'sevilla',
    'Madrid',
    'canary islands',
    'barcelona',
    'Madrid',
    'Madrid',
    'nashville',
    'barcelona',
    'london',
    'berlin',
    'Madrid',
    'nashville',
    'london',
    'Madrid',
    'Madrid',
  ];
  
  countCities(cityList);
  