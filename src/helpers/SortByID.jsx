 /** Helper to sort the data by ID*/
  export const sortById = (array) => {
    return [...array].sort((a, b) => {
      const [prefixA, numA] = a.id.split("-").map(Number);
      const [prefixB, numB] = b.id.split("-").map(Number);

      if (prefixA !== prefixB) return prefixA - prefixB;
      return numA - numB;
    });
  };