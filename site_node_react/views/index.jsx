var React = require("react");
var DefaultLayout = require("./layout/master");

var IndexComponent = React.createClass({
	render: function(){
		return(
			<DefaultLayout name={this.props.name}>
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-lg-offset-4">
							<h1>Hej React</h1>
						</div>
					</div>
					<div class="row">
						<p>Test Style</p>
					</div>
				</div>
			</DefaultLayout>	
		)
	}
});

module.exports = IndexComponent;