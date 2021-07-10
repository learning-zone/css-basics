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

[Live Example](https://learning-zone.github.io/css-interview-questions/circle.html)

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

[Live Example](https://learning-zone.github.io/css-interview-questions/center-div.html) 

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

## Q. Place a div to corner top-right of the page?

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

#### Q. ***What are navigation bars in CSS?***
#### Q. ***How to overrule underlining Hyperlinks?***
#### Q. ***What happens if 100% width is used along with floats all across the page?***
#### Q. ***How can the gap under the image be removed?***
#### Q. ***How to scroll a page with scrollbar in css?***
#### Q. ***How to set responsive background image***
#### Q. ***Align p tag to bottom of div***
#### Q. ***css selector element with parent of class***
#### Q. ***css background linear grad***
#### Q. ***css body background fixed***
#### Q. ***Remove spacing between flex items***
#### Q. ***How to remove default number input arrow?***
#### Q. ***inject html to play youtube video in background***
#### Q. ***strikethrough text tag***
#### Q. ***javascript elipsis***
#### Q. ***css overflow how to get text to start a new line***
#### Q. ***How to add child element in css***
#### Q. ***css ränder abrunden***
#### Q. ***css separacion entre letras***
#### Q. ***color last letter of H1*** 
#### Q. ***minmax with repeat css grid***
#### Q. ***How to display word-wrap:break-word; to left*** 
#### Q. ***css scrollbar in margin not padding*** 
#### Q. ***How to remove number up down buttons input in html*** 
#### Q. ***center wrapped flex children***

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
