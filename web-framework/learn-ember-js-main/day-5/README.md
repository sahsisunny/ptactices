# Day 5 | More About Components

## Generating a component

- To generating the component we can use the command :
  ```bash
  ember generate component <directory-name>/<component-name>
  ```
  - After generating the component we can see two files are created :
    - `app/components/<component-name>.hbs`
    - `tests/integration/components/<component-name>-test.js`
  - In `<component-name>.hbs` file we can write the template for the component.
  - In `<component-name>-test.js` file we can write the test cases for the component.

### Using the component in the template

- To use the component in the template we can use the following syntax :
  ```js
  <ComponentName />
  ```
  - First letter of the component name should be in capital. because ember will treat the component name as a html tag. If we use the component name in small letter then it will treat as a normal javascript variable.

## Organizing code with Namespaces Components

### Generating a namespace component

- `ember generate component <namespace-name>/<component-name>`
- After generating the component we can see two files are created :
  - `app/components/<namespace-name>/<component-name>.hbs`
  - `tests/integration/components/<namespace-name>/<component-name>-test.js`
- In `<component-name>.hbs` file we can write the template for the component.
- In `<component-name>-test.js` file we can write the test cases for the component.

- To organize the code we can use the namespace components. means we can create the component in the folder. and we can use the component in the template by using the following syntax :
  ```js
  <Namespace::ComponentName />
  ```

### Example

- We can create the component in the folder like this :

  ```bash
  ember generate rntal/image
  ```

  - After generating the component we can see two files are created :
    - `app/components/rental/image.hbs`
    - `tests/integration/components/rental/image-test.js`
  - In `image.hbs` file we can write the template for the component.
  - In `image-test.js` file we can write the test cases for the component.

- In rental/image.hbs file we can write the template for the component like this :
  ```js
  <div>
    <img ...attributes>
  </div>
  ```
  -To use the component in the template we can use the following syntax :
  ```js
  <Rental::Image
    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
    alt="A picture of a house"
  />
  ```

## ...attributes

- The `...attributes` is a special syntax that allows us to pass attributes to the component. means we can pass the attributes to the component.
- to use the `...attributes` we can use the following syntax :
  ```js
  <ComponentName ...attributes />
  ```
- Example :
  ```js
  <Rental::Image
    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
    alt="A picture of a house"
  />
  ```
