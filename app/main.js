function matchPattern(inputLine, pattern) {

  let newPattern = pattern.replace('//d','[0-9]').replace('\\w','[0-9a-zA-Z]');
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else {
    return new RegExp(newPattern).test(inputLine);
  }
  
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  // You can use print statements as follows for debugging, they'll be visible when running tests.
  console.log("Logs from your program will appear here");

  // Uncomment this block to pass the first stage
  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
