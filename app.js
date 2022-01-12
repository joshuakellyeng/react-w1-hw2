class App extends React.Component {
	state = {
		supplies: suppliesList,
		item: '',
		units: '',
		quantity: 0,
		price: 0,
	};

	//arrow function
	//handle change 
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSumbit = e => {
		e.preventDefault();
	
	}

	render() {
		return (
			<div class="ui segment">
				<h1>RostCo Wholesale</h1>
				<div id="new-item">
					<form class="ui form">
						<label htmlFor="item">Item:</label>
						<input
							id="item"
							type="text"
							value={this.state.item}
							onChange={this.handleChange}
						/>
						<label htmlFor="units">Units:</label>
						<input id="units" type="text" value={this.state.units} onChange={this.handleChange}  />
						<label htmlFor="quantity">Quantity:</label>
						<input id="quantity" type="text" value={this.state.quantity} onChange={this.handleChange} />
						<button>
							<i class="shop icon"></i>
						</button>
					</form>
				</div>

				<div class="supplies">
					{this.state.supplies.map((supply) => (
						<div class="ui segment">
							<h1>Item: {supply.item}</h1>
							<h2>Units: {supply.units}</h2>
							<h4>Qty: {supply.quantity}</h4>
						</div>
					))}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));
