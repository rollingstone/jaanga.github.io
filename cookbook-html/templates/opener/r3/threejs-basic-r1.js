	var stats, renderer, scene, camera, controls;

//	init();
//	animate();

	function init() {

		var geometry, material, mesh;
		var css, hamburger, menu;

		css = document.head.appendChild( document.createElement( 'style' ) );
		css.innerHTML =

			'body { font: 12pt monospace; margin: 0; overflow: hidden; }' +
			'a {text-decoration: none; }' +
			'h2 { margin: 0 }' +

			'button { background-color: #eee; border: 2px #eee solid; color: #888; }' +

/*			'input[type=range] { -webkit-appearance: none; -moz-appearance: none; background-color: silver; height: 20px; width: 180px; }' +
			'input[type=range]::-moz-range-thumb { -moz-appearance: none; background-color: #888; height: 20px; width: 10px; }' +
			'input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; opacity: 0.85; width: 10px; }' +
*/
			'#bars { color: pink; cursor: pointer; font-size: 24pt; text-decoration: none; }' +
			'#hamburger { left: 325px; position: absolute; top: 20px; transition: left 1s; }' +
			'#menu { background-color: #eee; border: 1px #ccc solid; left: -324px; max-height: ' + ( window.innerHeight - 10 ) + 'px; ' +
				'opacity: 0.85; overflow: auto; padding: 0 10px; position: absolute; top: -20px; transition: left 1s; width: 300px; }' +

		'';
		hamburger = document.body.appendChild( document.createElement( 'div' ) );
		hamburger.id = 'hamburger';
		hamburger.innerHTML = '<div id=bars > &#9776; </div>';
		bars.onclick = function() { hamburger.style.left = hamburger.style.left === "0px" ? "325px" : 0; };

		menu = hamburger.appendChild( document.createElement( 'div' ) );
		menu.id = 'menu';
		menu.innerHTML =

			'<h2>' +
				'<a href="" >' + document.title + '</a>' +
				'<a href=index.html#readme.md > &#x24D8; </a>' +
			'</h2>' +
			'<p><input type=checkbox onchange=mesh.material.wireframe=!mesh.material.wireframe; > Wireframe</p>' +
/*			'<p><button onclick=doIt(); >do it</button></p>' +
			'<p>Zoom: <input type=range id=inp max=10 min=0 step=1 value=5 oninput=out.value=inp.value; title="0 to 10: OK" > <output id=out >value</output></p>' +
*/			'<div id=info ></div>' +

		'';

		stats = new Stats();
		stats.domElement.style.cssText = 'position: absolute; right: 0; top: 0; z-index: 100;' ;
		document.body.appendChild( stats.domElement );

		window.addEventListener( 'resize', onWindowResize, false );

		renderer = new THREE.WebGLRenderer( {  alpha: 1, antialias: true }  );
//		renderer.setClearColor( 0xf0f0f0 );
//		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 100, 100, 100 );

		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.maxDistance = 800;

		scene = new THREE.Scene();

// helpers

		geometry = new THREE.BoxGeometry( 100, 2, 100 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, -11, 0 );
		scene.add( mesh );

		var gridHelper = new THREE.GridHelper( 50, 10 );
		gridHelper.position.set( 0, -10, 0 );
		scene.add( gridHelper );

		var axisHelper = new THREE.AxisHelper( 50 );
		scene.add( axisHelper );

// assets


	}


	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function animate() {

		requestAnimationFrame( animate );
//		controls.update();
		stats.update();
		renderer.render( scene, camera );

	}
