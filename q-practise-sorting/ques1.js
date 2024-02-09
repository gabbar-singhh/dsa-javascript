console.log(
  "1. Description: Write a function that takes an array of numbers and sorts them in ascending order using the sort method"
);

function ques1(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(ques1([5, 2, 8, 1, 4]));

console.log(
  "2. Description: Write a function that takes an array of strings and sorts them in alphabetical order using the sort method."
);

function ques2(arr) {
  return arr.sort();
}

console.log(ques2(["banana", "apple", "orange", "grape"]));

console.log(
  "3. Description: Write a function that takes an array of objects with a numeric property and sorts the objects based on that property in ascending order using the sort method."
);

function ques3(arr) {
  return arr.sort((a, b) => a.score - b.score);
}

console.log(
  "ques3: ",
  ques3([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
  ])
);

console.log(
  "5. Description: Write a function that takes an array of strings and sorts them based on the length of each string, from shortest to longest, using the sort method."
);

function ques5(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(ques5(["apple", "banana", "grape", "kiwi"]));

/*  */
console.log(
  "6. Description: Write a function that takes an array of objects representing students and sorts them based on their scores in descending order. If two students have the same score, sort them alphabetically by their names"
);
function ques6(arr) {
  return arr.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;

    if (a.score === b.score) return arr.sort();
  });
}
console.log(
  ques6([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 92 },
  ])
);

console.log(
  "7. Description: Write a function that takes an array of date strings (in the format 'YYYY-MM-DD') and sorts them in ascending order."
);
// approach1
function ques7(arr) {
  return arr.sort((a, b) => {
    // console.log(a.substr(0,4)) year
    // console.log(a.substr(5,2)) month
    // console.log(a.substr(8,2)) date

    if (parseInt(a.substr(0, 4)) === parseInt(b.substr(0, 4))) {
      if (parseInt(a.substr(5, 2)) === parseInt(b.substr(5, 2))) {
        return parseInt(a.substr(8, 2)) - parseInt(b.substr(8, 2));
      }

      return parseInt(a.substr(5, 2)) - parseInt(b.substr(5, 2));
    }
  });
}

//approach2
function ques7(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(
  ques7([
    "2022-05-15",
    "2023-02-10",
    "2021-11-22",
    "2022-08-03",
    "2021-12-05",
    "2022-02-18",
    "2023-01-01",
    "2022-09-30",
    "2023-04-12",
    "2022-06-25",
  ])
);

console.log(
  "11. Description: Write a function that takes an array of IPv4 addresses and sorts them in ascending order based on their numerical representation."
);

function ques11(arr) {
  return arr.sort((a, b) => {
    const ipA = a.split(".").map(Number);
    const ipB = b.split(".").map(Number);

    for (let i = 0; i < 4; i++) {
      if (ipA[i] !== ipB[i]) {
        return ipA[i] - ipB[i];
      }
    }
    return 0;
  });
}

console.log(ques11(["192.168.1.10", "10.0.0.5", "172.16.8.1", "192.168.0.1"]));

console.log(
  "13, Description: Write a function that takes an array of objects representing students. Each student has a name and an object with the subjects they are studying along with their corresponding grades. Sort the students based on their average grade in descending order."
);

function ques13(arr) {
  return arr.sort((a, b) => {
    let totalMarksA = 0;
    let totalMarksB = 0;

    for (const key in a.grades) {
      totalMarksA += a.grades[key];
    }

    for (const key in b.grades) {
      totalMarksB += b.grades[key];
    }

    avgGradeA = totalMarksA / Object.keys(a.grades).length;
    avgGradeB = totalMarksB / Object.keys(b.grades).length;

    return avgGradeB - avgGradeA;
  });
}

console.log(
  ques13([
    { name: "Alice", grades: { math: 90, science: 85, history: 92 } },
    { name: "Bob", grades: { math: 88, science: 95, history: 89 } },
    { name: "Charlie", grades: { math: 94, science: 91, history: 87 } },
  ])
);
