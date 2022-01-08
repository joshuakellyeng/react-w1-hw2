//grocery receipts array
const supplies = [
	{
		item: 'Bath Tissue',
		brand: 'Kirkland',
		units: '36 Rolls',
		quantity: 1,
		price: 26.99,
		isPurchased: false,
	},
	{
		item: 'Paper Towels',
		brand: 'Kirkland',
		units: '12 Rolls',
		quantity: 1,
		price: 19.99,
		isPurchased: false,
	},
	{
		item: 'Signature Napkins',
		brand: 'Kirkland',
		units: '1120 Napkins',
		quantity: 1,
		price: 11.49,
		isPurchased: false,
	},
];

class App extends React.Component {
	render() {
		return <h1>Hello, we are connected!</h1>;
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));
