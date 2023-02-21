const fs = require('fs')

/**
 * Counts the number of students in a csv
 * @param path path to csv file
 * @author John Mathai
 */

const countStudents = (path) => {
    if(!fs.existsSync(path)){
        throw new Error('Cannot load the database');
    }
    if(!fs.statSync(path).isFile())
    {
        throw new Error('Cannot load the database');
    }
    const extractLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
const studentGroup = {};
const fieldNames = extractLines[0].split(',');
const studentPropNames = fieldNames.slice(0, fieldNames.length - 1);

for (const line of extractLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentValues = studentRecord.slice(0, studentRecord.length -1);
    const fields = studentRecord[studentRecord.length - 1];

    if (!Object.keys(studentGroup).includes(fields)) {
        studentGroup[fields] = [];
      }
    const studentEntries = studentPropNames
    .map((propName, idx) => [propName, studentValues[idx]]);
    studentGroup[fields].push(Object.fromEntries(studentEntries));   
}
const totalStudents = Object
    .values(studentGroup)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroup)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;