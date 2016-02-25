var Popup = React.createClass({
	propTypes:{
		meth : React.PropTypes.string,
		act : React.PropTypes.string
	},
	config:{
		parent : 'popup'
	},
	render: function() {
		var meth = this.props.meth
		var act = this.props.act
		return (
		    <div className="overload popup_js">
		        <div className="helper"></div>
		        <div className="popup richtext">
		        <a href="javascript:void(0)" className="btn_close btn_close_js">X</a>
		        Primera prueba PopUp
		        </div>
		    </div>
		);
	}
});
React.render(<Popup />, document.getElementById(this.config.parent));