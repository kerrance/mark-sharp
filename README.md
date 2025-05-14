# mark-sharp
Handy conversion tools for Markdown

## Scripts

### Convert Markdown to HTML
To run the Markdown conversion script, use the following command:

```bash
npm run convert-markdown
```

The script requires the following parameters:

- `<input.md>`: The path to the input Markdown file.
- `<output.html>`: The path where the converted HTML file will be saved.
- `<style.css>`: The path to the CSS file for styling the HTML output.

Example usage:

```bash
npm run convert-markdown example/example.md example/example.html example/style.css
```

### Lint Markdown
To lint your Markdown files, use the following command:

```bash
npm run lint:md
```
