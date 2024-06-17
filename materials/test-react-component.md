# Testing React Components with Vitest

## JavaScript

### Step 1: Setup a React Project using Vite

First, you need to create a new React project using Vite. Follow the steps below:

1. **Create a new Vite project**:

   ```bash
   npm create vite@latest
   ```

   - You will be prompted to provide a project name (e.g., `react-vitest`).
   - Select the framework as `React` and the variant as `JavaScript`.

2. **Navigate to the project directory**:

   ```bash
   cd react-vitest
   ```

3. **Install project dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   You should see the development server running, indicating that the basic project setup is complete.

### Step 2: Add Dependencies for Testing

Next, you need to add the necessary dependencies for testing with Vitest and Testing Library.

1. **Install the testing dependencies**:

   ```bash
   npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

### Step 3: Configure Vitest for Testing

To configure Vitest for your project, follow these steps:

1. **Update `vite.config.js`**:
   Open `vite.config.js` and replace its content with the following code:

   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import fs from 'fs/promises';

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: './setup.js'
     },
     esbuild: {
       loader: 'jsx',
       include: /(src)\/.*\.jsx?$/,
       exclude: []
     },
     optimizeDeps: {
       esbuildOptions: {
         loader: { '.js': 'jsx' },
         plugins: [
           {
             name: 'load-js-files-as-jsx',
             setup(build) {
               build.onLoad({ filter: /(src)\/.*\.js$/ }, async (args) => ({
                 loader: 'jsx',
                 contents: await fs.readFile(args.path, 'utf8')
               }));
             }
           }
         ]
       }
     }
   });
   ```

2. **Create a setup file for Testing Library**:
   Create a new file named `setup.js` in the root of your project and add the following content:

   ```js
   import { expect, afterEach } from 'vitest';
   import { cleanup } from '@testing-library/react';
   import * as matchers from '@testing-library/jest-dom/matchers';

   expect.extend(matchers);

   afterEach(() => {
     cleanup();
   });
   ```

### Step 4: Write Tests for Your Components

Now that the setup is complete, let's write some tests for the `App` component.

1. **Create a test file**:
   Create a new file named `src/App.test.jsx` and add the following test code:

   ```typescript
   import { describe, it, expect } from "vitest";
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   describe("Renders main page correctly", () => {
       it("Should render the page correctly", () => {
           // Setup
           render(<App />);
           const h1 = screen.queryByText("Vite + React");

           // Expectations
           expect(h1).toBeInTheDocument();
       });
   });
   ```

### Step 5: Run Your Tests

To run the tests, use the following command:

```bash
npm run test
```

## TypeScript

### Step 1: Setup a React Project using Vite

First, you need to create a new React project using Vite. Follow the steps below:

1. **Create a new Vite project**:

   ```bash
   npm create vite@latest
   ```

   - You will be prompted to provide a project name (e.g., `react-vitest`).
   - Select the framework as `React` and the variant as `TypeScript`.

2. **Navigate to the project directory**:

   ```bash
   cd react-vitest
   ```

3. **Install project dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   You should see the development server running, indicating that the basic project setup is complete.

### Step 2: Add Dependencies for Testing

Next, you need to add the necessary dependencies for testing with Vitest and Testing Library.

1. **Install the testing dependencies**:

   ```bash
   npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
   ```

### Step 3: Configure Vitest for Testing

To configure Vitest for your project, follow these steps:

1. **Update `vite.config.ts`**:
   Open `vite.config.ts` and replace its content with the following code:

   ```typescript
   /// <reference types="vitest" />
   /// <reference types="vite/client" />

   import react from '@vitejs/plugin-react';
   import { defineConfig } from 'vite';

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ['src/setupTest.ts']
     }
   });
   ```

2. **Update `package.json` scripts**:
   Extend the `scripts` section in `package.json` with the following code:

   ```json
   "scripts": {
       "test": "vitest",
       "coverage": "vitest run --coverage"
   }
   ```

3. **Create a setup file for Testing Library**:
   Create a new file named `src/setupTest.ts` and add the following content:

   ```typescript
   // jest-dom adds custom jest matchers for asserting on DOM nodes.
   // allows you to do things like:
   // expect(element).toHaveTextContent(/react/i)
   // learn more: https://github.com/testing-library/jest-dom
   import '@testing-library/jest-dom';
   ```

4. **Include the setup file in `tsconfig.json`**:
   Open `tsconfig.json` and include the path to the setup file by adding it to the `include` array:

   ```json
   "include": ["src", "./setupTest.ts"]
   ```

### Step 4: Write Tests for Your Components

Now that the setup is complete, let's write some tests for the `App` component.

1. **Create a test file**:
   Create a new file named `src/App.test.tsx` and add the following test code:

   ```typescript
   import { describe, it, expect } from "vitest";
   import { render, screen } from "@testing-library/react";
   import App from "./App";

   describe("Renders main page correctly", () => {
       it("Should render the page correctly", () => {
           // Setup
           render(<App />);
           const h1 = screen.queryByText("Vite + React");

           // Expectations
           expect(h1).toBeInTheDocument();
       });
   });
   ```

### Step 5: Run Your Tests

To run the tests, use the following command:

```bash
npm test
```

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
