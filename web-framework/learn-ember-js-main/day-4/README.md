# Day 4 Component Basics

## What is Components in EmberJS?

Components are the building blocks of any Ember application. They are reusable pieces of UI that can be used to build out an application. Components are the primary way to create reusable UI.

## How to create a component in EmberJS?

To create a component in EmberJS, we need to use the `ember generate component` command. This command will create a component file and a template file for the component.

```bash
ember generate component <component-name>
```

Example:

```bash
ember generate component jumbo
```

Add following code in `jumbo.hbs` file.

```html
<div class="jumbo">
  <div class="right tomster"></div>
  {{yield}}
</div>
```

And also we create a component file and a template file manually.Create a component file in `nav-bar.hbs` in `app/components` folder.

```js
<nav class="menu">
  <LinkTo @route="index" class="menu-index">
    <h1>SuperRentals</h1>
  </LinkTo>
  <div class="links">
    <LinkTo @route="about" class="menu-about">
      About
    </LinkTo>
    <LinkTo @route="contact" class="menu-contact">
      Contact
    </LinkTo>
  </div>
</nav>
```

And

## how to use a component in EmberJS?

1. Passing content to a component
2. Using the application template

### Passing content to a component

We can pass content to a component by using the `{{yield}}` helper. The `{{yield}}` helper is used to render the content that is passed to the component.

```js
<Jumbo>
  <h2>About Super Rentals</h2>
  <p>
    The Super Rentals website is a delightful project created to explore Ember.
    By building a property rental site, we can simultaneously imagine traveling
    AND building Ember applications.
  </p>
  <LinkTo @route='contact' class='button'>Contact Us</LinkTo>
</Jumbo>
```

     - `{{yield}}` helper is used to render the content that is passed to the component.
     - `<Jumbo>` is a component name. in this tag "J" is capital letter. so it is a component. It is act like a tag.

### Using the application template

We have Navbar to use in all the pages. So we can use the application template to render the component. and we can also add <NavBar/> in all the pages. But it is not a good practice. So we can use the application template to render the component.

In application.hbs file, we can add the component.

```js
<NavBar />;
{
  {
    outlet;
  }
}
```

     - `<NavBar />` is a component name. in this tag "N" is capital letter. so it is a component. It is act like a tag.
     - `{{outlet}}` is a helper. It is used to render the content of the page.
