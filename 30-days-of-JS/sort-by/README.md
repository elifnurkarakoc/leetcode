## Explanation

The sortBy function is designed to sort an array of JSONValue elements based on the numeric values obtained by applying a provided function to each element.


```ts
function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
	return arr.sort((a,b)=> fn(a)- fn(b))
}
```