HourForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();         // se the preventDefault function on the passed in event
        var hoursInput = ReactDOM.findDOMNode(this.refs.hours); // access input fields
        var dateInput = ReactDOM.findDOMNode(this.refs.date);   // access input fields
        
        // Use Meteor's call function & pass anonymous callback as 4th param to alert if something goes wrong
        var date = moment(dateInput.value).toDate();            // convert to Date object
        Meteor.call('insertHour', hoursInput.value, date, function(error, result) {
            if (error) {
                alert(error.reason)
            }
        })
    
        hoursInput.value = '';      // reset input values
        dateInput.value = '';       // reset input values
  },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="hoursInput">Number of Hours</label>
                    <input className="form-control" type="text" placeholder="No. of Hours" ref="hours" />
                </div>
        
                <div className="form-group">
                    <label htmlFor="dateInput">Date</label>
                    <input className="form-control" type="date" placeholder="MM/DD/YY" ref="date" />
                </div>
        
                <input className="btn btn-primary btn-block" type="submit" value="Add Hours" onClick={this.handleSubmit} />

            </form>     
        );
    }
});