/*
Fullscreen and Resizing

Fit in the Viewport:
- The viewport is the visible area of a webpage
- We can fit the canvas in the viewport by editing the style.css file

Handling Window Resizing:
- We can handle window resizing by adding an event listener for window resizing and updating the canvas sizes, the camera aspect ratio, and the renderer

Pixel Ratio:
- Pixel ratio refers to the ratio of physical pixels to CSS pixels
    - The highest pixel ratios are usually on the weakest devices (mobile)
    - For most uses, any pixel ratio beyond 3 is overkill
- Sometimes the render might be blurry or there may be a staircase effect on the edges of meshes
    - If so, the screen you are using has a lower pixel ratio (<1)
- We can handle this by limiting the pixel ratio to the minimum of the screens pixel ratio and 2 (or any other desired upper limit)
    - We can get the screen's pixel ratio 

Handle Fullscreen:
- We can handle fullscreen by adding an event handler for double click events on the canvas to enter and exit fullscreen mode
    - We need to use the webkit element to guarantee that this works for Safari as well as all other browsers
        - Note, newer versions of Safari support omitting the webkit element, but it is better to still code it in as users may be using older versions of safari
        - Also note, currently the iPhone version of Safari does not support his, but the iPad version does
*/