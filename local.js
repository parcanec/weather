export function toStorage(cities) {
    let citiesArray = JSON.stringify(cities)
    localStorage.setItem('citiesArray', citiesArray)
}