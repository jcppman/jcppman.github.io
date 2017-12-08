---
name: cv
title: About me
order: 999
---

## Profile

- Name: Chriest Yu (游昀叡)
- Gender: Male
- Birth: 1988/08/16
- E-mail: jcppman@gmail.com
- Github: https://github.com/jcppman
- Website: http://chriest.studio

## Who I am

I am a software developer from Taiwan, Taipei, currently live in Shanghai.

During my whole life, my soul is occupied by two things: Programming and Music.
The first one gives me job and keeps me survived while the second one "absorbs"
all the breads I earn, however, I love them both, equally.

I'm highly interested in the area where audio and computer science intersect. My
interests are across the whole spectrum, from recording, mixing, sound design, to
computational arts, computer music, audio processing.

## What I am good at

I am good at learning new things, and I love to dig & dive into something I
don't know.

> ["He who does not know can know from learning"](http://www.adinkra.org/htmls/adinkra/neao.htm)

## Awards

### 2015 China Music Expo Web Audio Innovation Contest - Best UI Design

- Issuer: Google , MIDI Manufacturers Association, China Music Instrument Association
- Date: Oct 2015
- Contest Page: http://chinagdg.org/web-audio-hackathon/
- Application Page: https://github.com/jcppman/code-player

## Professional Experience

### Splunk (2016/7 - Now)

#### Splunk CI/CD Infrastructure

Splunk CI/CD infrastructure development & maintenance, including

- Dockerfile & Docker image development
- Jenkins & Jenkins plugin
- Reporting System
    - Splunk Apps
    - UI Development Guide

#### Splunk UI

Splunk UI React components which make frontend devs' life way easier when building
Splunk apps.

- Keywords: front-end; javascript; UI; React;
- Responsibility:
  0. As one of the contributers, implement & maintain the library
- Stack: Webpack/Postcss/React

#### Splunk App: DBX

- Keywords: Splunk App; javascript; UI; React;
- Responsibility: Help developing DBX 2.0's front-end

#### Splunk Mobile App

- Keywords: hybrid-app; js bridge; webpack optimize;
- Responsibility:
  0. Design & implement a highly-customized build system based on webpack
  0. Implement frontend modules
  0. Optimize loading speed and improve app performance
- Stack: Webpack/Postcss/Backbone

#### Splunk Core Frontend

- bugs fixing for Splunk Core PDF Generating

### EFLabs (2015/1 - 2016/7)

##### Virtual Classroom

A multi-devices (desktop, android, ios) online virtual classroom which contains:
real-time audio/video chat, text chat, whiteboard, slides & WYSIWYG text editor.

- Keywords: single page application; webrtc; hybrid-app;
- Duration: 2015/1 - 2016/7
- Responsibility:
  0. Implement & maintain frontend modules
  0. Implement a flexible frontend build script which largely increases
development & debugging speed, especially in mobile developing scenarios due to
the provided live reload mechanism
  0. Help upstream libraries finding/fixing bugs
- Stack: NodeJs/Gulp/Less/RactiveJS

### Qisense Technology (2014/1 - 2015/1)

##### Online Analysis

- Keywords: single page application; continuous file uploading;
- Duration: 2014/11 - 2015/1
- Stack: NodeJs/Express/Gulp/Less/AngularJS
- Responsibility:
    0. Design the frontend architecture
    0. Build the scaffold
    0. Setup an incremental building gulp script
    0. Implement an angular service for manipulating and uploading files via
       websocket. The file will be sliced into chunks and transmitted
       sequentially.
    0. Implement 40% of the module
- Produced one open source module: [angular-file-service](https://github.com/jcppman/angular-file-service)

##### Data Relation Inspector

- Keywords: single page application; large-scale data visualization; canvas;
complicated layout tricks;
- Duration: 2014/09 - 2014/10
- Stack: NodeJs/Express/Gulp/Less/AngularJS/D3.js/PIXI.js
- Responsibility:
    0. The client side web app
    0. Server side APIs
    0. Performance optimization
- Caused the birth of [this talk](https://github.com/jcppman/block-flow)
I did in a javascript meetup

##### Distributed Crawler Cluster

- Keywords: distributed crawler; scalable nodejs modules;
- Duration: 2014/01 - 2014/09
- Stack: NodeJs/MongoDB/Redis/PhantomJS
- Responsibility:
    0. Desing and implement the task manager and scheduling machanism
    0. Design and implement the incremetal crawling mechanism
    0. Decouple the dispatcher and actual crawlers
    0. Design and implement the page crawlers
- Produced two open source npm modules: [node-brood](https://github.com/jcppman/node-brood)
and [tipster](https://github.com/jcppman/tipster)

### Distribution and Mobile Computing Lab of Beihang University (2010/08 - 2013/12)

##### HTML5-Based Augmented Reality Museum Guide

- Keywords: HTML5; canvas; augmented reality; webrtc; web socket; object
detection;
- Duration: 2012/10 - 2013/12
- Stack: Storm/Python/Node.js/OpenCV
- Responsibility:
    0. Design the architecture
    0. Survey and implement the binary feature based 3D object recognition arithmetic
    0. Study and implement the position estimation and registration module
    0. Integrate all module into a HTML5 web-application

##### Bacnet/Modbus Energy Monitoring System

- Keywords: internet of things;
- Duration: 2012/08 - 2013/12
- Stack: Java
- Responsibility:
    0. Develop multi-protocol DAQ modules (Bacnet/IP and Modbus)
    0. Develop the data monitoring daemon
    0. Develop the alarm events management and triggering system
    0. Develop the SMS text and email sending module
    0. Develop the remote databases aggregation and transportation tool base on
the reflection mechanism of JAVA

##### Distributed Gas Monitoring System

- Keywords: internet of things; embaded system; single page application;
- Duration: 2011/08 - 2012/07
- Stack: C51/Ruby On Rails
    0. Design the architecture
    0. Design a simplified Modbus-like protocol
    0. Develop terminal-side modules:
        - An ultra lite operation system for AT8051 which only contains
essential functions: Input handlers, transport protocol stack…etc.
        - Data acquisition module
        - Control module
        - Communication module
    0. Develop server-side program:
        - Protocol stack
        - Terminal configuration module
        - Server-side monitoring daemon with ruby
    0. Develop client-side web interface

##### Satellite Attitude Observing System

- Duration: 2010/12 - 2011/01
- Stack: C#/OpenGL
- Responsibility: Rendering 3d satellite model by given attitude parameters.  Because
the lack of 3d model parser in C#, I also developed a simple parser for Soilwork
model files.

##### Comsat networking examination and applying system

- Duration: 2010/09 - 2011/05
- Stack: J2EE,JNI,C++
- Responsibility:
    0. Analyze and design the whole workflow
    0. Design the architecture
    0. Develop the data acquisition module in C++
    0. Develop the background service in JAVA
    0. Develop the web application in J2EE

### Pearl Digital Entertainment (2008/07 - 2008/08)

The intern was separated into two stages. The first stage was a training phase.
We learned the basic computer graphic knowledge by implementing GPU rendering
pipelines on CPU in C++ with DirectX 3D, includes triangle rasterization,
perspective projection, texture binding and lighting. In the second stage, my
responsibility was the implementation of a global lighting system. I accomplished
the light tracing and photon mapping modules before my internship ended.

## Education

| Duration | Institution | Department | Degree
| -------- | ----------- | ---------- | -------
| 2010/09 - 2013/12 | Beihang University | Computer Science and Technology | Master |
| 2006/09 - 2010/08 | Beihang University | Measuring and Control Technology and Instrumentation | Bachelor |

## Social Activities

#### Organizer/Speaker of tech meetups in Shanghai Javascript Community

- Organizer of [EFJS](https://www.meetup.com/efjsday/)
- Speaker of [Shanghai Javascript Meetup](https://www.meetup.com/Shanghai-JavaScript/) (3 times)
- Creator of Splunk Shanghai "Modern Frontend Development" series course

#### Co-organizer of Shanghellfest music festival series

- Shangheartfest (Music festival co-opperate with Heart To Heart Shanghai Charity Group)
- Annual Shanghellfest Music Festival
- Shanghorrorfest

#### Independant Producer/Mix Engineer

Produced/Engineered following albums/singles:

- Hell Savior - Keep Running for Metal (2010)
- Blood of Life - Reign Over Horror (2016)
- Acherozu - 蛇牙 (2017)
- ALPACA - All Will Fail (2017)
- ALPACA - Carcosa (2017)

#### Eduinfinity Translation Group (2014/05 - 2015/10)

Substitles translator of following Coursera courses:

- Team leader of translation team: "Introduction to Music Production"
- Translator of course: "History of Rock, Part One"
- Translator of course: "History of Rock, Part Two"
- Translator of course: "Jazz Improvisation"
- Translator of course: "Fundamentals of Music Rehearsing Ensembles"
- Translator of course: "The Music of Beatles"
- Translator of course: "Human-Computer Interaction"
