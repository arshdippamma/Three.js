/*
First Three.js Project

Local Servers:
- To maintain security, the functionality of HTML files run in browsers is limited, so we must run local servers to get around this
    - The simplest solution is to use build tools / bundlers

Current State of Build Tools:
- There are many build tools: Webpack, Vite, Gulp, Parcel, etc.
- The most popular build tool today is Webpack
- The most appreciated build tool today is Vite
    - Faster to install
    - Faster to run
    - Less prone to bugs
    - Better developer experience

Vite:
- A build tool
- We write web code with HTML/CSS/JS and Vite builds the final website
- Also does many things like optimizations, cache breaking, source mapping, running a local server, etc.
- We can add plugins to handle additional features (e.g. special file types)
    - We will use them to add support for GLSL files (for shaders) and React

Node.js:
- Node.js is typically used to run Vite
- Enables running JavaScript outside of a browser

Node Package Manager (NPM):
- A dependency manager
- Fetches the packages we need
- npm init creates a package.json file that contains all necessary information to run a Node.js project
- npm install vite installs Vite
- npm install threejs installs Three.js
- Note that Vite and Three.js have their own dependencies, and NPM fetches those too, so we don't need to worry about them

Dependency Version Tolerance:
- Version format is often specified using SemVer (NPM uses this format)
    - This gives the format MAJOR.MINOR.PATCH
- Notice that in Exercise\package.json, we have:
    "dependencies": {
        "vite": "^6.3.3"
    }
- The ^ indicated the tolerance allowed for the version of Vite
    - ^ is used to indicate tolerance for minor and patch updates (e.g. ver 6.3.4 and ver 6.4.2 would be supported, but not ver 7.2.3)
    - There are other operators used to indicated tolerance for minor updates, major updates, patches and combinations of the 3

Project Sharing:
- To share websites to other developers, remove the node_modules folder and share the rest of the project
    - Other developers can retrieve the missing files using the command-line and automatically recreate the node_modules folder according to the information in package.json
    - You can choose to include/remove package-lock.json (including it ensures the same version, so no tolerance is needed)

How to Run a Website On a Local Server Using Vite:
- cd into the project directory
- Run npm init -y
- Run npm install vite
- Edit package.json
    - Change "scripts" to have:
        "dev": "vite",
        "build": "vite build"
- Run npm run dev
- We can stop a the server using Ctrl + C

Three.js:
- We can install Three.js using npm install three
- THREE contains most, but not all, of the classes and properties that might be used in a Three.js project
    - The other ones need to be fetched in very specific ways

Creating a Basic Scene:
- We need 4 basic elements:
    - Scene
    - Objects
    - Camera
    - Renderer
- See script.js for more info
*/