document.addEventListener('DOMContentLoaded', function() {
    const readmeForm = document.getElementById('readmeForm');
    const readmePreview = document.getElementById('readmePreview');

    readmeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const license = document.getElementById('license').value;
        const github = document.getElementById('github').value;
        const email = document.getElementById('email').value;

        const readmeContent = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- Add installation instructions here -->

## Usage
<!-- Add usage information here -->

## License
[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Contributing
<!-- Add contribution guidelines here -->

## Tests
<!-- Add test instructions here -->

## Questions
For questions, please contact [GitHub profile](https://github.com/${github}).
For additional inquiries, email [${email}].
`;

        readmePreview.textContent = readmeContent;
    });
});
