## SCSS Interview Questions and Answers

#### Q. What are Sass, Less, and Stylus? Why do people use them? How does something like Compass relate to Sass?
They are CSS preprocessors. They are an abstraction layer on top of CSS. They are a special syntax/language that compile down into CSS. They make managing CSS easier, with things like variables and mixins to handle vendor prefixes (among other things). They make doing best practices easier, like concatenating and compressing CSS.

#### Q. What is file splitting and why should you use it?
File splitting helps organize your CSS into multiple files, decreasing page load time and making things easier to manage. How you decide to split them up is up to you, but it can be useful to separate files by component. For example, we can have all button styles in a file called `_buttons.scss` or all your header-specific styles in a file called `_header.scss`, main file, say _app.scss, and we can import those files by writing @import 'buttons';

#### Q. What are variables used for?
Variables are super useful for things like colors, fonts, font sizes, and certain dimensions, as you can be sure always using the same ones, not 4 different versions of roughly the same color.
```css
$primary-font-stack: 'Helvetica', sans-serif;
$primary-color: #fccd48;

body {
    color: $primary-color;
    font-family: $primary-font-stack;
}
```
#### Q. What are the SCSS basic features?
* **Variables**: Variables in SCSS start with `$` sign
```css
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
When the Sass is processed, it takes the variables we define for the `$font-stack` and `$primary-color` and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

* **Nesting**: Basic nesting refers to the ability to have a declaration inside of a declaration.
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
* **Partials**: The partial Sass files contain little snippets of CSS that can be included in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the `@use` rule.

* **mixins**: mixins are used to include a bunch of properties or group declarations together. It allows for the easy reuse of blocks of code. Use include to
* **Inheritance**: extends are useful for sharing a generic definition with selectors rather than copying it in.
* If/Else Statements and loops
* **import**: separating your codes in small pieces is helpful for expressing your declarations and increasing maintainability and control over the codebase.
* **Math operations**: can be used for standard arithmetic or unit conversions.

#### Q. Explain the @include, @mixin, @function functions and how they are used. What is %placeholder?
    
* ```@mixin``` A mixin lets you make groups of CSS declarations that you want to reuse throughout your site

```css
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
```

```css
.box { @include border-radius(10px); }
```

* ```@extend``` directive provides a simple way to allow a selector to inherit/extend the styles of another one.
```css
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
```
        

```%placeholder``` are classes that aren’t output when your SCSS is compiled
```css
%awesome {
    width: 100%;
    height: 100%;
}
body {
    @extend %awesome;
}
p {
    @extend %awesome;
}
```

```css
/* Output */
body, p {
    width: 100%;
    height: 100%;
}
```

#### Q. List out the differences between LESS and Sass?
|LESS	|Sass    |
|-----|--------|
|– LESS uses JavaScript and processed at client-side|	– Sass is coded in Ruby and thus processed to server-side
|– Variable names are prefaced with the @symbol	    |– Variable name are prefaced with $ symbol
|– LESS does not inherit multiple selectors with one set of properties | – Sass inherits multiple selectors with one set of properties |
|– LESS does not work with “unknown” units neither it returns syntax error notification for incompatible units or maths related syntax error|	– Sass allows you to work with “unknown” units also returns a syntax error notification for incompatible units|

#### Q. Why Sass is considered better than LESS?
* Saas allows you to write reusable methods and use logic statements, e., loops, and conditionals
* Saas user can access Compass library and use some awesome features like dynamic sprite map generation, legacy browser hacks * and cross-browser support for CSS3 features
* Compass also allows you to add an external framework like Blueprint, Foundation or Bootstrap on top
* In LESS, you can write a basic logic statement using a ‘guarded mixin’, which is equivalent to Sass if statements
* In LESS, you can loop through numeric values using recursive functions while Sass allows you to iterate any kind of data
* In Sass, you can write your own handy functions
