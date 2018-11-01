# Mobile Web Specialist
---
#### _Three Stage Project - Restaurant Reviews_




## Project Overview:

For the **Restaurant Reviews** projects, I incrementally converted a static webpage into a mobile-ready web application. 

In **Stage One**, I took a static design that lacked accessibility and converted the design to be responsive on different-sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.

In **Stage Two**, I took the responsive, accessible design that I built in Stage One and connected it to an external server. I began by using asynchronous JavaScript to request JSON data from the server. I store data received from the server in an offline database using IndexedDB, which creates an app shell architecture. Finally, I optimized my site to meet performance benchmarks, which I tested using Lighthouse.


### Specification

In **Stage One**, we were provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. 

In **Stage Two**, we were provided code for a Node development server and a README for getting the server up and running locally on our computer. That [README](https://github.com/rob4abcba/mws-restaurant-stage-2-server/blob/master/README.md) contains the API we need to make JSON requests to the server. Once I had the server up, I began the work of improving my Stage One project code.

The core functionality of the application did not change for this stage. Only the source of the data changed. I used the fetch() API to make requests to the server to populate the content of my Restaurant Reviews app.

In **Stage Two**, I use server data instead of local memory. In the first version of the application, all of the data for the restaurants was stored in the local application. In **Stage Two**, I pull all of the data from the server instead, and use the response data to generate the restaurant information on the main page and the detail page.

I used IndexedDB to cache JSON responses. In order to maintain offline use with the development server, I update the service worker to store the JSON received by our requests using the IndexedDB API. As with Stage One, any page that has been visited by the user is made available offline, with data pulled from the shell database.

In **Stage Two**, I had to meet the minimum performance requirements. Once I had my app working with the server and working in offline mode, I measured my site performance using Lighthouse.

Lighthouse measures performance in four areas, but I focused on three:

Progressive Web App score 90 or better.
Performance score 70 or better.
Accessibility score 90 or better.
I audited my site's performance with Lighthouse by using the Audit tab of Chrome Dev Tools.


### HTTP server to serve up the site files

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `py -m http.server 8000` or `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`


## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.



