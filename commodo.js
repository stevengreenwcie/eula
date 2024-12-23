function customParse(data) {
  const lines = data.split('\n'); // Split input data by new lines
  const result = {};

  lines.forEach(line => {
    const [key, value] = line.split(': '); // Split each line into key and value
    if (key && value) {
      result[key.trim()] = value.trim(); // Trim whitespace and add to result object
    }
  });

  return result;
}

// Example usage
const inputStr = `
name: John Doe
age: 30
email: john.doe@example.com
`;

console.log(customParse(inputStr));
// Output:
// { name: 'John Doe', age: '30', email: 'john.doe@example.com' }
