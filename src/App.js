import React, {Component} from 'react';
import './App.css';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import LapData from './components/LapData';
import PreviousLapData from './components/PreviousLapData';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container pt-5 mt-2">
					<Timer />
					<Buttons />
					<LapData />
				</div>

				<div className="container-fluid previous-lap-data">
					<PreviousLapData />
				</div>
			</React.Fragment>
		);
	}
}
