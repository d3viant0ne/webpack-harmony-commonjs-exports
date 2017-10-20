# webpack-harmony-commonjs-exports

This repo shows how harmony exports affects the webpack `seal` phase.

Having more harmony exports increases the time this phase takes on rebuilds when compared to
commonjs.

To see this there are two precompiled Angular applications: one in with es2015 modules mode and
one with commonjs modules.

As these applications are already compiled, the webpack configuration doesn't contain any loaders.
It just bundles JS files contained in `out-es2015` and `out-commonjs`.

`debug-es2015.cpuprofile` and `debug-commonjs.cpuprofile` contain CPU profiles for es2015 and 
commonjs respectively.
Each CPU profile contains 2 rebuilds. See below as to how you can load it.
By zooming in and putting your mouse over the CPU profile into the `seal`
phase (under `seal`), you can see how much time it takes.

The es2015 application rebuild spends `415`/`300` ms in this phase, whereas the commonjs application
takes `204`/`157` ms. 
Larger applications spend more time in this phase, even on rebuilds where no
import or export was altered.

## Installing and running the applications

- `npm install`
- `npm run serve-es2015` for the es2015 application, or `serve-commons` for the commonjs application.

## Capturing and loading CPU profiles

- open `chrome://inspect/#devices` in chrome
- click `Open dedicated DevTools for Node`
- in the `Profiler` tab you can load existing CPU profiles
- `npm run debug-es2015` for the es2015 application, or `debug-commonjs` for the commonjs
application.
- trigger a rebuild by adding a code change (like `console.log(1);`) to `out-es2015/src/main.js` for 
es2015 or `out-commonjs/src/main.js` for commonjs.
- to record a profile, go to the `Profiler` tab and click `Start`, trigger a few rebuilds, 
then click `Stop`, then click the profile on the left to see it.
