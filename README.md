# Text Diff Node.js

A command-line tool to compare and show differences between text files.

## Features

- Side-by-side diff view
- Unified diff format
- Word-level diff highlighting
- Ignore whitespace option
- Color output
- Compare directories

## Installation

```bash
npm install -g text-diff-nodejs
```

Or clone and install:

```bash
git clone https://github.com/mizoz/text-diff-nodejs.git
cd text-diff-nodejs
npm install
```

## Usage

```bash
# Compare two files
text-diff file1.txt file2.txt

# Unified diff format
text-diff --unified file1.txt file2.txt

# Word-level diff
text-diff --word-diff file1.txt file2.txt

# Ignore whitespace
text-diff --ignore-whitespace file1.txt file2.txt

# Compare directories
text-diff ./dir1 ./dir2
```

## Options

- `-u, --unified` - Show unified diff format
- `-w, --word-diff` - Show word-level differences
- `-i, --ignore-whitespace` - Ignore whitespace changes
- `-c, --color` - Enable colored output

## License

MIT License

## Author

mizoz
