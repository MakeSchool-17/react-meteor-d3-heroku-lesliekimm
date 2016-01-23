HourItem = React.createClass({
	render: function() {
		return(
			<li>On {moment(this.props.data.date).format('MM/DD/YYYY')} coded {this.props.data.hours} hours</li>
		);
	}

});