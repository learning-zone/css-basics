## SCSS Interview Questions and Answers

#### SASS basic concepts
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