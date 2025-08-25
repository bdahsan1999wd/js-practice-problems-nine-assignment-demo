// The function name should be isJavaScriptFile. This function will take a string as a parameter, which will represent a file name (for example: 'index.js'). If the file is a JavaScript file, return true. Otherwise, return false. Also, validate the input so that only valid strings are accepted.


function isJavaScriptFile(fileName) {

    // First Validate input: must be a string and not empty (after trimming spaces)
    if (typeof fileName !== 'string' || fileName.trim().length === 0) {
        return 'Please provide a valid input';
    }

    // Remove leading/trailing spaces and convert to lowercase
    // This ensures the check is case-insensitive and ignores extra spaces
    const lowerCaseFile = fileName.trim().toLowerCase();

    // Check if the file name ends with '.js' and return true/false
    return lowerCaseFile.endsWith('.js');
}

console.log(isJavaScriptFile('index.js'));
console.log(isJavaScriptFile('app.Js'));
console.log(isJavaScriptFile('style.CSS'));
console.log(isJavaScriptFile(''));
console.log(isJavaScriptFile(123));
console.log(isJavaScriptFile('  main.JS  '));