# ELEC 3 – Node.js Activities

**Name:** Kristine Mae M. Peralta  
**Section:** IV_BSIT-C  
**Course:** ELEC 3 – Node.js  
**Set:** Set 1

---

## Activities

### N1 – npm and package.json

**Folder:** [`n1_setup`](set1/n1_setup/)

This activity focuses on setting up a Node.js project using npm. It includes initializing a project, creating a `package.json` file, installing npm packages, and running the application using an npm script.

**Main Files:**
- `index.js` – Main JavaScript file that displays the student's name.
- `package.json` – Contains project information, dependencies, and scripts.
- `package-lock.json` – Records the exact versions of installed packages.
- `N1_answers.docx` – Contains the written answers for the activity.

**Concepts and Requirements:**
- Setting up a Node.js project.
- Initializing a project using `npm init`.
- Installing npm packages.
- Using development dependencies.
- Configuring the start script.
- Running the application using `npm start`.

**Screenshots:**
- [Node and npm Version](set1/n1_setup/screenshots/node_npm_version.png)
- [Package JSON](set1/n1_setup/screenshots/package_json.png)
- [NPM Start Output](set1/n1_setup/screenshots/npm_start_output.png)

---

### N2 – Node.js Custom Modules (Calculator)

**Folder:** [`n2_calculator`](set1/n2_calculator/)

This activity demonstrates how to create and use custom modules in Node.js by developing a simple command-line calculator. It uses separate JavaScript files for calculator operations and result formatting.

**Main Files:**
- `index.js` – Handles command-line arguments and executes the selected calculator operation.
- `operations.js` – Contains the functions for addition, subtraction, multiplication, division, and average.
- `formatter.js` – Handles the formatting and display of calculator results.

**Concepts and Requirements:**
- Creating custom Node.js modules.
- Exporting functions using `module.exports`.
- Importing modules using `require()`.
- Using `process.argv` to receive command-line arguments.
- Performing basic calculator operations.
- Handling division by zero.
- Handling unknown or invalid operations.
- Using a built-in Node.js module.

**Calculator Operations:**
- Addition
- Subtraction
- Multiplication
- Division
- Average

**Screenshots:**
- [Addition](set1/n2_calculator/screenshots/add.png)
- [Subtraction](set1/n2_calculator/screenshots/subtract.png)
- [Multiplication](set1/n2_calculator/screenshots/multiply.png)
- [Division](set1/n2_calculator/screenshots/divide.png)
- [Division by Zero](set1/n2_calculator/screenshots/devide_by_zero.png)
- [Average](set1/n2_calculator/screenshots/average.png)
- [Unknown Operation](set1/n2_calculator/screenshots/unknown_operation.png)

---

### N3 – Utility Modules (File System and Path)

**Folder:** [`n3_file_manager`](set1/n3_file_manager/)

This activity demonstrates the use of Node.js built-in `fs` (File System) and `path` modules by creating a simple command-line file manager. The program allows users to create, read, update, delete, and list text files.

**Main Files:**
- `index.js` – Contains the file management functions and command-line operations.
- `files/profile.txt` – Contains personal profile information.
- `files/school.txt` – Contains school-related information.
- `files/third.txt` – A third text file created using the Node.js program.

**Concepts and Requirements:**
- Using the built-in `fs` module.
- Using the built-in `path` module.
- Creating files using `fs.writeFileSync()`.
- Reading files using `fs.readFileSync()`.
- Updating files using `fs.appendFileSync()`.
- Deleting files using `fs.unlinkSync()`.
- Listing files using `fs.readdirSync()`.
- Using `path.join()` to create file paths.
- Using `path.basename()` to get file names.
- Using `path.extname()` to get file extensions.
- Checking whether files exist.
- Handling missing files.
- Creating and managing at least three text files.

**File Manager Commands:**

| Command | Description |
|---|---|
| `create` | Creates a new text file. |
| `read` | Reads the content of a text file. |
| `update` | Adds content to an existing file. |
| `delete` | Deletes an existing file. |
| `list` | Displays the available files and their information. |

**Screenshots:**
- [Create File](set1/n3_file_manager/screenshots/create.png)
- [Read File](set1/n3_file_manager/screenshots/read.png)
- [Update File](set1/n3_file_manager/screenshots/update.png)
- [Delete File](set1/n3_file_manager/screenshots/delete.png)
- [List Files](set1/n3_file_manager/screenshots/list.png)
- [List Three Text Files](set1/n3_file_manager/screenshots/list_three_files.png)
- [Missing File – Read](set1/n3_file_manager/screenshots/missing_file_read.png)
- [Missing File – Delete](set1/n3_file_manager/screenshots/missing_file_delete.png)

---

## How to Run the Activities

### N1 – npm and package.json

```bash
cd set1/n1_setup
npm install
npm start
```

### N2 – Node.js Custom Modules

```bash
cd set1/n2_calculator

node index.js add 21 5
node index.js subtract 21 5
node index.js multiply 21 5
node index.js divide 21 5
node index.js average 21 5
```

### N3 – File Manager

```bash
cd set1/n3_file_manager

node index.js create notes.txt "Hello World"
node index.js read notes.txt
node index.js update notes.txt "Updated content"
node index.js list
node index.js delete notes.txt
```

---

## Technologies Used

- Node.js
- JavaScript
- npm (Node Package Manager)
- Custom Node.js Modules
- Built-in `fs` Module
- Built-in `path` Module
- Command-Line Interface (CLI)

---

## Repository Structure

```text
ELEC3-Nodejs-PERALTA/
│
├── README.md
├── .gitignore
│
└── set1/
    │
    ├── n1_setup/
    │   ├── index.js
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── N1_answers.docx
    │   └── screenshots/
    │
    ├── n2_calculator/
    │   ├── index.js
    │   ├── operations.js
    │   ├── formatter.js
    │   └── screenshots/
    │
    └── n3_file_manager/
        ├── index.js
        ├── files/
        │   ├── profile.txt
        │   ├── school.txt
        │   └── third.txt
        └── screenshots/
```

