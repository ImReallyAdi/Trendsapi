const { spawn } = require('child_process');

// Example: get country from URL or user input
const urlPath = '/us'; // Replace this with dynamic input as needed

const countryMap = {
  '/us': 'united_states',
  '/in': 'india',
  // Add more mappings as needed
};

const country = countryMap[urlPath] || 'united_states';

const python = spawn('python3', ['scrape_trends.py', country]);

python.stdout.on('data', (data) => {
  const result = JSON.parse(data.toString());
  console.log(result);
});

python.stderr.on('data', (data) => {
  console.error(`Python error: ${data}`);
});

python.on('close', (code) => {
  console.log(`Python script exited with code ${code}`);
});