import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);

		}
	}

	vote (i) {
		let newCuisine = [...this.state.cuisines];
		newCuisine[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({cuisines: newCuisine});

	}

	render(){
		return(
			<>
				<h1>Vote your favourite cuisine!</h1>
				<div className="cuisines">
					{
						this.state.cuisines.map((food, i) =>
							<div key={i} className="cuisines">
								<div className="voteCount">
									{food.votes}
								</div>
								<div className="cuisineName">
									{food.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;
