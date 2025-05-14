#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.error("Usage: node convertMarkdown.js <input.md> <output.html> <style.css>");
  process.exit(1);
}

const [inputFile, outputFile, cssFile] = args;

// Validate files
if (!fs.existsSync(inputFile)) {
  console.error(`Input file not found: ${inputFile}`);
  process.exit(1);
}

if (!fs.existsSync(cssFile)) {
  console.error(`CSS file not found: ${cssFile}`);
  process.exit(1);
}

// Initialize markdown-it
const md = new MarkdownIt();

// Read input Markdown and CSS
const markdown = fs.readFileSync(inputFile, "utf8");
const cssContent = fs.readFileSync(cssFile, "utf8");

// Convert Markdown to HTML
const htmlContent = md.render(markdown);

// Wrap HTML with CSS styling

// Extract the first H1 from the markdown content
const firstH1Match = markdown.match(/^#\s+(.+)$/m);
const title = firstH1Match ? firstH1Match[1] : path.basename(inputFile, ".md");

const styledHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
${cssContent}
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
`;

// Write output HTML file
fs.writeFileSync(outputFile, styledHtml);

console.log(`HTML file generated: ${outputFile}`);
