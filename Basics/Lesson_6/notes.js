/*
Cameras

Camera:
- Camera is an abstract class (it is not meant to be used directly)
- Some of the below classes inherit from the Camera class

ArrayCamera:
- Used to render the scene from multiple cameras for specific areas of the renders
    - e.g. in split screen games, half of the screen renders the camera for player 1, and the other half renders the camera for player 2

StereoCamera:
- Renders the scene through 2 cameras that mimic eyes to create a parallax effect
    - Can be used with devices/effects like VR headsets, red and blue glasses, etc.

CubeCamera:
- Does 6 renders (each facing a different direction)
    - Can render the surroundings for things like an environment map, reflection map, or shadow map

PerspectiveCamera:
- Used to create a render of the scene with perspective
    - i.e. objects appear to be different sizes based on their distance from the camera
- The parameters are: PerspectiveCamera(field of view, aspect ratio, near, far)
    - Field of View (FOV): the vertical vision angle of the camera in degrees
        - Typically, it is recommended to have a FOV of 45-75
    - Aspect Ratio: the width of the render divided by the height
    - Near: the closest distance that the camera can see
        - Objects closer that the near will not be visible
    - Far: the farthest distance that the camera can see
        - Objects farther than the far will not be visible
- Note: extreme values like 0.0001 and 99999 for the near and far values may result in z-fighting
    - Z-fighting is when 2 visual objects will "fight" for rendering dominance

OrthographicCamera:
- Used to create a render of the scene without perspective
    - i.e. objects have the same size regardless of their distance from the camera
- The parameters are: OrthographicCamera(left, right, top, bottom, near, far)
    - Left, right, top, and bottom correspond to cartesian coordinates (e.g. left/right are the x-axis and top/bottom are the y-axis)

Built-in Controls:
- DeviceOrientationControls (currently removed)
    - Automatically retrieves device orientation if allowed by device, OS, and browser, and rotates the camera accordingly
        - Used to create immersive universes or VR experiences
- FlyControls (https://threejs.org/docs/#examples/en/controls/FlyControls)
    - Enables moving the camera and rotating on all 3 axes
        - e.g. can be used to simulate the view of a spaceship
- FirstPersonControls (https://threejs.org/docs/#examples/en/controls/FirstPersonControls)
    - The same as FlyControls, but with a fixed upward axis
        - e.g. can be used to simulate the view of a plane which cannot do a barrel roll
- PointerLockControls (https://threejs.org/docs/#examples/en/controls/PointerLockControls)
    - Uses the pointer lock JavaScript API
    - Handles pointer lock and camera rotation
- OrbitControls
    - Similar to controls made in script.js, but with more features (e.g. zooming in and out, etc.)
    - Limits rotation to a smaller range on some axes
- TrackballControls
    - Similar to OrbitControls, but does not limit rotation
- TranformControls
    - Has nothing to do with the camera
    - Allows you to do things like meshes manually
- DragControls
    - Has nothing to do with the camera
    - Allows you to drag meshes manually

Using OrbitControls:
- We need to import the OrbitControls class from the node_modules folder using import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
- When we declare a variable that holds on object of the OrbitControls class, we need to pass 2 parameters
    - The camera which is updated by the object
    - A DOM element as a reverence for mouse events
- We can also add damping to smooth the animation by adding some kind of acceleration
    - We simply need to set the enableDamping property to true
        - We also need to update the controls in every tick in order for the damping to work correctly

When to Use Built-in Controls:
- Control are useful, but they have limitations
- Use a given control if it supports all of the desired features
    - If not, use your own implementation or edit the class to work as desired
*/