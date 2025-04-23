export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);

    // Increment the count
    if (count >= 4) {
      throw new Error("Endpoint load is high");
    }
    weakMap.set(endpoint, count + 1);
  } else {
    // If the endpoint hasn't been queried, initialize the count to 1
    weakMap.set(endpoint, 1);
  }
}
