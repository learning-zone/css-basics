# CSS Coding Practice

<br/>

## Q. ***How to draw a circle inside Square using single DIV in css?***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Circle inside Square</title>
  </head>
  <style>
    .rectangle {
        border-radius: 10px;
        display: inline-block;
        width: 205px;
        height: 205px;
        border: 1px solid #000;
        background-color: white;
    }
    .rectangle::before {
        display: block;
        position: absolute;
        left: 10px;
        top: 10px;
        content: '';
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #eee;
    }
    </style>
    <body>
        <div class="rectangle"></div>
    </body>
</html>
```

**Live Demo**: [circle inside Square](https://learning-zone.github.io/css-interview-questions/assets/files/circle.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to center align a div inside another div?***

```css
.container {
  width: 500px;
  height: 500px;
  background-color: red;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

**Live Demo**: [center div](https://learning-zone.github.io/css-interview-questions/assets/files/center-div.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to create a zebra striped table with CSS?***

To create a zebra-striped table, use the nth-child() selector and add a background-color to all even (or odd) table rows:

```css
tr:nth-child(even) {
    background-color: #f2f2f2
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make a fixed (non-scrolling) background image?***

In CSS, we can use the background-attachment property. The background attachment can be included in the shorthand background property, as in this example:

```css
body {
  background: white url(example.gif) fixed ;
  color: black ;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What elements will match each of the following CSS selectors?***

* div, ```p``` Selects all ```<div>``` elements and all <p> elements
* div ```p``` Selects all ```<p>``` elements that are anywhere inside a <div> element
* div > ```p``` Selects all ```<p>``` elements where the immediate parent is a <div> element
* div + ```p``` Selects all ```<p>``` elements that are placed immediately after a <div> element
* div ~ ```p``` Selects all ```<p>``` elements that are anywhere preceded by a <div> element

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to align image vertically in a division that spans vertically on the whole webpage?***

You can align an image vertically center inside a `<div>` by using the **CSS vertical-align** property in combination with the `display: table-cell;` on the containing div element.

Additionally, since CSS margin property is not applicable to `display: table-cell;` elements, so we\'ve wrapped the containing DIV with another DIV (`.outer-wrapper`) and applied margin on it. This solution will work even for images with greater height than containing DIV.

**Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <title>Vertically Center the IMG in a DIV with CSS</title>
  <style>
    .outer-wrapper {
      display: inline-block; 
      margin: 20px;
    }

    .frame {  
      width: 250px;
      height: 200px;
      border: 1px solid black;
      vertical-align: middle;
      text-align: center;
      display: table-cell;
    } 

    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      margin: 0 auto;
    }
  </style>
  </head>
<body>
    <h2>Vertically Center the IMG in a DIV with CSS</h2>
    <!-- Alignment of undersized image -->
    <div class="outer-wrapper">
        <div class="frame">
            <img src="../images/club.jpg" alt="Club Card">
        </div>
    </div>
</body>
</html>
```

**Live Demo**: [CSS vertical-align Property](https://learning-zone.github.io/css-interview-questions/assets/files/vertical-align.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to style every element which has an adjacent item right before it?***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Combinator</title>
    <style>
        div + p {
            background-color: yellow;
        }
    </style>
  </head>
<body>
    <div>
        <h2>My name is Donald</h2>
        <p>I live in Duckburg.</p>
    </div>

    <p>My best friend is Mickey.</p>
    <p>I will not be styled.</p>
</body>
</html>
```

**Live Demo**: [CSS Combinator](https://learning-zone.github.io/css-interview-questions/assets/files/combinator.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Write down a selector that will match any links end in .zip, .ZIP, .Zip etc.***

`[att$=val]` Represents an element with the att attribute whose value ends with the suffix “val”. If “val” is the empty string then the selector does not represent anything.

```css
a[href$=".zip" i]:after {
  content: '↓'
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Place a div to corner top-right of the page?***

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Position</title>
    <style>
      .topheader {
        position: relative;
        height: 20px;
      }

      .message {
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid;
      }
    </style>
  </head>
<body>
    <div class="topheader">
      <div class="message">Hello World!</div>
    </div>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***You have 3 div\'s. You have to align first div in right side and other 2 div’s in left side. Write CSS to achieve this?***

### **using flexbox**

```css
.example {
    display: flex;
    flex-direction: row;
}

.example > .a {order: 3; } /* Will be displayed third  */
.example > .b {order: 1; } /* Will be displayed second */
.example > .c {order: 2; } /* Will be displayed first  */
```

```html
<div class="example">
    <div class="a">First</div>
    <div class="b">Second</div>
    <div class="c">Third</div>
</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.***css media query code example***

```css
@media screen and (min-width: 769px) {
    /* STYLES HERE */
}

@media screen and (min-device-width: 481px) and (max-device-width: 768px) { 
    /* STYLES HERE */
}

@media only screen and (max-device-width: 480px) {
    /* STYLES HERE */
}
```

```css
@media only screen and (max-width: 1080px) {
  /* place here CSS for when the screen is less than 1080px wide */
  .card {
    width: 100%;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***background color gray opacity css code example***

```css
.transparent {
    background-color: rgba(255, 255, 255, 0.5);
}
.transparent {
    opacity: 0.5;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Place header at bottom of div***

```css
#header {
  position: relative;
  min-height: 150px;
}

#header-content {
  position: absolute;
  bottom: 0;
  left: 0;
}

#header, #header * {
  background: rgba(40, 40, 100, 0.25);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Gradient css background***

```css
/*From bottom to top*/

background: rgb(166,166,166);
background: linear-gradient(0deg, rgba(166,166,166,1) 0%, rgba(255,255,255,1) 29%);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make fixed background image in css***

```css
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Add space between flex items***

```css
.flex-gap {
  display: inline-flex;
  flex-wrap: wrap;
}

.flex-gap > div {
  margin: 6px; /* HERE WE ADD THE SPACE */
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to disable arrows from input type number?***

```css
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to get text to start a new line?***

```css
.break-word {
  word-wrap: break-word;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to select child element in css?***

```css
.parent > .immediate-child {
  color: red;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***minmax with repeat css grid***

```css
/* To achieve wrapping, we can use the auto-fit or auto-fill keywords. */

grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make text not selectable in css***

```css
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make text not highlightable in css***

```css
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q.***center wrapped flex children***

```css
.container {
  display: flex;
  
  justify-content: space-around;
  /* OR */
  justify-content: space-evenly;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***create a round button using css***

```css
.btn {
  display:block;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 1px solid red; 
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How apply blur in background-image***

```css

backdrop-filter: blur(10px);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***text-overflow ellipsis multiple lines***

```css
p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to create a fixed button at the bottom of page***

```css
#fixed_button {
    position: fixed;
    z-index: 999;
    right: 0.75rem;
    bottom: 0.75rem;
    display: none;
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 1.875rem;
    background: #4f3cda url("../images/up-arrow.png") no-repeat center 47%;
    background-size: auto;
    background-size: 1.125rem 1.125rem;
    text-indent: -9999px;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***center div in middle of page***

```css
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Sass @extend and Inheritance***

```css
.button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}

.button-submit  {
  @extend .button-basic;
  background-color: green;
  color: white;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css fade in example***

```css
/* Just add .fade-in class to element */

.fade-in {
  animation: fadeIn 2s;
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css set property with data attribute***

```css
div::after {
  content: attr(data-whatever);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css remove highlight when click***

```css
button:focus { outline: 0; }
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to select last nth child***

```css
#something a:nth-last-child(-n+3) {
    /*declarations*/
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
