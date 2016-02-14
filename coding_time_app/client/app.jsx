App = React.createClass({
	mixins: [ReactMeteorData],				// Add ReactMeteorData mixin - need to connect our data to our view

	// Get all data from the Hours collection database and store it in the hours variable
	getMeteorData: function() {
		return {
			data: Hours.find().fetch()		// use Mongo Collection find method to get all data
		}
	},

	// Create a data object & return it
	mapData: function() {
		// Iniitalize data object with empty variables
		var data = [
			{ q: 0, label: 'Sun' },
			{ q: 0, label: 'Mon' },
			{ q: 0, label: 'Tues' },
			{ q: 0, label: 'Wed' },
			{ q: 0, label: 'Thurs' },
			{ q: 0, label: 'Fri' },
			{ q: 0, label: 'Sat' }
		]

		// Loop over data variable & map dates from DB to day of the week
		this.data.data.map(function(date) {
			data[moment(date.date).weekday()].q += date.hours;
		})

		return data
	},

	render: function() {
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
									<HourList data={this.data.data} /> 
								</div>

							</div>

						</div>
						<div className="col-md-1"></div>
						<div className="col-md-7">

							<div className="panel panel-info">

								<div className="panel-body">
									<HourChart data={this.mapData()} />
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>
		);
	}
}); 
