## Section 8: Fetching Data & useEffect
### New Project & Json Server
In this project, we are going to introduce a package called *"JSON.server"* which is going to allow us to replicate database using JSON file.

To use JSON package, we install it globally on our computer
<code>npm install -g json-server</code>

Careful when you use *JSON*. IT's not exactly like JavaScript.

JSON server wraps wach resources in a different API end point.

We can run JSON's server so that it watches this file and wraps it some API endpoints that we can use to fetch that data.
<code> $ json-server --watch ./data/db.json </code>