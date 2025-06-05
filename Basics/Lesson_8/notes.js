/*
Geometries

What is a Geometry?
- Geometries are composed of:
    - Vertices (point coordinates in 3D space)
        - Each vertex has:
            - Position
            - UV coordinates
            - Normals
            - Colour
            - Size
            - etc.
    - Faces (triangles that join vertices to create surfaces)

Built-in Geometries:
- All of the following geometries inherit from the BufferGeometry class
    - BufferGeometry also has many built-in methods like translate(), rotateX(), normalize(), etc.
        - These are way to transform the vertices, not the mesh
- BoxGeometry - Creates a box/cube
- PlaneGeometry - Creates a rectangular plane
- CircleGeometry - Creates a disc or a portion of a disc
- ConeGeometry - Creates a cone or a portion of a cone with the ability to open or close the base of the cone
- CylinderGeometry - Creates a cylinder with the ability to open or close the ends of the cylinder
- RingGeometry - Creates a flat ring or a portion of a flat ring
- TorusGeometry - Creates a donut shape or a portion of a donut shape
- TorusKnotGeometry - Creates some sort of knot
- Dodecahedron Geometry - Creates a dodecahedron with the ability to round edges
- OctahedronGeometry - Creates an octahedron with the ability to round edges
- TetrahedronGeometry - Creates a tetrahedron with the ability to round edges
- IcosahedronGeometry - Creates a sphere composed of triangles of roughly the same size
- SphereGeometry - Creates a sphere composed of quads (2 triangles placed together to make a square)
- ShapeGeometry - Creates a shape based on a path (Bezier curve)
- TubeGeometry - Creates a tube following a path
- ExtrudeGeometry - Creates an extrusion based on a path with the ability to edit the bevel
- LatheGeometry - Creates a vase or a portion of a vase
- TextGeometry - Creates 3D text based on the font provided in typeface JSON format
- Combinations of the above geometries can allow us to create very complex shapes
    - If the desired shape is too complex to create in Three.js, we can use a 3D software like Blender instead

Box Example:
- 6 parameters:
    - Width - size on x-axis
    - Height - size on y-axis
    - Depth - size on z-axis
    - widthSegments - number of subdivisions on x-axis
    - heightSegments - number of subdivisions on y-axis
    - depthSegments - number of subdivisions on z-axis
- Subdivisions correspond to the number of triangles which compose each face
    - 1 subdivision means there are 2 triangles per face
    - 2 subdivisions means there are 8 triangles per face
    - etc.
    - Note, you can see the subdivisions and triangles by setting the wireframe property of the mesh's material to true

Creating Your Own Buffer Geometry:
- We use Float32Array (this is native to JavaScript) to store buffer geometry data:
    - It is a typed 1 dimensional array
    - Can only store floats
    - Fixed size
    - Easier for the computer to handle
- We convert the Float32Array to a BufferAttribute
- Then we can add the BufferAttribute to our BufferGeometry with setAttribute()
- Some geometries have faces which share common vertices
    - When creating a BufferGeometry, we can specify many vertices and their indices to create faces and re-use vertices multiple times, thus improving performance
*/