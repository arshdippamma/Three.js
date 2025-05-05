import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Initial time
let time = Date.now()

// Instantiating clock
const clock = new THREE.Clock()

// Animating with GSAP
// Note: we still need the tick function to render the scene for each frame
//gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
//gsap.to(mesh.position, {duration: 1, delay: 2, x: 0})

// Animations
const tick = () =>
{
    //console.log('tick')

    const currentTime = Date.now() //Current timestamp in Unix time - elapsed time in milliseconds since January 1, 1970 UTC
    //console.log(currentTime)

    const deltaTime = currentTime - time
    //console.log(deltaTime)

    time = currentTime

    // Clock
    const elapsedTime = clock.getElapsedTime()
    //console.log(elapsedTime)

    // Update objects
    //mesh.rotation.y += 0.01 //Rotation speed tied to framerate
    //mesh.rotation.y += 0.001 * deltaTime //Rotation speed tied to time between ticks
    //mesh.rotation.y = elapsedTime //Rotation speed tied to total elapsed time

    //We can make the object move in a circle by taking the sin and cos of the elapsed time as the position
    //mesh.position.y = Math.sin(elapsedTime)
    //mesh.position.x = Math.cos(elapsedTime)

    //Moving the camera in a circle while keeping it focused on the object
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick) // Recursive
}

tick()