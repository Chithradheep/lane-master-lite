# Endless Dash

Build a single HTML file (canvas + vanilla JavaScript, no frameworks) with a

3-lane endless runner mechanic. Third-person view, character auto-runs

forward continuously, speed slowly increasing over time.

Controls: left/right arrow keys switch lanes, up arrow or spacebar jumps,

down arrow slides. Add touch swipe support too (left/right/up/down swipes

do the same things).

Spawn simple box obstacles ahead in random lanes as the game progresses.

Some obstacles require a jump to clear, others require a slide. Detect

collisions between the player and obstacles.

Keep the visuals simple for now — flat colors, a basic ground plane, a

simple shape for the player character. I only want the core movement,

jumping, sliding, and collision detection working correctly first. No

story, no menus, no scoring yet. Just get the feel of the run right.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lane-master-lite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f4889bcd-49f9-4ac7-9746-702888c66a64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
