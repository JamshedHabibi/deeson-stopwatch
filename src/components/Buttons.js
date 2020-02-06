import React, {Component} from 'react';
import {Consumer} from '../Context';

export default class Buttons extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const {startActivated, setTimer, resetOrSetLap} = value;
					return (
						<div className="row justify-content-center pt-5 mt-5">
							<div className="col-2 text-center">
								<button className="button" onClick={resetOrSetLap}>
									{!startActivated ? 'Reset' : 'Lap'}
								</button>
							</div>
							<div className="col-2 text-center">
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
