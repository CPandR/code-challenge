const deepCopy = (sourceObj) => {
  // your code here
};

// Example simple test case
const source = {
  a: 1,
  b: 'string',
  c: false,
};

const target = deepCopy(source);
console.group('Set1');
console.log('source ==>', source);
console.log('target ==>', target);
console.groupEnd();

// Example more advanced test case
const source1 = {
  a: [1, 2, 3, 4],
  b: {
    c: 1,
    d: 2,
    e: new Date(),
    f: () => console.log('Hello World'),
  },
};
const target1 = deepCopy(source1);
console.group('Set2');
console.log('source ==>', source1);
console.log('target ===>', target1);
console.groupEnd();

// Feel free to show off different style test cases as you see fit
