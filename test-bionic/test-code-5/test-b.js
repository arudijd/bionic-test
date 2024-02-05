function difference(price) {
    if (price.length < 2) {
        return null;
    }
    
    let maxDiff = 0;
    let minPrice = 0;
    let maxPrice = 0
    
    for (let i = 0; i < price.length; i++) {
        for (let j = i+1; j < price.length; j++) {
          let diff = price[i] - price[j]
          if(diff > maxDiff) {
            maxDiff = diff
            minPrice = price[i]
            maxPrice = price[j]
          }
        }
    }
    
    return `${maxDiff} (${minPrice} & ${maxPrice})`;
}

const price = [10, 7, 5, 8, 11, 9, 1];
console.log(difference(price));
