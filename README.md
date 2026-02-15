# Text Diff Node.js

[![npm Version](https://img.shields.io/npm/v/text-diff-nodejs?style=flat-square)](https://www.npmjs.com/package/text-diff-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/text-diff-nodejs?style=flat-square)](https://www.npmjs.com/package/text-diff-nodejs)
[![License](https://img.shields.io/npm/l/text-diff-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/text-diff-nodejs?style=flat-square)](https://www.npmjs.com/package/text-diff-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/text-diff-nodejs?style=flat-square)](https://github.com/mizoz/text-diff-nodejs)

> A Node.js CLI tool for comparing and showing differences between text files.

## Features

- Compare two text files
- Side-by-side diff view
- Unified diff format
- Word-level diff
- Ignore whitespace option
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g text-diff-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/text-diff-nodejs.git
cd text-diff-nodejs
npm install
```

## Usage

### Command Line

```bash
# Compare two files
text-diff file1.txt file2.txt

# Unified diff format
text-diff --unified file1.txt file2.txt
```

### JavaScript API

```javascript
const { TextDiffer } = require("text-diff-nodejs");

const differ = new TextDiffer();

// Compare texts
const diff = differ.compare("Hello World", "Hello Universe");
console.log(diff);
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
