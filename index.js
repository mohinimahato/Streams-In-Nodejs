// to read and write the index.html
import { readFile, writeFile } from 'fs/promises';
const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf-8' });
// console.log(contents);

const data = {
    name: "Mohini Mahato",
    company: "HIO",
    age: 23,
}
// Reading
// tried to create a template inside the file
for (const [key, value] of Object.entries(data)) {
    contents = contents.replace(`{${key}}`, value);
};
console.log(contents)

// Writing
await writeFile(filePath, contents);

// To create a new file and write on it following the same  pattern as above
await writeFile(new URL('./newIndex.html', import.meta.url), contents);