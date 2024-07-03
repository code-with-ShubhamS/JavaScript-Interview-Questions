function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function multiplyByTwoWithDelay(numbers) {
    const promises = numbers.map(async (number) => {
      await delay(500);
      return number * 2;
    });
    return promises;
  }
  
  // Usage example
  (async () => {
    const numbers = [1, 2, 3, 4, 5];
    const promises = await (multiplyByTwoWithDelay(numbers));
   
    // Waiting for all promises to resolve
    const results = await Promise.all(promises);
    console.log(promises);
    console.log(results) // [2, 4, 6, 8, 10]
  })();