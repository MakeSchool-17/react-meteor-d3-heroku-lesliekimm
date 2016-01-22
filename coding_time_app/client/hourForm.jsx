HourForm = React.createClass({
	handleSubmit: function(e) {
       // Use the preventDefault function on the passed in event
       e.preventDefault();
       // Access the input fields using React.findDOMNode and store them in a variable
       var params = ReactDOM.findDOMNode()
       // Use Meteor's call function 
       // Pass the insertHour function as first parameter
       // Pass the hours value as the second parameter
       // Pass the date value as the third parameter - Use Moments toDate function to pass it as an ISO date
       // Pass an anonymous callback as the fourth parameter that alerts if something goes wrong
       // CODE HERE

       Meteor.call('insertHour', params[0], Moments.toDate(params[1]), function (error, result) {console.log(error)});

       // Reset the input values to empty strings
       // CODE HERE
     },

	render: function() {
       // Return your JSX within brackets - the HTML should display a simple form with 
       // 2 input elements and a submit button
       return (
            <div>
            	<input type="text" ref="hoursInput"/>
            	<input type="text" ref="dateInput"/>
            	<input type="button" value="Submit" onSubmit={this.handleSubmit}/>
            </div>      
       );
	}
});