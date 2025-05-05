/*
Animations

Animation in Three.js:
- Animating in Three.js (and most animation in JS) is like stop motion animation
    - Move the object slightly, take a picture, and repeat
- We need our animations to run the same for systems of various framerates / refresh rates
    - e.g. rotation speed is dependent on framerate, so we need to make rotation occur at the same speed regardless of framerate
    - To do this, we use the elapsed time between ticks to calculate the speed of animation regardless of framerate
        - We can also use the clock built into Three.js

Request Animation Frame:
- requestAnimationFrame is used to call the function provided on the next frame (and do this for each new frame)

GreenSock Animation Platform (GSAP):
- To gain more control, create tweens, create timelines, etc. it is better to use libraries like GSAP
- To add GSAP to the dependencies, we use npm install --save gsap@3.12 (or another desired version)
    - For personal use, we do not need to use a specific version (i.e. we can use npm install --save gsap)
        - The --save tag adds the dependency to the package.json files so that other developers can regenerate the GSAP dependencies (along with the other dependencies) using npm install

Choosing the Right Solution for an Animation:
- Depends on the project, your preferences, the weight of the project, etc.
    - e.g. to animate a sword swing, it is likely preferable to use tween animations, so GSAP or other libraries would be the better choice, but it could still be done without it
*/