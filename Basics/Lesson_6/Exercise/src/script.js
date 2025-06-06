import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

console.log(OrbitControls)

/*
 * Cursor 
*/

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>
    {
        //console.log(event.clientX)
        //console.log(event.clientY)

        cursor.x = (event.clientX / sizes.width) - 0.5
        cursor.y = ((event.clientY / sizes.height) - 0.5) * -1 //Negative because event.clientY is positive when moving the cursor down, but in Three,js the y-axis is positive when going up

        //console.log(cursor.x)
    })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

const aspectRatio = sizes.width / sizes.height
console.log(aspectRatio)
//const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100) //By multiplying by the aspect ratio, we are essentially taking a larger or smaller horizontal from the camera and squeezing/stretching it to fit the render to scale the image as desired
//camera.position.x = 2
//camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.target.y = 2 //Changing the initial target
controls.update() //Need to update the controls in order for any changes to take effect

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y = elapsedTime;
    //mesh.lookAt(cursor.x, cursor.y)

    // Update camera
    //camera.position.x = cursor.x * 5
    //camera.position.y = cursor.y * 5
    //camera.lookAt(mesh.position)

    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
    // camera.position.y = cursor.y * 5
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
    // camera.lookAt(mesh.position)

    controls.update() //Need to update controls in each tick in order for the damping to work correctly

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()