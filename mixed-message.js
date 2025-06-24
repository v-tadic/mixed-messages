const city = ['Belgrade', 'Tokyo', 'Moscow', 'Prague', 'London'];
const activity = ['climb a mountain', 'visit a museum', 'try out a new food', 'meet someone new'];
const season = ['autumn', 'winter', 'spring', 'summer'];

function pickWords(arr1, arr2, arr3){
    let randomIndexCity = Math.floor(Math.random() * arr1.length);
    let randomIndexActivity = Math.floor(Math.random() * arr2.length);
    let randomIndexSeason = Math.floor(Math.random() * arr3.length);

    let pickedCity = arr1[randomIndexCity];
    let pickedActivity = arr2[randomIndexActivity];
    let pickedSeason = arr3[randomIndexSeason];

    return `You should ${pickedActivity} in ${pickedCity} during the ${pickedSeason}.`;
}

console.log(pickWords(city, activity, season));

