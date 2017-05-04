var React = require("react");

var MasterLayout = React.createClass({
	render: function(){
		return(
			<html>
			  <head> 
				<meta charset="utf-8"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>{this.props.name}</title>
				<link rel="stylesheet" href="/css/bootstrap.min.css"/>
				<link rel="stylesheet" href="/css/main.css"/>
				<script src="/js/jquery.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>
				<script src="/js/main.js"></script>
			  </head>
			  <body>
			  	{this.props.children}
			  </body>
			</html>	
		)
	}
});

module.exports = MasterLayout;