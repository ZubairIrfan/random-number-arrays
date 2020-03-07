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

> const options = { min:  0, max:  15, type:  'array', arraySize:  10 }
> Random(options);
> // => [ 2, 13, 4, 0, 11, 1, 8, 9, 12, 10 ]

> const options = { min:  0, max:  10, type:  'multi-array', arraySize:  10, numberOfArrays:  6 }
> Random(options);
> // => [ [ 2, 9, 1, 3, 6, 7, 9, 10, 1, 4 ],
  [ 3, 7, 7, 1, 4, 6, 4, 1, 8, 10 ],
  [ 10, 6, 7, 4, 10, 2, 7, 6, 1, 1 ],
  [ 5, 8, 0, 9, 3, 0, 0, 1, 6, 1 ],
  [ 10, 2, 2, 9, 6, 5, 4, 1, 0, 4 ],
  [ 9, 8, 6, 4, 1, 3, 4, 2, 0, 9 ] ]

```
**Options:**

```markdown
| Key            	|   Type  	|  Default 	| Description                                                                                                                                        	|
|----------------	|:-------:	|:--------:	|----------------------------------------------------------------------------------------------------------------------------------------------------	|
| min            	|  Number 	|     0    	| Range Minimum Number                                                                                                                               	|
| max            	|  Number 	|    100   	| Range Maximum Number                                                                                                                               	|
| type           	|  String 	| 'number' 	| For single random number, use 'number'. For single array of random numbers, use 'array'. For multiple array of random numbers, use 'multi-array'.  	|
| arraySize      	|  Number 	|     5    	| For type='array' or type='multi-array', specify the size of the array.                                                                             	|
| numberOfArrays 	|  Number 	|     2    	| For type='multi-array', specify number of random number arrays to be generated.                                                                    	|
| unique         	| Boolean 	|   false  	| Return unique values for type array provided that array size should be less than numbers count in provided range.                                  	|
| data           	| Array   	|   null   	| (Optional) For type='array' or type='multi-array', provide your own data to get random elements.                                                   	|
```
