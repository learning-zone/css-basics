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
#### Q. What are the SASS basic features?
* **Variables**: Variables in SASS start with $ sign
* **Nesting**: CSS lacks visual hierarchy while working with child selectors. You have to write selectors and their combinations in separate lines. Nesting provides a visual hierarchy as in the HTML and increases the readability.
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