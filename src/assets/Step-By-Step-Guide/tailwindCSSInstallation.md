# TAILWINDCSS INSTALLATION GUIDE

## STEP 01
- Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.
- At the terminal of your project directory, enter the following command:
```bash
npm install -D tailwindcss postcss autoprefixer
```
- This command install tailwindcss into your project.

## STEP 02

- To generate your tailwind.config.js and postcss.config.js files, enter the command:
```bash
npx tailwindcss init -p
```

## STEP 03

- After installing tailwindcss and its peer dependencies, and generating your tailwind.config.js and postcss.config.js files, the next step is to configure your template paths.
- And this is achieved by adding the code snippet below to your tailwindcss.config file:
```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

## STEP 04
- After the template path configuration, you then go ahead to add the Tailwind directives to your CSS.
- This can be achieved by adding the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## STEP 05
- After the addition, you then go ahead to run the command below to start building your react-tailwind project:
```bash
npm run dev
```