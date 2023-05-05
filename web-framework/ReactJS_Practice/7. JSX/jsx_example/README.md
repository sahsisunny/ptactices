# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# WHat is JSX?

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX is not required for React, but it is recommended.

### How to use JSX?

- JSX is written inside the render() method.
- JSX must have one outermost element.
- JSX can be written in three ways:
  - JSX expression
  - JSX element
  - JSX attribute

### JSX Expression

- A JSX expression is any valid JavaScript expression that can be used inside the JSX.
- A JSX expression must be enclosed in curly braces.
- A JSX expression can be used inside the JSX element or JSX attribute.

### JSX Element

- A JSX element is a combination of one opening tag, content, and one closing tag.
- A JSX element must be enclosed in parentheses if it is written on multiple lines.
- A JSX element can be used inside the JSX element or JSX attribute.

### JSX Attribute

- A JSX attribute is a combination of attribute name and attribute value.
- A JSX attribute must be enclosed in curly braces.
- A JSX attribute can be used inside the JSX element or JSX attribute.

### How to use JavaScript in JSX?

- JavaScript can be used inside the JSX.
- JavaScript must be enclosed in curly braces.
- JavaScript can be used inside the JSX element or JSX attribute.

### How to use comments in JSX?

- Comments can be used inside the JSX.
- Comments must be enclosed in curly braces.
- Comments can be used inside the JSX element or JSX attribute.
- Example:

```
render() {
    return (
      <div>
        {/* This is a comment */}
        <h1>Hello World!</h1>
      </div>
    );
  }
```

#### Without JSX

- Without JSX, React code looks like this:

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

- it is not easy to read and write.
- it is not easy to add HTML in React.
- it is not easy to add JavaScript in React.
