import React, {Component} from 'react';
import {Consumer} from '../Context';

export default class Buttons extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const {startActivated, setTimer, resetOrSetLap} = value;
					return (
						<div className="row justify-content-center pt-5 mt-5 reset-lap-buttons">
							<div className="col-md-2 col-12 text-center">
								<button className="button" onClick={resetOrSetLap}>
									{!startActivated ? 'Reset' : 'Lap'}
								</button>
							</div>
							<div className="col-md-2 col-12 pt-2 pt-md-0 text-center">
								<button className="button" onClick={setTimer}>
									{!startActivated ? 'Start' : 'Stop'}
								</button>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
