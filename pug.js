var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])


/*


Error: Cannot find module 'jade'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at new View (/Users/adrianshepelavey/node_modules/express/lib/view.js:81:14)
    at Function.render (/Users/adrianshepelavey/node_modules/express/lib/application.js:570:12)
    at ServerResponse.render (/Users/adrianshepelavey/node_modules/express/lib/response.js:1008:7)
    at /Users/adrianshepelavey/nodeschool/expressworks/pug.js:6:7
    at Layer.handle [as handle_request] (/Users/adrianshepelavey/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/adrianshepelavey/node_modules/express/lib/router/route.js:137:13)

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "<!DOCTYPE html>"                   !=    "<h1>Hello World</h1><p>Today is Mon Nov 13 2017.</p>"
   "<head>"                            !=
   "<meta charset=\"utf-8\">"          !=
   "<title>Error</title>"              !=
   "</head>"                           !=
   "<body>"                            !=
   "<pre>Error: Cannot find module &#39;jade&#39;<br> &nbsp; &nbsp;at Function.Module._resolveFilename (module.js:470:15)<br> &nbsp; &nbsp;at Function.Module._load (module.js:418:25)<br> &nbsp; &nbsp;at Module.require (module.js:498:17)<br> &nbsp; &nbsp;at require (internal/module.js:20:19)<br> &nbsp; &nbsp;at new View (/Users/adrianshepelavey/node_modules/express/lib/view.js:81:14)<br> &nbsp; &nbsp;at Function.render (/Users/adrianshepelavey/node_modules/express/lib/application.js:570:12)<br> &nbsp; &nbsp;at ServerResponse.render (/Users/adrianshepelavey/node_modules/express/lib/response.js:1008:7)<br> &nbsp; &nbsp;at /Users/adrianshepelavey/nodeschool/expressworks/pug.js:6:7<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/adrianshepelavey/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/adrianshepelavey/node_modules/express/lib/router/route.js:137:13)</pre>" !=
   "</body>"                           !=
   "</html>"                           !=
   ""                                  !=

────────────────────────────────────────────────────────────────────────────────


PUG
 Exercise 3 of 8

Create an Express.js app with a home page rendered by the Pug template engine.

The home page should respond to /home.

The view should show the current date using 'new Date().toDateString()'.

We use 'toDateString()' to simply return the date in a human-readable format
without the time.

-------------------------------------------------------------------------------

## HINTS

The Pug template file index.pug must look like this:

    h1 Hello World
    p Today is #{date}.

You can use our index.pug (recommended). The path to index.pug will be provided
in process.argv[3]. Of course, you are welcome to use your own Pug file. Just
make sure it's exactly the same as ours.

This is how you can specify the path to the template files in the folder
templates:

    app.set('views', path.join(__dirname, 'templates'))

The __dirname is the absolute path of this file and path.join is used to produce
cross-platform path (Win vs. Linux/Mac).

To tell Express.js app what template engine to use, apply this line to the
Express.js configuration:

    app.set('view engine', 'pug')

Instead of Hello World's res.end(), the res.render() function accepts
a template name and data (called locals):

    res.render('index', {date: new Date().toDateString()})

We use toDateString() to simply return the date in a human-readable format
without the time.

-------------------------------------------------------------------------------

## NOTES

When creating your projects from scratch, install the pug dependency with npm.
If you run $ npm install on this package (expressworks), you should have pug
installed.

Again, the port to use is passed by expressworks to the application as
process.argv[2].

If you receive Error: Cannot find module 'pug', it is because Express is looking
for Pug relative to its path. You can fix this by running npm install pug.

Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help

*/
