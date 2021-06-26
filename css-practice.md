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

## Q. ***How to style every element which has an adjacent item right before it?***
## Q. ***Write down a selector that will match any links end in .zip, .ZIP, .Zip etc.***

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
