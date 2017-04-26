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

#### Splunk UI

Splunk UI React components which make frontend devs' life way easier when building
Splunk apps.

- Duration: 2016/11 - Now
- Responsibility:
  0. As one of the contributers, implement & maintain the library
- Stack: Webpack/Postcss/React

#### Splunk Mobile App

Mobile app for Splunk users to see Splunk dashboards/reports on the go.

- Keywords: hybrid-app; js bridge; webpack optimize;
- Duration: 2016/9 - Now
- Responsibility:
  0. Design & implement a highly-customized build system based on webpack
  0. Implement frontend modules
  0. Optimize loading speed and improve app performance
- Stack: Webpack/Postcss/Backbone

### EFLabs (2015/1 - 2016/7)

##### Virtual Classroom

A multi-devices (desktop, android, ios) online virtual classroom which contains:
real-time audio/video chat, text chat, whiteboard, slides & WYSIWYG text editor.

- Keywords: single page application; webrtc; hybrid-app;
- Duration: 2015/1 - now
- Responsibility:
  0. Implement & maintain frontend modules
  0. Implement a flexible frontend build script which largely increases
development & debugging speed, especially in mobile developing scenarios due to
the provided live reload mechanism
  0. Help upstream libraries finding/fixing bugs
- Stack: NodeJs/Gulp/Less/RactiveJS

### Qisense Technology (2014/1 - 2015/1)

##### Online Analysis

A web application which users can upload trading records and view the aggregated
data.

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

The goal of this web application is to reveal the inner relation of data.

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

A scalable, incremental and expandable web crawling system. The system will keep
monitoring several B2C and C2C e-commerce platforms and fetching new product info
and consumer reviews. The system is able to crawl not only static webpages but
also dynamic loaded contents. The system is separated into several layers and
each layer is transparent to its dependent, which makes it expandable and scalable.

- Keywords: distributed crawler; scalable nodejs modules;
- Duration: 2014/01 - 2014/09
- Stack: NodeJs/MongoDB/Redis/PhantomJS
- Responsibility:
    0. Desing and implement the task manager and scheduling machanism
    0. Design and implement the incremetal crawling mechanism
    0. Decouple the dispatcher and actual crawlers
    0. Design and implement the page crawlers
- Produced two opne source module: [node-brood](https://github.com/jcppman/node-brood)
and [tipster](https://github.com/jcppman/tipster)

### Distribution and Mobile Computing Lab of Beihang University (2010/08 - 2013/12)

##### HTML5-Based Augmented Reality Museum Guide

An web-based augmented reality application that provides tourisms extra
information about the OOI(Object Of Interest). The application detects objects
that shows in device camera, points out partials and display extra information
on top of the video.

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

An energy consumption analysing system to optimise the usage of buildings'
air-conditioners. The system will acquires parameters of blowers, rerigerators
and ammeters by Bacnet/IP and Modbus, also provides user an interface to
control them remotely and manage alarm events. When an alarm event
is triggered, it will send notifications via email and SMS text
to the administrator. The system is used by Carrefour and Shanghai
Pharmaceuticals Holding Company.

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

This is a personal project for spending spare time during my military service,
sold to MDK Medical Equipments later. The system is deployed on Kaohsiung E-Da
Hospital. The air pressure monitoring device is an AT8051 powered chipboard
with pressure sensors. The device can be attached on gas suppliers and exchange
system, they would send the present values and parameters via RS-485
to a sub-hub. The sub-hub will send aggregated data to the server via
TCP/IP. After the data is received by the server, it could be observed by
administrators on the web application.

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

An utility for debugging satellite communication modules. The utility would
receive observed data from RS-232. After extracting the parameters, it will
display the calculated position and attitude and show a fancy 3d satellite
model to demonstrate the state of the satellite.

- Duration: 2010/12 - 2011/01
- Stack: C#/OpenGL
- Responsibility: My main task is rendering 3d satellite model according to the
  given attitude parameters. Because the lack of 3d model parser in C#, I
  also developed a simple parser for Soilwork exported model files.

##### Comsat networking examination and applying system

This system provides comsat networking applicants an online applying interface
to submit their registrations and check the examination reports, also provides
administrators an online interface to arrange automative examinations, control
frequency spectrographs and supply oscillators.

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

#### Eduinfinity Translation Group (2014/05 - 2015/10)

Substitles translator of following Coursera courses:

- Team leader of translation team: "Introduction to Music Production"
- Translator of course: "History of Rock, Part One"
- Translator of course: "History of Rock, Part Two"
- Translator of course: "Jazz Improvisation"
- Translator of course: "Fundamentals of Music Rehearsing Ensembles"
- Translator of course: "The Music of Beatles"
- Translator of course: "Human-Computer Interaction"
