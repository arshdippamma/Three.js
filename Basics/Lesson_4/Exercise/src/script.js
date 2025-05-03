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

//Changing position of mesh
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1) //An equivalent way to change the position of an object

//Changing the scale of mesh
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5

mesh.scale.set(2, 0.5, 0.5) //An equivalent way to change the scale of an object

//Rotating mesh
mesh.rotation.reorder('YXZ')

//The order in which the below 2 rotations does not matter, only the order defined by reorder or the default order (x, y, z)
mesh.rotation.x = Math.PI / 2 //Quarter rotation about the x axis
mesh.rotation.y = Math.PI / 2 //Quarter rotation about the y axis


console.log(mesh.position.length()) //Using Vector3 to get the length of the vector and print in console
mesh.position.normalize() //Normalizing the vector for the position of mesh
console.log(mesh.position.length())

//The mesh is not added to the scene by default, so we add it ourselves
scene.add(mesh)

//Axes helper
const axesHelper = new THREE.AxesHelper(3) //The (optional) parameter of AxesHelper is the length of each axis guide

scene.add(axesHelper)

//Initializing group and adding it to the scene
const group = new THREE.Group()
scene.add(group)

//Another way to instantiate objects
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)

cube2.position.x = -2
cube3.position.x = 1.5

//Adding the 3 cubes to group, which has already been added to the scene (no need to add each cube to the scene as well)
group.add(cube1, cube2, cube3)

group.position.y = 2
group.scale.set(1, 1.5, 1)

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
camera.position.x = 1
camera.position.y = 1
camera.position.z = 5 //Positive z means we move backwards

//Adding camera to scene
scene.add(camera) //Adding the camera to the scene is optional, but you may encounter bugs if you choose not to

console.log(mesh.position.distanceTo(camera.position)) //We find the distance between the mesh and the camera

camera.lookAt(new THREE.Vector3(0, 0, 0))
camera.lookAt(mesh.position)

//Note: The rendered will render the scene as viewed from the camera's POV and draw the results onto a canvas
//      We can let the rendered generate the canvas or create it ourselves in the HTML file (in this case, it is index.html) and fetch it here (as seen in line 8)
//      For now, we will create it ourselves

//Renderer - we will use the WebGL Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}) //Note: the variable name is the same as the property name, we can simply write canvas, but it can be confusing, so it is not good practice

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

//Notice that changing the position does not work after the render (e.g. you can't move the subject of a picture to the left after taking the picture)
//This is true for all transformations
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = -3 