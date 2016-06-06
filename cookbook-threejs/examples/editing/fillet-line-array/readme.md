<span style=display:none; >[You are now in GitHub source code view - click this link to view Read Me file as a web page]
( https://jaanga.github.io/cookbook-threejs/examples/editing/fillet-line-array/index.html "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/jaanga/jaanga.github.io/tree/master/cookbook-threejs/examples/editing/fillet-line-array/'; value='You are now in GitHub web page view - Click this button to view Read Me file as source code' >

[Jaanga]( https://jaanga.github.io ) &raquo; [Cookbook Three.js]( https://jaanga.github.io/cookbook-threejs/  ) &raquo;
[Examples]( https://jaanga.github.io/cookbook-threejs/examples/editing ) &raquo;



[Fillet Line Array Read Me]( index.html#readme.md )
===


## [Fillet Line Array]( https://jaanga.github.io/cookbook-threejs/examples/editing/fillet-line-array/index.html )

<iframe class=ifr src=https://jaanga.github.io/cookbook-threejs/examples/editing/fillet-line-array/index.html width=100% height=600px ></iframe>

<img src=https://cloud.githubusercontent.com/assets/547626/15804351/071d0a50-2aba-11e6-8940-1d7df887aec6.png style=display:none; >

_Fillet Line Array_

## Concept
The mission is to help the peeps at [OpenDesk]( https://www.opendesk.cc/ ) transfer data from their SketchUp files over to Three,js.

Currently they are creating humongous Three.js JSON files using Python.

The concept here is:

Given a .CSV file or Google Spreadsheet or parametric data is some format that contains points that form a polygon and fillet radii for each point, 
create Three.js path that can extrude to a 3D shape.

Allow for both convex and concave curves / inside and outside fillets.


## Features

* Multiple examples
* Displays angle calculations


## To Do

<iframe class=ifr src=http://jaanga.github.io/cookbook-html/examples/libraries/ace-editor/ace-view-r1.html#https://jaanga.github.io/cookbook-threejs/examples/editing/fillet-line-array/fillet-line-array-r3.html width=100% height=600 ></iframe>


## Issues

* Handles the angles incorrectly when adjacent fillets are of different radii. 
* Mishandles calculated concavity / convexity


## Users



### Change Log

### 2016-06-06 ~ R3

* Add readme
* Concavity / convexity === wip
* Has three examples
* Code cleanup


### 2016-06-04 ~ R2 

![image]( https://cloud.githubusercontent.com/assets/547626/15804351/071d0a50-2aba-11e6-8940-1d7df887aec6.png )