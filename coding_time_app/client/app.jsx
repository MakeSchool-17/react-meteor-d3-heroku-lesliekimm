// Give your component a name called App - use React.createClass to create the object
App = React.createClass({
  // Add the ReactMeteorData mixin - we need to connect our data to our view
  mixins: [ReactMeteorData],

  // Get data from the database and store it in the hours variable
  getMeteorData: function() {
    // Get all data from the Hours collection
    return {
      // Use the Mongo Collection find method to get all data
      stuff: Hours.find().fetch()
    }
  },
  // Use React's render function and write some JSX (which uses regular HTML)
  // to support our 2 column structure and a div for each component we will have
  render: function() {
    // Return the JSX inside of brackets
    return (
      <div>
        <div className="page-header">
          <h1 className="text-center"><i className="fa fa-clock-o"></i>  Hours Spent Coding</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">Hours Spent Coding</h3>
                </div>
                <div className="panel-body">
                  <HourForm />
                </div>
              </div>

              <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Hours History <small>Click to remove</small></h3> 
                </div>
                <div className="panel-body">
                  <HourList mainData={this.data.stuff} /> 
                </div>
              </div>
            </div>
      
            <div className="col-md-8">
              <div className="panel panel-info">
                <div className="panel-body">
                  pretty chart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}); 
