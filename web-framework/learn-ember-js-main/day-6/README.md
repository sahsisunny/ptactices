# Day 6 | Interactive Components

## Adding Behavior to Components with Classes

- To add behavior to the component we can use the javascript class.
- In the javascript class we can define the properties and methods. and we can use the properties and methods in the template.

### Generating a component with class

- Following command is used to generate the component with class :

  ```bash
  ember generate component -class <namespace-name>/<component-name>
  ```

- After generating the component class in javascript file we can see the following code :

  - `app/components/<namespace-name>/<component-name>.js`

  ```js
  import Component from "@glimmer/component";
  export default class RentalImageComponent extends Component {}
  ```
