// Give your component a name called HourList - use React.createClass to create the object
HourList = React.createClass({
    // Render the item component in a separate function
    renderHours: function() {   
        // Iterate over this.props.data using the map function. Return the loop
        // Return the HourItem component, pass hour and key to it. 
        return this.props.mainData.map(function(mainData, i) {
            return (
                <HourItem data={mainData} key={i} />
            );
        });
    },

    // render the HourList JSX
    render: function() {    
        // return the JSX using ()
        return (
            <div>
                <ul>{this.renderHours()}</ul>
            </div>
        );
    }
});