// var Greeter = React.createClass({
// 	render : function () {
// 		return (
// 			<div>
// 				<h1>Hello React!</h1>
// 				<p>My first react componenet.</p>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render( 
// 	<Greeter/> , 
// 	document.getElementById('app')
// );

// ==================================================================================

// ### Clock Example
// ### its only update the specific/needed area
// ### Clock Example

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('app'));
// }

// setInterval(tick, 1000);

// ==================================================================================

// function Welcome(props){
// 	return (
// 		<h1>My name is:{props.name}.</h1>
// 		);
// }

// const element = <Welcome name='Khan' />;

// ReactDOM.render(element,document.getElementById('app'));

// ========================Components and Props=======================================

function Welcome(props){
	return <h2>And The name is {props.salution +' '+ props.name}</h2>;
}

function App(props){
	return (
		<div>
			<Welcome salution={props.salution} name='Ali' />
			<Welcome salution={props.salution} name='Adnan' />
			<Welcome salution={props.salution} name='Zafar' />
		</div>
	);
}

const element = <App salution='Mr' />;

ReactDOM.render(element,document.getElementById('app'));
