# Node with TS

This is a node.js basic API project using typescript.

# Bootstrap a Node.js Project
````Initialize a Node.js project within the project directory by creating a package.json file with default settings:````

```npm init -y```

# Install Project Dependencies
````Your Node.js project requires a couple of dependencies to create a secure Express server with TypeScript. Install them like so:````

```npm install express body-parser ts-node typescript -s```

```npm i express dotenv cors helmet```

````To use TypeScript effectively, you need to install type definitions for the packages you installed previously:````

```npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet```

# Initialize TypeScript in Node.js

```npx tsc --init```

# Use Environmental Variables

```touch .env```

````Populate the .env hidden file with the following variable that defines the port your server can use to listen for requests:````
```PORT=2023```

# Create an Express App with TypeScript

```mkdir src```

````Under this src directory, create a file named index.ts to serve as the entry point of the application:````

```touch src/index.ts```

