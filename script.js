const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];
//2
const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    date: newSnewDatecore,
    passed: score >= 60,
  };
  array.push(newObject);
};
//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

//4
const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((student) => {
    return student.name === name;
  });
  return array.splice(index, 1);
};

/* deleteSubmissionByName(submissions, "Jane");
console.log(submissions); */

//5
// const editSubmission = (array, index, score) => {
//   const index = array.findIndex((submission)=>{
//     return submission
//   })

// }
// const deleteALaptop = (array, brand, price) => {
//   const index = array.findIndex((laptop) => {
//     return laptop.brand === brand && laptop.price === price;
//   });
//   index >= 60
//     ? array.splice(
//         index,
//         1
//       ) /* at the object that meets our requirements, remove one thing. */
//     : console.log("No laptop found");
// };

// 6
const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};

console.log(findSubmissionByName(submissions, 1));
