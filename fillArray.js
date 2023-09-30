const fillArray = (rawData, currentWeek) => {
  // Bubble sort !!
  var n = rawData.length;
  for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
          if (rawData[j]['week'] > rawData[j + 1]['week']) {
              var temp = rawData[j];
              rawData[j] = rawData[j + 1];
              rawData[j + 1] = temp;
          }
      }
  }

  var hoursList = [];
  var currentIndex = 0;

  // Go through weeks from 1 to currentWeek
  for (var week = 1; week <= currentWeek; week++) {
      // Check if the currentIndex is within bounds and has the correct week
      if (currentIndex < rawData.length && rawData[currentIndex]['week'] === week) {
          hoursList.push(rawData[currentIndex]['hours']);
          currentIndex++;
      } else {
          // if there is a missing week, append 0
          hoursList.push(0);
      }
  }

  return hoursList;
};

// test case
const source = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result = fillArray(source, 3);
console.group('Set1');
console.log('result ==>', result);
console.log('target ==>', [17, 7, 44]);
console.groupEnd();

// more advanced test case
const source1 = [
  { week: 5, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result1 = fillArray(source1, 8);
console.group('Set2');
console.log('result ==>', result1);
console.log('target ==>', [0, 7, 44, 0, 17, 0, 0, 0]);
console.groupEnd();
