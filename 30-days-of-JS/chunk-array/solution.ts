type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue> | Array<number>;

function chunk(arr: number[], size: number): Obj[][] {
    const temp = [];
	if(arr.length>0){
        for(let i=0;i<arr.length;i=size+i){
            temp.push(arr.slice(i,size+i))
        }
    }

    return temp;
}


export default chunk;