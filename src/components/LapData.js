import React, {Component} from 'react';
import {Consumer} from '../Context';

export default class LapData extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					return (
						<React.Fragment>
							<div id="lap-data-table"></div>
							{value.lapData.length > 0 ? (
								<div className="row justify-content-center pt-5">
									<button onClick={value.resetLapData} className="reset-laptime-button">
										Reset Lap Times
									</button>
								</div>
							) : (
								<div></div>
							)}
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
