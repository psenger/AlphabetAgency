# AlphabetAgency

I put together this Git to demonstrate the following technologies: Node JS, Grunt JS, AssembleIO, Moustache, Twitter Boot Strap 3, SCSS, and Compas Example ( with Connect, Watch and Live Reload ).... Hence the name AlphabetAgency.

# Final product
A static website based on Twitter Bootstrap 3.0

## Getting Started

I wont tell you this is easy, getting everything installed and working is tough. But here are the steps you need to get it going.

 * Optional Install Ruby or you might have to install RVM
 * Install (http://sass-lang.com/download.html) SCSS/SASS
 * Install (http://compass-style.org/install/) Compass 
 * Install (http://nodejs.org/) Node JS
 * Install (http://gruntjs.com/getting-started) Grunt Js
 * Install (http://git-scm.com/downloads) Git
 * Clone this repository
 
 ```
 	git clone https://github.com/psenger/AlphabetAgency.git AlphabetAgency
 ```
 
 * In a command prompt ( DOS/Cygwin/Bash ) cd into the directory you just cloned "AlphabetAgency" 
 * Now tell Node Package Maanger (NPM) to pull everything down (This assumes you have a Internet connection)

```
 npm install
```

 * You should see a lot of http get's to the internet as it pulls down depdenceies.
 * You are done ( or so you think ! )
 
## Commands

Compile the CSS written in SCSS (http://sass-lang.com/) with Compass (http://compass-style.org/) 
```
grunt compass
```

Build the Static HTML based on the templates mustache (http://mustache.github.io/) and Assemble.io (http://assemble.io/)
```
grunt build
```

Start the webserver ( and use Live-Reload )
```
grunt connect
```

Start Watch ( and compile everything if the source code changes )
```
grunt watch
```
