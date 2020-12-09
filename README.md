# rat01

## React App Tutorial 01

## React (https://reactjs.org/)

## Bable (https://babeljs.io/)

### get image (https://unsplash.com/) 

### font-awesome (https://cdnjs.com/libraries/font-awesome) 

## Project setup
```
npx create-react-app rat01

cd rat01

npm run start
```

### tailwind css setup (https://tailwindcss.com/) 
```
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

npx tailwindcss init

/* ./your-css-folder/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

npm install postcss-cli

/* package.json */
"build:css": "postcss src/assets/css/tailwind.css -o src/assets/css/style.css",
"start": "npm run build:css && react-scripts start",
```