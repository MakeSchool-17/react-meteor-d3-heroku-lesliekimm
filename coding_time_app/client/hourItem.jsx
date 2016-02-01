HourItem = React.createClass({
	// Write an event handler for the onClick event
    handleClick: function() {
       	var id = this.props.data._id;		// store id in a variable - access it from this.props

       	// Use Meteor's call function & pass anonymous callback as last param to alert if something goes wrong
       	Meteor.call('removeHour', id, function(error, result) {
       		if (error) {
       			alert(error.reason)
       		}
       	})
   	},

    render: function() {
       	var date = moment(this.props.data.date).format('MM/DD/YYYY');		// get date & format
       	sentEnd = this.props.data.hours > 1 ? 'hours' : 'hour';				// determine if hour(s)

       	return (
       		<li onClick={this.handleClick}>On <strong>{date}</strong> coded <strong>{this.props.data.hours}</strong> {sentEnd}.</li>
       	);
   	}
});