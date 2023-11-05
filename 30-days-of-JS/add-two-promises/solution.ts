type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): Promise<number> {

	const [result1,result2] = await Promise.all([promise1,promise2]);

	return result1+result2
}

export default addTwoPromises;

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */