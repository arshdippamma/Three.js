/*
Transform Objects

Transformations:
- 4 properties:
    1. Position
    2. Scale
    3. Rotation
    4. Quaternion
- All classes that inherit from Object3D (e.g. PerspectiveCamera, Mesh, etc.) possess the above properties
- The above properties are compiled in matrices
- Transformations need to be done before the render (e.g. you can't move the subject of a picture to the left after taking the picture)

Position:
- The position of a mesh in Three.js is given by the origin of its geometry
    - The origin of a mesh's geometry may not be at its visual center
        - We can make the origin of the mesh's geometry and the visual center line up by using geometry.center()
- 3 properties:
    1. x - right and left (default for Three.js)
    2. y - upwards and downwards (default for Three.js)
    3. z - front and back (default for Three.js)
- Inherits from Vector3 (https://threejs.org/docs/?q=vect#api/en/math/Vector3), which have many useful methods:
    - length() - finds the magnitude of a vector
    - distanceTo() - finds the perpendicular distance between 2 vectors
    - normalize() - scales a given vector to its unit vector
- Axes Helper:
    - A class which creates lines for each axis

Scale:
- Also inherits from Vector3
- Can be scaled in x, y, and z in the same ways as position

Rotation:
- Changing rotation updates quaternion
- Inherits from Euler (https://threejs.org/docs/?q=euler#api/en/math/Euler)
- Also has x, y, and z
    - Rotating in a given axis is rotating it about that axis (e.g. rotating in x axis is like putting a stick that is parallel to the x axis through the geometric origin and rotating the stick and object together)
- By default, rotation occurs in the following order: x, y, z
    - Need to be careful when rotating on an axis can cause undesired outcomes based on the order of rotation
    - Can sometimes result in gimbal lock
        - 2 or more of the axes of rotation become aligned, resulting in the loss of the ability to rotate in 1 or more of those aligned axes
            - Gimbal lock can be avoided by:
                - Changing the order in which rotation occurs for the object using the reorder method (e.g. geometry.rotation.reorder('YXZ'))

Quaternion:
- Changing quaternion updates rotation
- Expresses rotation in a more mathematical way

Combining Transformations:
- We can combine different transformations in ANY order (aside from the order of rotation in x, y, and z as noted above)
    - i.e. if we rotate in all 3 axes, changing the order will change the final orientation of the object, but doing all rotations before or after scaling or changing the position does not change the result

Other:
- You can make any instance of Object3D (e.g. camera) rotate so its -z faces a given Vector3 target using the lookAt() method
    - Very useful for orienting the camera

Scene Graph:
- We can create groups of objects using the Group class
    - Since the Group class inherits from Object3D, we can use position, scale, rotation, and quaternion on entire groups
*/