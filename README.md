Generate **Random Number** or **Array of Random Numbers** within specified range on finger tips.

**Install**
```
> $ npm install random-number-arrays
```
**Usage**
```
> const Random = require('random-number-arrays);
> const options = { min: 0, max: 10 }
> Random(options);
> // => 4
```
**Options:**

```markdown
| Key            	|  Type  	|  Default 	| Description                                                                                                                                        	|
|----------------	|:------:	|:--------:	|----------------------------------------------------------------------------------------------------------------------------------------------------	|
| min            	| Number 	|     0    	| Range Minimum Number                                                                                                                               	|
| max            	| Number 	|    100   	| Range Maximum Number                                                                                                                               	|
| type           	| String 	| 'number' 	| For single random number, use 'number'. For single array of random numbers, use 'array'. For multiple array of random numbers, use 'multi-array'.  	|
| arraySize      	| Number 	|     5    	| For type='array' or type='multi-array', specify the size of the array.                                                                             	|
| numberOfArrays 	| Number 	|     2    	| For type='multi-array', specify number of random number arrays to be generated.                                                                    	|
```