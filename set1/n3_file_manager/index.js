// Name: Kristine Mae M. Peralta
// Activity: ELEC 3 - N3 File Manager
// Date: November 24, 2026

const fs = require("fs");
const path = require("path");

const filesFolder = path.join(__dirname, "files");

if (!fs.existsSync(filesFolder)) {
    fs.mkdirSync(filesFolder, { recursive: true });
}

console.log("Welcome to my Node.js File Manager!");

function createFile(filename, content) {
    const filePath = path.join(filesFolder, filename);

    fs.writeFileSync(filePath, content);

    console.log("File created successfully:", filename);
}

function readFile(filename) {
    const filePath = path.join(filesFolder, filename);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    const content = fs.readFileSync(filePath, "utf8");

    console.log("File Content:");
    console.log(content);
}
// UPDATE FILE
function updateFile(filename, content) {
    const filePath = path.join(filesFolder, filename);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    fs.appendFileSync(filePath, content);

    console.log("File updated successfully:", filename);
}
// DELETE FILE
function deleteFile(filename) {
    const filePath = path.join(filesFolder, filename);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    fs.unlinkSync(filePath);

    console.log("File deleted successfully:", filename);
}
// LIST FILES
function listFiles() {
    const files = fs.readdirSync(filesFolder);

    if (files.length === 0) {
        console.log("No files found.");
        return;
    }

    files.forEach(filename => {
        const filePath = path.join(filesFolder, filename);
        const content = fs.readFileSync(filePath, "utf8");

        console.log("-------------------------");
        console.log("Filename:", path.basename(filename));
        console.log("Extension:", path.extname(filename));
        console.log("Full Path:", filePath);
        console.log("Content:", content);
    });
}
// COMMAND LINE INPUT
const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];

switch (command) {
    case "create":
        createFile(filename, content || "");
        break;

    case "read":
        readFile(filename);
        break;

    case "update":
        updateFile(filename, content || "");
        break;

    case "delete":
        deleteFile(filename);
        break;

    case "list":
        listFiles();
        break;

    default:
        console.log("Invalid command.");
        console.log("Available commands: create, read, update, delete, list");
}