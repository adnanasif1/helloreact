

var Comment = React.createClass({
	getInitialState: function () {
		return {editing:false}
	},
	edit: function(){
		this.setState({editing:true});
	},
	remove: function(){
		//this.setSatate({editing:true});
		console.log('removed');
	},
	save:function(){
		var val = this.refs.newText.value;
		console.log('new val is = ' + val);
		
		this.setState({editing:false});
	},
	renderNormal: function (){
		return (
			<div className="commentContainer">
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="btn btn-primary">Edit</button>
				<button onClick={this.remove} className="btn btn-danger">Remove</button>
			</div>
		);
	},
	renderForm: function (){
		return (
			<div className="commentContainer">
				<textarea ref="newText">{this.props.children}</textarea>
				<button onClick={this.save} className="btn btn-primary">Save</button>
			</div>
		);
	},
	render: function(){
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}
});

ReactDOM.render(
	<div>
		<Comment>Hi!</Comment>
		<Comment>There...</Comment>
		<Comment>This is me adnan</Comment>
	</div>
	, document.getElementById('app')
);


