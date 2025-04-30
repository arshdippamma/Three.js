/*
What is WebGL and Why Use Three.js?

WebGL and Three.js:
- WebGL is a JavaScript API
- Renders triangles extremely fast
- Result can be drawn in a <canvas> or etc.
- Compatible with most browsers
- Uses GPU for rendering, so it is important to consider performance for lower spec systems
- WebGL can be used for 2D or 3D experiences
- To render a 3D model, many triangles are created at varying positions with the chosen colouring to produce the desired outcome
- The GPU determines the positions of the vertices and create each visible pixel of the edges and faces to create triangles which make up the generated 3D objects
- The instructions to colourize and place points and draw pixels are written in shaders
    - Shaders are provided with information like point positions, model transformations, camera coordinates, and other factors in determining how things are positions and colourized as desired
- Native WebGL is very low level, so it is more difficult and takes longer to do even the simplest actions, but it has the benefit of allowing for more customization and optimization
- Three.js simplifies the process, but still maintains some aspects of WebGL, as it is kind of the level above WebGL
    - It is a JavaScript library
    - Created by Ricardo Cabello, aka Mr.doob
    - We can still interact with WebGL to create our own shaders, provide our own information, or make optimizations offered only by WebGL
- Three.js is the most popular WebGL library, as it is very stable, has many features, has great documentation, has an active community, and does not diverge from WebGL too much, but there are many other useful WebGL libraries
*/