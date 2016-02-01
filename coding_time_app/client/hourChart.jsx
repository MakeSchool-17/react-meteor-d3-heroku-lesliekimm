HourChart = React.createClass({
    // Create the SVG when component is mounted & call renderChart
    componentDidMount: function() {
        var el = ReactDom.findDOMNode(this),    // get div from component using findDOMNode
        svg = d3.select(el).append('svg')       // create canvas using D3s select method
                .attr('width', this.props.width)        // add width & height attributes
                .attr('height', this.props.height)

        this.renderChart(this.props);                // call this.renderChart & pass props
    },

    // Call the renderChart function with newly pass props
    componentWillUpdate: function(newProps) {
        this.renderChart(newProps);
    },

    // Set default props here
    getDefaultProps: function() {
        return {
            width: 590,
            height: 350
        }
    },

    // Create the D3 chart
    renderChart: function(props) {

    },

    render: function(){
        return(
            <div>
            BOOM
            </div>
        );
    }
});