/*
We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.
*/

 let myNestedArray = [ // top, or first level - the outer most array
  [5], // an array within an array, 2 levels of depth
  [
    ['deep']// 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deeper']// 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest'] // an array nested 5 levels deep
      ]
    ]
  ]
];
