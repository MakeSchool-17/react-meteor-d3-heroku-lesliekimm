HourList = React.createClass({
    // Render the item component in a separate function
    renderHours: function() {   
        return this.props.data.map(function(data, i) {  // iterate over this.props.data using map key
            return (
                <HourItem data={data} key={i} />        // return HourItem compoenent, pass hour & key to it
            );
        });
    },

    render: function() {    
        return (
            <div>
                <ul>{this.renderHours()}</ul>
            </div>
        );
    }
});