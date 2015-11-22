
	var converter, content;

	init();

	function init() {

		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = `
			body { font: 12pt monospace; left: 0; margin: 0 auto; max-width: 800px; position: absolute: right: 0; }
			figure { display: inline-block; width: 200px;}
			h1 a { text-decoration: none;  }
			iframe { border: 0px solid; }
			img { vertical-align: top; }
			input[type=button] { background-color: #eee; border: 2px #eee solid; color: #888; cursor: pointer; }
			ul li { list-style-type: square; }
			ul li ul li { list-style-type: circle; }
		`;

		var reader = document.body.appendChild( document.createElement( 'script' ) );
		reader.onload = function() {

			converter = new showdown.Converter( { strikethrough: true, literalMidWordUnderscores: true, simplifiedAutoLink: true, tables: true });
			hashChange();

		};
		reader.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js';

		window.addEventListener( 'hashchange', hashChange, false );

	}

	function hashChange() {

		var fileName = location.hash ? location.hash.substr( 1 ) : 'readme.md';

		content = content ? content : document.body.appendChild( document.createElement( 'div' ) );

		document.title = document.title ? document.title : fileName;

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'get', fileName, true );
		xmlHttp.onreadystatechange = function() {

			if ( xmlHttp.readyState !== 4 ) { return; }
 
			content.innerHTML = converter.makeHtml( xmlHttp.responseText );

			var ifr = content.getElementsByClassName( 'ifr' );

			if ( ifr !== undefined ) {

				for ( var i = 0; i < ifr.length; i++ ) {

					ifr[ 0 ].style.margin = '0 0 0' + ( -0.5 * ( window.innerWidth - document.body.clientWidth ) + 10 ) + 'px';
					ifr[ 0 ].style.width = ( window.innerWidth - 20 ) + 'px';

				}

			}

			caption = content.getElementsByTagName( 'h6' );

			if ( caption !== undefined ) {

				for ( var i = 0; i < caption.length; i++ ) {

					caption[ i ].style.margin = '0 0 0' + ( -0.5 * ( window.innerWidth - document.body.clientWidth ) + 10 ) + 'px';
					caption[ i ].style.width = ( window.innerWidth - 20 ) + 'px';

				}

			}


			figures = content.getElementsByTagName( 'figure' );

			if ( figures !== undefined ) {

				for ( var i = 0; i < figures.length; i++ ) {

					figures[ i ].style.cssText = 'display: inline-block; margin: 0 50px 50px 0 ;'; 


				}

			}

		};

		xmlHttp.send( null );

	}
