@@ -0,0 +1,49 @@

# Day 2 Orientation

## Check Version of the Ember CLI

- `ember --version`

Output:

```bash
ember-cli: 4.9.2
node: 16.13.0
os: win32 x64
```

## Day 2 Overview

Today i have to create a new Ember application named `super-rentals`.

- `ember new super-rentals --lang en`

**--lang** is used to set the language of the application. Following are the available languages:

- en, en-us, en-gb, etc.

## Starting and Stopping the Development Server

When we create a new Ember application, it comes with a development server. We can start the development server by running the following command:

- `ember serve` or `ember s` or `ember server`

We can stop the development server by pressing `Ctrl + C` in the terminal.

## Editing Files and Live Reload

When we start the development server, it will watch for changes in the files. If any changes are made to the files, it will automatically reload the browser.

# For reduce the time for creating a new project, we can skip the installation of the default packages.

- `ember new super-rentals --skip-npm --skip-bower`

After that, we can install the required packages.

- `npm install`
- `yarn install`
- `pnpm install`- faster than npm and yarn

## For add assets like images, fonts, etc.

- For add assets like images, fonts, etc. we can use the `public` folder. After that, we can access the assets by using the `rootURL` property. For example, if we have an image named `logo.png` in the `public` folder, then we can access it by using the following URL:
  - `http://localhost:4200/logo.png`

## For add the CSS files

- For add the CSS files, we can use the `app/styles` folder.
- For add the CSS files in the `app/styles` folder, we can use the following command:
  - `ember generate component <component-name> --style <style-type>`
  - For example, if we want to add the CSS file in the `app/styles` folder, then we can use the following command:
    - `ember generate component <component-name> --style css`

## Defining the Routes in the Application

- For define the routes in the application, we can use the `app/router.js` file.
- For define the routes in the application, we can use the following command:
  - `ember generate route <route-name>`
  - For example, if we want to define the `about` route in the application, then we can use the following command:
    - `ember generate route about`
  - After that, we can access the `about` route by using the following URL:
    - `http://localhost:4200/about`
  - In the `app/router.js` file, we can define the routes by using the following code:
    - `this.route('about');`
  - In the `app/router.js` file, we can define the nested routes by using the following code: -
  ```javascript
  this.route('about', function () {
    this.route('contact');
  });
  ```

# Defining Routes with custom path

- For define the routes with custom path in the application, we can use the following code:
  - `this.route('about', { path: '/about-us' });`
- For define the nested routes with custom path in the application, we can use the following code:
  ```javascript
  this.route('about', { path: '/about-us' }, function () {
    this.route('contact', { path: '/contact-us' });
  });
  ```

## Defining the Templates in the Application

- For define the templates in the application, we can use the `app/templates` folder.
- For define the templates in the application, we can use the following command:
  - `ember generate component <component-name> --with-template`
  - For example, if we want to define the `about` template in the application, then we can use the following command:
    - `ember generate component about --with-template`
  - After that, we can access the `about` template by using the following URL:
    - `http://localhost:4200/about`
  - In the `app/templates` folder, we can define the templates by using the following code:
    - `<h1>About</h1>`
  - In the `app/templates` folder, we can define the nested templates by using the following code: - `<h1>About</h1>
{{outlet}}`

## Defining the Components in the Application

- For define the components in the application, we can use the `app/components` folder.
- For define the components in the application, we can use the following command:
  - `ember generate component <component-name>`
  - For example, if we want to define the `rental` component in the application, then we can use the following command:
    - `ember generate component rental`
  - After that, we can access the `rental` component by using the following code:
    - `<Rental />`
  - In the `app/components` folder, we can define the components by using the following code:
    - `<h1>Rental</h1>`
  - In the `app/components` folder, we can define the nested components by using the following code: - `<h1>Rental</h1>
{{yield}}`

## Linking pages with the <LinkTo> component

- For linking pages with the `<LinkTo>` component, we can use the following code:

  - `<LinkTo @route="about">About</LinkTo>`
    - `<LinkTo>` is a built-in component in Ember.
    - @route is used to define the route.
    - "about" is the name of the route.
    - "About" is the text that will be displayed on the page.

- For linking pages with the `<LinkTo>` component, we can use the following code:
  - `<LinkTo @route="about" @model={{this.model}}>About</LinkTo>`
    - @model is used to define the model.
    - this.model is the name of the model.
- This `<LinkTo>` is work like the `<a>` tag with the `href` attribute.
  - Example:
    - `<LinkTo @route="about" @model={{this.model}}>About</LinkTo>`
    - `<a href="/about">About</a>`

# FAQ

## What is assets folder?

- The assets folder is used to store the static files like images, fonts, etc.

## What is the difference between the `ember new` and `ember init` command?

- The `ember new` command is used to create a new Ember application. The `ember init` command is used to initialize the existing Ember application.

## What is Route?

- The route is used to define the URL in the application. Like if we want to define the `about` route in the application, then we can use the following code:
  - `this.route('about');`
- In the `app/router.js` file, we can define the nested routes by using the following code: -
  ```javascript
  this.route('about', function () {
    this.route('contact');
  });
  ```
- To access the `about` route, we can use the following URL:
  - `http://localhost:4200/about`

## What is Template?

- The template is used to define the HTML in the application. Like if we want to define the `about` template in the application, then we can add about.hbs file in the `app/templates` folder. After that, we can use the following code in the `about.hbs` file:
  - `<h1>About</h1>`
- In the `app/templates` folder, we can define the nested templates by using the following code: -
  ```javascript
  <h1>About</h1>;
  {
    {
      outlet;
    }
  }
  ```
- To access the `about` template, we can use the following URL:
  - `http://localhost:4200/about`

## What is Component?

- The component is used to define the HTML in the application. Like if we want to define the `rental` component in the application, then we can add rental.hbs file in the `app/components` folder. After that, we can use the following code in the `rental.hbs` file:
  - `<h1>Rental</h1>`
- In the `app/components` folder, we can define the nested components by using the following code: -
  ```javascript
  <h1>Rental</h1>;
  {
    {
      yield;
    }
  }
  ```
- To access the `rental` component, we can use the following code:
  - `<Rental />`

## What is `<LinkTo>` component?

- The `<LinkTo>` component is used to define the link in the application. Like if we want to define the `about` link in the application, then we can use the following code:
  - `<LinkTo @route="about">About</LinkTo>`
- In the above code, @route is used to define the route. "about" is the name of the route. "About" is the text that will be displayed on the page.
- It is work like the `<a>` tag with the `href` attribute.
  - Example:
    - `<LinkTo @route="about" @model={{this.model}}>About</LinkTo>`
    - `<a href="/about">About</a>`
