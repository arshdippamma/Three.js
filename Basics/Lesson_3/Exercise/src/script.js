import * as THREE from 'three'

//console.log('Javascript is working')
//console.log('No need to run it again, Vite updates it in real time')
//console.log(THREE)

//Initializing canvas by fetching it from the HTML file
const canvas = document.querySelector('canvas.webgl')

//Scene - the container in which objects and etc. are contained
const scene = new THREE.Scene()

//Objects - can be many things, like primitive geometries, imported models, particles, lightings, etc.
//A visible object in Three.js is called a mesh - it is a combination of geometry (shape) and the material (how it looks)

//Initializing the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1) //Parameters are length, width, height

//Initializing the material
const material = new THREE.MeshBasicMaterial({color: 'red'}) //Hexadecimal also works, so we could have done '#ff0000' (HTML/CSS notation) or 0xff0000 (JS, C, Python, etc. notation)

//Initializing mesh
const mesh = new THREE.Mesh(geometry, material)

//The mesh is not added to the scene by default, so we add it ourselves
scene.add(mesh)

//Camera - The theoretical point of view used when rendering
//Note: We can have multiple cameras, but we usually just have 1 because we can instantly move the camera and change its specifications as needed
//      We can also specify different camera types and settings

//Initializing perspective camera - close objects appear larger and far objects appear smaller
//2 essential parameters of PerspectiveCamera class
//  1. Field of View - Size of vision angle expressed in degrees (corresponds to vertical vision angle)
//  2. Aspect Ratio - The width of the canvas divided by its height

//Initializing sizes object
const sizes = {
    width: 800,
    height: 600
}

//Initializing camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //FOV for most websites is usually around 35

//We can transform objects (cameras are also objects) using the following properties: position, rotation, scale
//position is an object with 3 properties: x, y, z
camera.position.z = 3 //Positive z means we move backwards

//Adding camera to scene
scene.add(camera) //Adding the camera to the scene is optional, but you may encounter bugs if you choose not to

//Note: The rendered will render the scene as viewed from the camera's POV and draw the results onto a canvas
//      We can let the rendered generate the canvas or create it ourselves in the HTML file (in this case, it is index.html) and fetch it here (as seen in line 8)
//      For now, we will create it ourselves

//Renderer - we will use the WebGL Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}) //Note: the variable name is the same as the property name, we can simply write canvas, but it can be confusing, so it is not good practice

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)