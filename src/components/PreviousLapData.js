import React, {Component} from 'react';
import {Consumer} from '../Context';

export default class PreviousLapData extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					return (
						<div className="lap-data-from-local-storage">
							<div className="row justify-content-left">
								{value.lapDataFromLocalStorage.length > 0 ? (
									<div className="col-12 text-center ml-3 pr-1">
										<h6>PREVIOUS LAP DATA</h6>
									</div>
								) : (
									<div></div>
								)}
							</div>
							<div id="previous-lap-data-table"></div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
