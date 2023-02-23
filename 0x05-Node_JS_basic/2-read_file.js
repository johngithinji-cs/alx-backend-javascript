const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {undefined}
 * @throws {Error} if the dataPath does not exist or is not a file.
 * @throws {Error} if the database cannot be loaded.
 * @example
 * countStudents('./database.csv');
 * // Number of students: 64
 * // Number of students in Engineering: 24. List: John Doe, Jane Doe, ...
 * // Number of students in Math: 20. List: Alice, Bob, ...
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8')
    .toString()
    .trim()
    .split('\n');

  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(studentGroups)
    .reduce((pre, cur) => pre.length + cur.length, [])
    .length;

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
