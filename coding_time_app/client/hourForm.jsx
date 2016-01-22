//Give your component a name called HourForm - use React.createClass to create the object
HourForm = React.createClass({

  handleSubmit: function(e) {
    // Use the preventDefault function on the passed in event
    e.preventDefault();
    // Access the input fields using React.findDOMNode and store them in a variable
    var hoursInput = ReactDOM.findDOMNode(this.refs.hours);
    var dateInput = ReactDOM.findDOMNode(this.refs.date);
    // Use Meteor's call function 
    // Pass the insertHour function as first parameter
    // Pass the hours value as the second parameter
    // Pass the date value as the third parameter - Use Moments toDate function to pass it as an ISO date
    // Pass an anonymous callback as the fourth parameter that alerts if something goes wrong
    var date = moment(dateInput).toDate();
    Meteor.call('insertHour', hoursInput.value, date, function(error, result) {
      if (error) {
        console.log(error)
      }
    })
    console.log(hoursInput.value, date);
    // Reset the input values to empty strings
    hoursInput.value = '';
    dateInput.value = '';
  },
  render: function() {    
    // Return your JSX within brackets - the HTML should display a simple form with 
    // 2 input elements and a submit button
    return (
      <form className="hourForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="No. of Hours" ref="hours" />
        <input type="date" placeholder="MM/DD/YY" ref="date" />
        <input type="submit" value="Submit" />
      </form>     
    );
  }
});