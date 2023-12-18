type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): Promise<number> {
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
}

export default addTwoPromises;
