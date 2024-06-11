# Electron.js - Building Cross-Platform Desktop Applications

## Overview

**Electron.js** is an open-source framework developed and maintained by GitHub. It allows developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. Electron combines the Chromium rendering engine and the Node.js runtime to enable building desktop applications with web development skills.

```bash
# Check Node.js and npm versions
node -v
npm -v
```

## Getting Started

Install the Electron CLI globally:

```bash
npm install -g electron
```

Create a new directory for your Electron app:

```bash
mkdir my-electron-app
cd my-electron-app
```

Initialize a new Node.js project:

```bash
npm init -y
```

## Basic Structure of an Electron App

An Electron app typically has the following structure:

```plaintext
my-electron-app/
│
├── package.json
├── main.js
├── index.html
└── renderer.js
```

- **`package.json`:** Defines metadata about your Electron app and its dependencies.
- **`main.js`:** The main process script responsible for creating and managing the main Electron application window.
- **`index.html`:** The HTML file that represents the main content of your application.
- **`renderer.js`:** The script that runs in the renderer process (web page) and handles the UI logic.

## Main Process and Renderer Process

In Electron, there are two types of processes:

1. **Main Process:** Manages the lifecycle of the application, creates windows, and handles system events. It runs Node.js and is the entry point defined in `package.json`.

2. **Renderer Process:** Represents the web pages and runs the JavaScript code responsible for the UI. Each window in Electron has its own renderer process.

## Creating a Simple Electron App

1. **Create the `main.js` file:**

   ```javascript
   // main.js
   const { app, BrowserWindow } = require('electron');

   function createWindow() {
     // Create the browser window
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         nodeIntegration: true
       }
     });

     // Load the index.html file
     win.loadFile('index.html');
   }

   // Event handler for when the app is ready
   app.whenReady().then(createWindow);
   ```

2. **Create the `index.html` file:**

   ```html
   <!-- index.html -->
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>My Electron App</title>
     </head>
     <body>
       <h1>Hello Electron!</h1>
     </body>
   </html>
   ```

3. **Update `package.json`:**

   ```json
   // package.json
   {
     "name": "my-electron-app",
     "version": "1.0.0",
     "main": "main.js",
     "scripts": {
       "start": "electron ."
     },
     "devDependencies": {
       "electron": "^16.0.0"
     }
   }
   ```

4. **Install Electron as a development dependency:**

   ```bash
   npm install electron --save-dev
   ```

5. **Run your Electron app:**

   ```bash
   npm start
   ```

   This will open an Electron window displaying "Hello Electron!"

## Packaging and Distributing Your App

To package your Electron app, you can use tools like `electron-builder` or `electron-packager`. Install them as development dependencies:

```bash
npm install electron-builder --save-dev
```

Update your `package.json`:

```json
// package.json
{
  // ...
  "scripts": {
    "start": "electron .",
    "package": "electron-builder"
  },
  "build": {
    "appId": "com.example.myelectronapp",
    "productName": "My Electron App",
    "files": ["dist/**/*", "node_modules/**/*"],
    "directories": {
      "output": "build"
    }
  }
  // ...
}
```

Now, you can package your app using:

```bash
npm run package
```

## Advanced Topics

- **Inter-Process Communication (IPC):** Communicate between the main process and renderer processes using IPC mechanisms.

- **Electron APIs:** Utilize Electron's rich set of APIs for functionalities like system dialogs, file handling, clipboard operations, etc.

- **Integration with Frameworks:** Integrate popular frontend frameworks like React, Angular, or Vue.js into your Electron app.

- **Electron Store:** Implement a local data store for your Electron app using `electron-store`.
