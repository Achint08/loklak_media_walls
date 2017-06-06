# Loklak Media Walls

[![Build Status](https://travis-ci.org/Achint08/loklak_media_walls.svg?branch=master)](https://travis-ci.org/Achint08/loklak_media_walls)

Loklak media walls displays the latest social media posts from twitter on screen. A part of [Loklak search](https://github.com/fossasia/loklak_search/) project.

The site of this repo is deployed on the GitHub gh-pages branch and automatically deployed here: https://achint08.github.io/loklak_media_walls/

---

## Technology Stack
##### Components
* HTML - Structure of the web page generated.
* CSS - Styling options and details ofthe web page.
* Javascript(JSON) - Used to store information for deploying the application such as dependencies.
* Angular4 - Structure for deployment of the web page.

## Services and Dependencies
* Bower - The goal is to use [Bower](http://bower.io) to manage front-end dependencies in future.

## Requirements
* [Angular-cli](https://github.com/angular/angular-cli#installation)
* node --version >= 6
* npm --version >= 3

## Installation
First we will need to install angular-cli by using the following command:
```sh
$ npm install -g @angular/cli
```
After installing anular-cli we need to install our required node modules, so we will do that by using the following command:
```sh 
$ npm install
```
## How to deploy?
##### Running on localhost:
* **Step 1:** Fork loklak_media_walls repository and clone it to your desktop
* **Step 2:** Then cd into that cloned folder
* **Step 3:** Deploy locally by running this :```$ ng serve```

#### For deploying with [Github Pages](https://pages.github.com/):
With these very simple steps you can have loklak_media_walls deployed:
* **Step 1:** Fork loklak_media_walls repository and clone it to your desktop
* **Step 2:** Then checkout to your master branch `$ git checkout master`
* **Step 3:** Deploy running this : ```$ npm run deploy```
* **Step 4:** Visit `https://yourusername.github.io/loklak_media_walls` and you should see the search running
* **Step 5:** As you search you might see that that it cant find anything, to resolve this, on search you will see there is a red shield on search bar, click on it and allow to load scripts
* **Step 6:** Reload and you will have a function loklak search page deployed with github pages.

### Loklak Server
See here to run your own https://github.com/loklak/loklak_server (recommended), and change `apiUrl` in config accordingly. Last resource, or for production is `http://api.loklak.org
