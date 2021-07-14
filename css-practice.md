# CSS Coding Practice

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

**Live Demo**: [Circle inside Square](https://codepen.io/learning-zone/pen/zYwKbZo)

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

**Live Demo**: [center div](https://codepen.io/learning-zone/pen/eYWdXMd)

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

**Live Demo**: [Zebra Striped](https://codepen.io/learning-zone/pen/zYwoxbM)

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

**Live Demo**: [CSS Position](https://codepen.io/learning-zone/pen/wvdoBVd)

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

**Live Demo**: [Flexbox Example](https://codepen.io/learning-zone/pen/poPNJzL)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***CSS Media Query Example***

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

**Live Demo**: [CSS Media Query](https://codepen.io/learning-zone/pen/poPNJjV)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***CSS background-color gray opacity css code example***

```css
.transparent {
    background-color: rgba(255, 255, 255, 0.5);
}
.transparent {
    opacity: 0.5;
}
```

**Live Demo**: [CSS Opacity](https://codepen.io/learning-zone/pen/OJmbVNm)

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

## Q. ***CSS Gradient Example***

```css
/*From bottom to top*/

.container {
  width: 500px;
  padding: 4px;
  background: linear-gradient(to top, red, yellow); 
}
```

**Live Demo**: [CSS Gradient](https://codepen.io/learning-zone/pen/mdmOJWR)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to make fixed background image in css***

```css
body {
  background-image: url("../images/horse.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
```

**Live Demo**: [CSS fixed-background](https://codepen.io/learning-zone/pen/GRmNgbZ)

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

**Live Demo**: [Flexbox Space](https://codepen.io/learning-zone/pen/ZEKBGoZ)

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

**Live Demo**: [Number Input Field](https://codepen.io/learning-zone/pen/vYmyOax)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to get text to start a new line?***

```css
.break-word {
  word-wrap: break-word;
}
```

**Live Demo**: [CSS word-wrap](https://codepen.io/learning-zone/pen/GRmNJwM)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to select child element in css?***

```css
.parent > .immediate-child {
  color: red;
}
```

**Live Demo**: [CSS select child element](https://codepen.io/learning-zone/pen/abWBOXv)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***minmax with repeat css grid***

```css
/* To achieve wrapping, we can use the auto-fit or auto-fill keywords. */

grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
```

**Live Demo**: [CSS grid-template-columns](https://codepen.io/learning-zone/pen/mdmOJYq)

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

**Live Demo**: [Not Selectable Text](https://codepen.io/learning-zone/pen/gOWLaLj)

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

**Live Demo**: [flex children](https://codepen.io/learning-zone/pen/oNWYjWG)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***create a rounded corner button using css***

```css
.btn {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
```

**Live Demo**: [Rounded Corner Button](https://codepen.io/learning-zone/pen/NWjbGaV)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How apply blur in background-image***

```css
.background-image {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  background-image: url('../images/lL6tQfy.png');
  width: 1200px;
  height: 800px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
```

**Live Demo**: [blur in background-image](https://codepen.io/learning-zone/pen/poPNqoy)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***CSS text-overflow ellipsis multiple lines***

```css
p {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  border: 1px solid #ddd;
  margin: 0;
}
```

**Live Demo**: [CSS text-overflow ellipsis](https://codepen.io/learning-zone/pen/NWjbeqW)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to place a fixed button at bottom right of the screen in html***

```css
.feedback {
  background-color : #31B0D5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}
```

```html
<div id="mybutton">
  <button class="feedback">Feedback</button>
</div>
```

**Live Demo**: [fixed button](https://codepen.io/learning-zone/pen/ExmNGVw)

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

**Live Demo**: [center div](https://codepen.io/learning-zone/pen/dyWOwpq)

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

**Live Demo**: [Sass @extend](https://codepen.io/learning-zone/pen/MWmbZvm)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css fade in example***

```css
.fade-in-image {
  animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
```

**Live Demo**: [CSS fade-in](https://codepen.io/learning-zone/pen/MWmJEaQ)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css get property with data attribute***

```html
<div data-content="data-attribute example in css"></div>
```

```css
[data-content]:before {
  content: attr(data-content);
}
```

**Live Demo**: [CSS data-attribute](https://codepen.io/learning-zone/pen/eYWgGxx)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***css remove highlight when click***

```css
button:focus { outline: 0; }
```

**Live Demo**: [CSS outline](https://codepen.io/learning-zone/pen/oNWBGrb)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to select last nth child***

```html
<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph.</p>
<p>The fifth paragraph.</p>
```

```css
p:nth-last-child(3) {
  background-color: yellow;
}
```

**Live Demo**: [CSS nth-last-child()](https://codepen.io/learning-zone/pen/poPRdoQ)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***can i call mixin in html***

```css
/* sass mixin */

@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(45deg)); }
```

**Live Demo**: [SASS @mixin()](https://codepen.io/learning-zone/pen/OJmWOVz)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **css rotate text**

```css
/* Answer to: "css rotate text" */

.rotate {

  transform: rotate(-90deg);

  /* Legacy vendor prefixes that you probably don't need... */
  /* Safari */
  -webkit-transform: rotate(-90deg);
  /* Firefox */
  -moz-transform: rotate(-90deg);
  /* IE */
  -ms-transform: rotate(-90deg);
  /* Opera */
  -o-transform: rotate(-90deg);
  /* Internet Explorer */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
```

**Live Demo**: [CSS rotate()](https://codepen.io/learning-zone/pen/LYyxOjx)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **css blink**

```css
.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
```

```html
<div class="blink">Blink Text Example!</div>
```

**Live Demo**: [CSS Animation](https://codepen.io/learning-zone/pen/NWjdwwE)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **css fix nav bar to top**

```css
.navigation {
   /* fixed keyword is fine too */
   position: sticky;
   top: 0;
   z-index: 100;
   /* z-index works pretty much like a layer:
   the higher the z-index value, the greater
   it will allow the navigation tag to stay on top
   of other tags */
}
```

**Live Demo**: [Sticky/Affix Navbar](https://codepen.io/learning-zone/pen/gOWgXzK)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **Change input border color when selected**

```css
input:focus {
	outline: none;
  	border: 1px solid red;
}
```

**Live Demo**: [CSS focus](https://codepen.io/learning-zone/pen/eYWgePp)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **CSS import otf font**

```css
@font-face {
    font-family: GraublauWeb;
    src: url("path/GraublauWeb.otf") format("opentype");
}
```

**Live Demo**: [CSS @font-face](https://codepen.io/learning-zone/pen/YzVNEge)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **css shadow on image**

```css
div.polaroid {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
```

**Live Demo**: [CSS box-shadow](https://codepen.io/learning-zone/pen/eYWgewZ)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **sass conditional code**

```css
/** How to create an if-else clause in sass

* First create a mixin, which is like a function in javaScript
* And pass in an optional parameter to the mixin to hold the value
* js ==> if, else if, else, while sass is ==> @if, @else if, @else
* No brackets surrounding each condition in sass
* Then pass in your block of styles to optionally load.
* @mixin variable-name(optional parameter(s))
*
**/

  @mixin border-stroke($val){
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else{
      border: none;
    }
  }

  // Usage
  // Call a mixin using the @include followed by the mixin name

  h2{
    @include border-stroke(medium)
  }
```

```css
/**
* scss conditional style
* 
**/

$p: 3;

@while $p < 5 {
  .item-#{$p} {
        color: red;   
        $p : $p + 1;
    }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. **How to disable mouseover in css**

```css
.noHover{
    pointer-events: none;
}
```

```html
<a href='' class='btn noHover'>You cant touch ME !</a>
```

**Live Demo**: [CSS pointer-events](https://codepen.io/learning-zone/pen/ExmZoxW)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
