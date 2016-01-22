// Give your component a name called App - use React.createClass to create the object
App = React.createClass({
  // Add the ReactMeteorData mixin - we need to connect our data to our view
  mixins: [ReactMeteorData],

  // Get data from the database and store it in the hours variable
  getMeteorData: function() {
    // Get all data from the Hours collection
    return {
      // Use the Mongo Collection find method to get all data
      data: Hours.find().fetch()
    }
  },

  // Use React's render function and write some JSX (which uses regular HTML)
  // to support our 2 column structure and a div for each component we will have
  render: function() {
    // Return the JSX inside of brackets
    return (
      <div>
        <div>
          Hours Spent Coding
        </div>

        <div id="body">
          <div id="left">
            <div id="top-left">
             <HourForm/>
            </div>
           <div id="bottom-left">
             bottom left
            </div>
          </div>
      
          <div id="right">
            right
         </div>
        </div>
      </div>
    );
  }
});
