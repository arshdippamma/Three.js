# Learning Three.js

This repository documents my personal journey learning [Three.js](https://threejs.org/), a JavaScript library for creating 3D graphics in the browser using WebGL.

Each folder explores a specific category or technique, and contains notes and exercises to reinforce my understanding through hands-on practice.

---

## 🚧 Disclaimer

This repo is a personal learning project. Code may be messy, experimental, or incomplete — it reflects real-world learning and iteration. Feel free to explore, borrow, or suggest improvements.

---

## 🧠 Learning Goals

- Understand how to build and structure 3D scenes in the browser
- Learn practical 3D techniques like lighting, shading, animation, and interaction
- Explore how shaders work and how to create custom visual effects
- Practice integrating Three.js into larger front-end frameworks like React

---

## 📁 Folder Structure

### `Basics/`
Foundational Three.js concepts like setting up a scene, working with cameras, lights, meshes, and the render loop.

### `Classic Techniques/`
Covers common techniques including model loading, textures, shadows, environment maps, particle systems, and post-processing.

### `Advanced Techniques/`
Explores deeper topics like performance optimization, instancing, custom geometry, interactive experiences, and animation systems.

### `Shaders/`
Introduces GLSL and custom shader materials using `ShaderMaterial` or `RawShaderMaterial`. Also includes lighting models and procedural effects.

### `Extras/`
Miscellaneous experiments, utilities, and one-off ideas — a sandbox for creativity or testing concepts that don't fit elsewhere.

### `Practice Portal Scene/`
A standalone creative project focused on designing a stylized 3D portal scene, applying multiple techniques from other categories.

### `Integration with React and React Three Fiber/`
Covers how to build Three.js projects using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), enabling declarative scene creation within React apps.

---

## 🧱 What's Inside Each Subfolder

Each subfolder typically includes:

- `notes.js` — Contains written commentary, annotated code, or reflections on the topic.
- `Exercise/` — A practical demo with a working implementation.

Inside each `Exercise/` folder:

- `src` - The files containing the majority of the code for this program. Within this folder there is an `index.html` file as the entry point for the example and a `script.js` file, which is the main JavaScript file implementing the concept.
- `package.json` — Lists project dependencies and scripts
- `package-lock.json` — Ensures consistent dependency versions across installs
- `node_modules/` — All installed packages for that exercise

> 📦 The `node_modules/` folder is **excluded** from each `Exercise/` folder in version control to reduce repo size. For the same reason, the `package-lock.json` may also be **excluded**. 
> Note: The projects in this repository rely in Vite as a bundler (as specified in the `package-lock.json` files)

## How to Run an Exercise Locally: 

1. Ensure you have installed Node.js and npm by running `node -v` and `npm -v` in the command-line. If either of these are not installed, install them.
3. Clone this repository by running `git clone https://github.com/arshdippamma/Three.js` in the command-line.
4. Navigate to the desired exercise's folder: `cd path/to/Exercise`
5. Install dependencies: `npm install`
6. Run `npm run dev` in the command-line and open the given http://localhost:XXXX/ link.
7. You should now see the exercise locally hosted in your browser.

---

## 📌 Resources

- [Three.js Docs](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Three.js Journey](https://threejs-journey.com/) — This repository follows the structure of this Three.js course by Bruno Simon
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [The Book of Shaders](https://thebookofshaders.com/) — Great for learning GLSL

---

## ⚖️ License & Attribution

This project is licensed under the MIT License.

You are free to use, copy, modify, and distribute this code for personal or commercial use.
Attribution is appreciated but not required.

Some assets (e.g., models, textures) used in exercises may come from third-party sources.
Please check individual exercise folders or asset metadata for specific credits and usage terms if you plan to reuse them.

This project contains exercises and personal implementations inspired by the [Three.js Journey](https://threejs-journey.com) course by Bruno Simon.  
All original course content is © Bruno Simon. No course assets are included. Please support the creator by enrolling in the course.
