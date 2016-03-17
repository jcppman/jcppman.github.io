# Chriest Yu (游昀叡)

## Profile

- Gender: Male
- Birth: 1988/08/16
- Phone: +85 18621276152
- E-mail: jcppman@gmail.com
- Github: https://github.com/jcppman
- NPM: https://www.npmjs.org/~jcppman

## Brief

- Shanghai-based software engineer
- Mainly work on frontend tech & nodejs
- Excellent problem solver
- Music Maniac / Independent Musician
- Translator

## Professional Experience

### Qisense Technology (2014/1 - Now)

##### Online Analyzing Modules

A web application for analyzing trading data in real-time. Users can upload
their own trading records to the system, system will provides user recommandations
and strategy based on given data.

- Duration: 2014/11 - Now
- Stack: NodeJs/Express/Gulp/Less/AngularJS
- Responsibility:
    0. Design the frontend architecture
    0. Build the scaffold
    0. Setup an incremental building gulp script
    0. Implement an angular service for manipulating and uploading files via
       websocket. The file will be sliced into chunks and transmitted
       sequentially.
    0. Implement 40% of the module

##### Data Relation Inspector

A single page application for inspecting data relationship. The goal of this
web application is to reveal the inner relation of data. This project is
full-stacked, the server-side grabs analyzed data from DB and provides it to
client-side. Client-side display data via charts and topology maps, which is a
big challange because of the large scale of nodes.

- Duration: 2014/09 - Now
- Stack: NodeJs/Express/Grunt/Gulp/Less/AngularJS/D3.js/PIXI.js
- Responsibility:
    0. Implement the client-side of current version
    0. Implement the server-side of current version
    0. Migrate from grunt to gulp

##### Distributed Crawler Cluster

A scalable, incremental and expandable web crawling system. The system will keep
monitoring several B2C and C2C e-commerce platforms and fetching new product info
and consumer reviews. The system is able to crawl not only static webpages but
also ajax-loaded contents. The system is separated into several layers and
each layer is transparent to its dependent, make it expandable and scalable.

- Duration: 2014/01 - 2014/09
- Stack: NodeJs/MongoDB/Redis/PhantomJS
- Responsibility:
    0. Desing and implement the task manager and scheduling machanism
    0. Design and implement the incremetal crawling mechanism
    0. Decouple the dispatcher and actual crawlers, thus the actual crawlers can
       be any executable program written in any language
    0. Design and implement the page crawlers

### Distribution and Mobile Computing Lab of Beihang University (2010/08 - 2013/12)

##### HTML5-Based Augmented Reality Museum Guide

This project is aim to develop a HTML5 web-application whose main task is
providing tourisms extra information about the OOI(Object Of Interest).
The application will captures the video from terminal's camera, detecting
objects, points out each partials and marks their extra information on top of
it. This application uses WebRTC to fetch images from the camera in
HTML5-compatible browsers, compress them and transfer it to server via
websocket. The server-side is powered by Storm and Node.js.

- Duration: 2012/10 - 2013/12
- Stack: Storm/Python/Node.js/OpenCV
- Responsibility:
    0. Design the architecture
    0. Survey and implement the binary feature based 3D object recognition arithmetic
    0. Study and implement the position estimation and registration module
    0. Integrate all module into a HTML5 web-application

##### Bacnet/Modbus Energy Monitoring System

This project is aim to build an energy consumption analysing system to optimise
the usage of buildings' air-conditioner. The system will acquires parameters of
blowers, rerigerators and ammeters by Bacnet/IP and Modbus, also provides user
an interface to control them remotely and manage the alarm event trigger. When
an alarm event is triggered, it will send notifications via email and SMS text
to the administrator. The system is already deployed on Carrefour and Shanghai
Pharmaceuticals Holding Company.

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

This was a personal project for spending spare time during my military service,
sold to MDK Medical Equipments later. The system is deployed on Kaohsiung E-Da
Hospital. The air pressure monitoring device is an AT8051 powered chipboard
with a pressure sensor. The device can be attached on the gas supplier and the
exchange system, they would send the present values and parameters via RS-485
to a transfer hub. The transfer hub will send those data to the server via
TCP/IP. After the data is received by the server, it could be observed by
administrators on the web application.

- Duration: 2011/08 - 2012/07
- Stack: C51/Ruby On Rails
    0. Design the architecture
    0. Design a simplified Modbus-like protocol
    0. Develop terminal-side program:
        - A ultra-micro operation system for AT8051 which only contains
          essential functions: Input handler, transport protocol stack…etc.
        - Data acquisition module
        - Control module
        - Communication module
    0. Develop server-side program:
        - Protocol stack
        - Terminal configuration module
        - Server-side monitoring daemon with ruby
        - Web interface

##### Satellite Attitude Observing System

This project is aim to develop an utility for debugging satellite communication
modules. The utility would receive observed data from RS-232. After extracting
the parameters, it will display the calculated position and attitude and show a
fancy 3d satellite model to demonstrate the state of the satellite.

- Duration: 2010/12 - 2011/01
- Stack: C#/OpenGL
- Responsibility: My main task is rendering 3d satellite model according to the
  given attitude parameters. Because the lack of 3d model resolver in C#, I
  also develop a simple parser for Soilwork exported model files.

##### Comsat networking examination and applying system

This system provides comsat networking applicants an online applying interface
to submit their application and check the examination reports, also provides
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

The intern was separated into two stages. The first stage is a training phase.
We learned the basic computer graphic knowledge by implementing GPU rendering
pipelines on CPU via C++ and DirectX 3D, which includes triangle rasterization,
perspective projection, texture binding and lighting. In the second stage, I
was in charge of the implementation  of their game engine's global lighting
system. I accomplished the light tracing and photon mapping modules before my
internship ended.

## Education

| Duration | Institution | Department | Degree
| -------- | ----------- | ---------- | -------
| 2010/09 - 2013/12 | Beihang University | Computer Science and Technology | Master |
| 2006/09 - 2010/08 | Beihang University | Measuring and Control Technology and Instrumentation | Bachelor |

## Other Activities

### Eduinfinity Translation Group (2014/05 - Now)

Subtitles translator of following Coursera courses:

- Team leader of translation team: "Introduction to Music Production"
- Translator of course: "History of Rock, Par One"
- Translator of course: "History of Rock, Par Two"
- Translator of course: "Jazz Improvisation"
- Translator of course: "Fundamentals of Music Rehearsing Ensembles"
- Translator of course: "The Music of Beatles"
- Translator of course: "Human-Computer Interaction"

## Personal Interests

Regard music as part of my soul, addict to music technology, love visual arts.
An amateur recording & mixing engineer, a bass player and singer/songwritter.
Favorite directors are Quentin Tarantino and Stanley Kubrick.
