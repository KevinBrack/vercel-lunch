# vercel-lunch

VOLT Systems Lunch and Learn 4-23-2020

## Vercel - Tools Developers Love 🖤

Preface http://lawsofsimplicity.com/

## Vercel Links

- https://vercel.com/design
- https://vercel.com/login
- https://vercel.com/dashboard
- https://vercel.com/dashboard/usage
- https://vercel.com/edge-network
- https://vercel.com/docs

## Now hosting platform

```
npm i -g now
now login
```

Then enter the email address your Vercel account is attached to.
Check the email to finish authenticating your terminal.

## NextJS

I have a new JavaScript Framework down here!

*JS Devs*

![They All Float](https://media0.giphy.com/media/3ohhwL5OZa2zYZyBe8/giphy.gif?cid=ecf05e471ec8cb0a4b1ff2518f1bab97f496f556b0ea030f&rid=giphy.gif)

- https://nextjs.org/
- https://nextjs.org/docs/getting-started

### Create a NextJS App

```bash
npm init -y
npm install next react react-dom sass
```

Add Scripts to `package.json`

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

NOTE: For typescript support simply make an empty `tsconfig.json` and Next will fill it with the defaults the first time it is detected. Then simply switch files to `.tsx` or `.ts`

Create a `pages` directory

```bash
mkdir pages public
```

NOTE: The public folder is where you can store static files like images.

Navigate into `pages` and add a file `index.jsx`

Edit the `index.jsx` and export a default function that returns a JSX template.

```jsx
export default () => <div>Hello VOLT!</div>
```

NOTE: There is no need to import React to support React syntax. Another example of removing the obvious!

### Deploy

```
now
now --prod
```



### Adding Styles

NextJS allows you to import CSS files in JS by default. They do this by extending `import`.

To set a global stylesheet import it to `pages/_app.jsx`

```jsx
import '../styles/styles.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Next.js supports [CSS Modules](https://github.com/css-modules/css-modules) using the `[name].module.css` file naming convention.

This works the same with Sass. Just remember to include the library in Node.

### File Based Routing

File based routing simply means that the folder/file structure itself determines the routes.

Inside pages add `about.jsx`

NOTE: `/pages/about.jsx` and `/pages/about/index.jsx` are the same route.

### API Routes

You can now use file based routing to make an Express-like serverless API in the same project. 

Now deployment automatically configures a NextJS app to use serverless. That means a serverless API can be set up with the same file based routing as the application.

Create directory `/pages/api`. Inside the API folder add an index.json.

The API routes are express-like in syntax and even allow the use of Express middleware.

```javascript
export default (req, res) => res.json(message: {'Hello VOLT!'})
```

### Serverless 

Serverless means that your file is stored like any text file, or asset at edge servers. If you build a standard react app and run `npm run build` the resulting application is bundled into standard HTML CSS and JS. Those static files can then be served by a static file server like `express.static`, or from plain storage like AWS S3 or Azure Blob Storage.

All major cloud providers support some form of Serverless functions. Your NextJS application can be built with a Serverless target and be hosted on AWS Api Gateway, or Azure Functions App.

Serverless functions are stored like static text files but are processed as the request to the URL is made. They are run in isolation therefore even a breaking crash on a page served by Serverless functions has no effect on the underlying server.

This allows for a Consumption based pricing model, meaning you are only charged for page loads or api calls.

On Azure you would get charged per page load or function call in processing/seconds.

AWS gives you one million free function calls per month.

Now hosting allows unlimited function calls for free, but limits each individual project to 12 serverless functions.

## Other Frameworks Quick Start

### Angular

```bash
$ npm i -g @angular/cli
$ ng new my-app
$ cd my-app
$ npm run build
$ now
```

### React

```bash
$ npx create-react-app my-app
$ cd my-app
$ npm run build
$ now
```

### Aliasing to personal domain

https://zeit.co/docs/v2/custom-domains

One of the options you can set an alias to a domain you own if you point the name servers to ZEIT.

## NX Workspace with NestJS backend and  Angular front end

### NX Startup

```bash
npx create-nx-workspace@latest
```

Follow the prompts. Select nest-angular

### Now Configuration

There are many frameworks that support Zero Config builds with Now. In this case we are going to have 2 applications. A static Angular app, and a Node back end. The following file specifies to Now how to build the workspace and host it. Place it into the root directory next to the `package.json`

`now.json`

```json
{
  "version": 2,
  "builds": [
    { "src": "/dist/apps/api/main.js", "use": "@now/node" },
    { "src": "/dist/apps/nx-vercel/*", "use": "@now/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/dist/apps/api/main.js" },
    { "handle": "filesystem" },
    { "src": "/assets/(.*)", "dest": "/dist/apps/nx-vercel/assets/$1" },
    { "src": "/(.*).(js|css|ico)", "dest": "/dist/apps/nx-vercel/$1.$2" },
    { "src": "/(.*)", "dest": "/dist/apps/nx-vercel/index.html" }
  ]
}

```

Build applications

```bash
ng build --prod nx-vercel && ng build --prod api
```

Deploy

```bash
now --prod
```

