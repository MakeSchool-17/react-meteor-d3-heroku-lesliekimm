// Give your component a name called HourItem - use React.createClass to create the object
HourItem = React.createClass({
	// Write an event handler for the onClick event, called handleClick.
    handleClick: function() {
    	// Store id in a variable. Access it from this.props.
       	var id = this.props.data._id;

       	// Use the Meteor method "call". Pass 'removeHour' as the first parameter, id as the second, 
       	// a function alerting any errors as third parameter
       	Meteor.call('removeHour', id, function(error, result) {
       		if (error) {
       			console.log(error)
       		}
       	})
   	},

    // Obligatory render method
    render: function() {
       	// Get the date from this.props.hour.date and format it to 'DD/MM/YYYY' using Moment. Store it in a variable.
       	var date = moment(this.props.data.date).format('MM/DD/YYYY');
       	// Determine if the end of the sentence should say hour or hours based on this.props.hour.hours. Store it in a variable.
       	// sentEnd = CODE HERE

       	// Return a list item with an onClick handler. Let the item say "On DD/MM/YYYY coded ? hour/hours."
       	// Variables have to be accessed within curly brackets => {date}
       	return (
       		<li onClick={this.handleClick}>On {date} coded {this.props.data.hours} hours</li>
       	);
   	}
});