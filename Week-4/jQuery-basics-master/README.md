## An intro to document.ready

Let's run through the basics of jQuery, and most importantly how to setup a basic webpage that uses jQuery to make our page dynamic. I'll start with a little bit about jQuery. jQuery is a javascript library. It adds all sorts of cool functions that would take ages to write out ourselves using vanilla javascript, in an easy-to-use library that we access using either ```jQuery``` or just ```$.``` don't worry too much about that now though, I'll get into the syntax later.

### Initial Setup

First up, we're going to create a basic template for out jQuery. We'll start by making a new directory called jQuery-basics. cd into that directory and create 3 files, call them index.html, styles.css and main.js. The project structure should look like this:

```
 |-index.html
 |-main.js
 |-styles.css
```

### Building the Html

Next, we are going to build a basic html page. Within this page we are going to link up our css file, our javascript file and finally add in jQuery. First, create a basic layout with html, like I've got underneath. With the title being 'jQuery-basics'

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery-basics</title>
</head>
<body>

</body>
</html>
```

So here is our basic layout. However, we currently have only html. So what we need is a link to allow us to use our css files, and our javascript files. Within the head of the body, add in a link to our css file.

```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

Our css is now linked up, and any styles or css rules we put into our styles.css file, will now show up and be useable by our main page. Next up, let's go ahead and link up our javascript file, main.js. To do this we add in a script tag just before the closing body tag in our code.

```html
<script type="text/javascript" src="main.js"></script>
```

Our index.html document will now (hopefully) look something like this :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery-basics</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

### Linking up our local files

BOOM. Html layout is done, our local files are linked... or are they? As a general rule, I always like to ensure that theses files are actually linked. So add a basic css rule to the styles.css, like :

```css
body {
  background-color: blue;
}
```

and add a console.log into the main.js file :

```js
console.log('sanity check')
```

Now, if we open our page, the background is blue and if we open the console in our browser (alt + cmd + i) and click on the console tab, we should see ```sanity check``` printed out. If this doesn't work, then go back through the steps above and make sure all your code is correct, be sure to check spelling!!!


### Bring in jQuery

Okay. So you've got this far, things are going pretty good. We could write all sorts of crazy javascript stuff, but why not make our lives a little easier and use jQuery instead. jQuery is written in javascript, and abstracts out a whole load of different commands, allowing us to perform a ton of cool tasks, with much less code then vanilla JS. In order to use this crazy bag of tricks, we need to bring jQuery code into our file.

First up, we need a CDN. CDN stands for Content Delivery Network. It basically provides a server that stores code on the internets, as opposed to having it locally on our machine. There are a few benefits to this. a) It means we don't have to download jQuery into every single project we do and store it on our machine and b) It gets cached in your browser. This means that if you visit another website that also uses that same CDN, your browser will already have it saved and it will load faster.

Great, but how do we use it? We include it in a script tag. Just like we added a link to our local javascript file, we can add a link to the jQuery CDN online. To do that, you need to go to [The jQuery Website](https://code.jquery.com/) and grab a minified version of the code you want. For this case, use jQuery Core 2.2.0 and click on the minified link. This will bring you to a page with a garbled mess of code. All you need to do is copy the link. This link is what goes into your script tag.

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
```

This tag, has to be above our other script tag. If we don't put our jQuery tag first, when we open our webpage, the first thing the browser will read is our main.js file. If we are trying to use any jQuery functions in our main.js, the browser won't know where to get them from as we havent told it where to get jQuery from yet. So the final html file looks like this :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery-basics</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>


  <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

### jQuery Fun Times!!!

This setup will now allow us to use jQuery in our main.js file. YAY. So we can do all sorts of things that took lines and lines and lines of javascript, we can now do with much nicer, cleaner code. The first thing to do with jquery is to build a wrapper function that will only call our jQuery functions once everything else has loaded. The reason for this is that we only want our jQuery functions to fire once everything on the page has been loaded. If we're loading lots of images, and want to manipulate them with jQuery, we need to wait until they are all loaded before we do anything else. Otherwise, there can be all sorts of crazy errors that are easily avoidabe using the following code :

```js
$(document).on('ready', function() {
  console.log('sanity check');
});
```

Okay. So let's run through this code. First, the dollar sign. This is letting the browser know that whatever follows, is going to be jQuery. It is a shorthand way of writing

```js
jQuery(document)
```

Because we have the jQuery CDN included in our script tag above our tag with main.js, the browser knows how to read this syntax and knows that whatever follows, will be jQuery. Excellent. In this case, it is acting as a selector. What it is selecting is the whole document, and we attach an event to that document. We are saying once the document is ready, i.e. the whole page has loaded, then run everything inside this function. So log 'sanity check' to the console.


### More Exciting Things!!!

Alright. Let's get crazy. I'm now going to add a button to my html, give it an id, and get it to change the background colour of my page. step 1 : add a button to the html, with an id of 'myButton'

```html
 <button id="myButton">
    <h1>Press Me To Do Things!!!<h1>
  </button>
```

We now have a big button on our web page, but it doesn't actually do anything!!! So let's sort that out. Moving back into our javascript, we have to first got inside our document.ready function and select the button. Why? Because we want the button to perform an action when we click it, we first have to tell our browser what element on the page is going to respond in which way. With jQuery, selecting elements becomes really easy. In order to select an element with an id 'myButton', we write the following :

```js
$('#myButton')
```

The hash symbol lets jQuery know we are searching for an id, as opposed to a class or a just an element. If my class was 'myButtonClass', we would select it like this, with a full stop before the class name :

```js
$('.myButtonClass')
```

And if we just wanted to grab all button elements, we don't need anything before the name at all :

```js
$('button')
```
But we're going to be using our specific id, which is just on one element. Now we want to get that button to do something when we click it. First up, the jQuery documentation is the starting point.

[jQuery](https://api.jquery.com/)

We want to add an on click event. There are a couple of ways of doing this, but I prefer to use the following syntax :

```js
$('#myButton').on('click', function() {

  })
```

There are other ways of doing this, using just ```.click()``` but for this example, we'll go with the ```.on()``` way of writing this. So now we've selected our button, written out the skeleton for out function, and we're ready for the next step.


### Click Away

I always like to make sure I've added the selectors correctly and test that the function itself is firing so I've added a console.log to check that when I click the button, this function fires.

```js
$('#myButton').on('click', function() {
    console.log('Button Clicked');
  })
```

Now reload the page and open up the console. You should see on the first line 'sanity check' printed out. This is from our document readygfunction. Next, click on the button. Underneath, on the next line, you should see 'Button Clicked' printed out. So we have now successfully added an event listener to that button. Every time we click the button, it will perform the task we've specified. So right now, every time we click that button, it will print out 'Button Clicked'.

This is all well and good, but why not do something a little more exciting. How about a new background colour? We can again search the jQuery docs for changing css background. The command is simply ```.css()``` So let's add this into our on.click :

```js
$('#myButton').on('click', function() {
    $('body').css('background-color', 'red');
  });
```

Again, we have the same syntax as before. The first part ```$('body')``` is selecting the body element of the page. After this we are adding the .css() function to change the elements css. We have passed it 2 arguments. 'background-color', because that is the css property we want to change, and then 'red', because that's the colour we want to change it to.

### Outro

So there you have it. We now have a basic button that does a single task. You can keep adding as much functionality as you want to your webpage, and there's tons more things to do with jQuery. So mess around. Try adding another button that will turn the background back to blue. Or using another jQuery function to do something completely different. Have fun!!!
