import React, {Component} from 'react';
import {Consumer} from '../Context';

export default class Timer extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const {hours, minutes, seconds, milliseconds} = value;
					return (
						<div className="col-12 text-center">
							<p className="row justify-content-center" id="displayed-time">
								<span className="px-md-3 col-xs-12 displayed-time-unit">
									<span className="row">
										<span className="col-12" id="hours">
											{hours.toString().length > 1 ? hours : '0' + hours.toString()}
										</span>
										<span className="displayed-time-unit-description col-12">
											hour(s)
										</span>
									</span>
								</span>

								<span className="px-md-3 col-xs-12 displayed-time-unit">
									<span className="row">
										<span className="col-12" id="minutes">
											{minutes.toString().length > 1 ? minutes : '0' + minutes.toString()}
										</span>
										<span className="displayed-time-unit-description col-12">
											minute(s)
										</span>
									</span>
								</span>

								<span className="px-md-3 ml-2 ml-md-0 col-xs-12 displayed-time-unit">
									<span className="row">
										<span className="col-12" id="seconds">
											{seconds.toString().length > 1 ? seconds : '0' + seconds.toString()}
										</span>
										<span className="displayed-time-unit-description col-12">
											second(s)
										</span>
									</span>
								</span>

								<span className="px-md-3 col-xs-12">
									<span className="row">
										<span className="col-12" id="milliseconds">
											{milliseconds.toString().length > 1
												? milliseconds
												: '0' + milliseconds.toString()}
										</span>
										<span className="displayed-time-unit-description col-12">
											millisecond(s)
										</span>
									</span>
								</span>
							</p>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
