import React, {Component} from 'react';

//creating Context API
const Context = React.createContext();

class Provider extends Component {
	//state management
	state = {
		startActivated: false,
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0,
		lapData: [],
		lapDataFromLocalStorage: []
	};

	componentDidMount() {
		this.storeLapDataOnRefresh();
		localStorage.clear();
	}

	resetLapData = () => {
		document.getElementById('lap-data-table').innerHTML = '';
		this.setState({lapData: []});
	};

	storeLapDataOnRefresh = () => {
		for (let i = 1; i <= localStorage.length; i++) {
			let previousLapsWrapper = document.createElement('DIV');
			previousLapsWrapper.className = 'row justify-content-left';
			previousLapsWrapper.id = `previous-lap-data-point${i}`;

			//displaying lap number
			let previousLap = document.createElement('div');
			previousLap.className = 'col-6 text-right';
			previousLap.innerHTML = 'Lap ' + i;

			//displaying lap number time
			let previousLapTime = document.createElement('div');
			previousLapTime.className = 'col-6 text-left';
			previousLapTime.innerHTML = localStorage.getItem(`lapData${i}`);

			//appending lap number and lap number time to the div
			previousLapsWrapper.appendChild(previousLap);
			previousLapsWrapper.appendChild(previousLapTime);

			//append all lap info to lap data table, which is displayed on the HTML page
			document
				.getElementById('previous-lap-data-table')
				.appendChild(previousLapsWrapper);

			let localStorageData = this.state.lapDataFromLocalStorage;
			localStorageData.push(localStorage.getItem(`lapData${i}`));
			this.setState({lapDataFromLocalStorage: localStorageData});
		}
		console.log(this.state.lapDataFromLocalStorage);
		console.log(this.state.lapData);
	};

	resetOrSetLap = () => {
		if (this.state.startActivated === false) {
			this.setState({hours: 0, minutes: 0, seconds: 0, milliseconds: 0});
		} else {
			//retrieving stopwatch time displayed on HTML page & pushing all laptimes into array.
			let lapData = this.state.lapData;
			lapData.push(
				`${document.getElementById('hours').innerHTML}:${
					document.getElementById('minutes').innerHTML
				}:${document.getElementById('seconds').innerHTML}:${
					document.getElementById('milliseconds').innerHTML
				}`
			);

			localStorage.setItem(
				`lapData${lapData.length}`,
				lapData[lapData.length - 1]
			);

			console.log(localStorage);
			this.setState({lapData: lapData}, () => {
				//callback function creating a div to display lap times
				let newLapWrapper = document.createElement('div');
				newLapWrapper.className = 'row justify-content-center pt-3';
				newLapWrapper.id = `lap-data-point${lapData.length}`;
				console.log(this.state.lapData);

				//displaying lap number
				let newLap = document.createElement('div');
				newLap.className = 'col-md-2 col-12 text-center';
				newLap.innerHTML = 'Lap ' + lapData.length.toString();

				//displaying lap number time
				let newLapTime = document.createElement('div');
				newLapTime.className = 'col-md-2 col-12 text-center';
				newLapTime.innerHTML = localStorage.getItem(
					`lapData${this.state.lapData.length}`
				);

				//appending lap number and lap number time to the div
				newLapWrapper.appendChild(newLap);
				newLapWrapper.appendChild(newLapTime);

				//append all lap info to lap data table, which is displayed on the HTML page
				document.getElementById('lap-data-table').appendChild(newLapWrapper);
			});
		}
	};

	setTimer = () => {
		this.setState({startActivated: !this.state.startActivated}, () => {
			let ms = this.state.milliseconds;
			let secs = this.state.seconds;
			let mins = this.state.minutes;
			let hrs = this.state.hours;
			if (this.state.startActivated === true) {
				this.msTimer = setInterval(() => {
					if (this.state.milliseconds < 99) {
						ms++;
						this.setState({milliseconds: ms});
					} else if (this.state.seconds < 59) {
						ms = 0;
						secs++;
						this.setState({milliseconds: ms, seconds: secs});
					} else if (this.state.minutes < 59) {
						mins++;
						secs = 0;
						ms = 0;
						this.setState({milliseconds: ms, seconds: secs, minutes: mins});
					} else {
						hrs++;
						mins = 0;
						secs = 0;
						ms = 0;
						this.setState({
							milliseconds: ms,
							seconds: secs,
							minutes: mins,
							hours: hrs
						});
					}
				}, 10); //1000 ms in a second, however, 10 is used to slow down the interval so only 2 digits is used
			} else {
				clearInterval(this.msTimer);
			}
		});
	};

	render() {
		return (
			//allowing functions and state to be read across all components
			<Context.Provider
				value={{
					...this.state,
					setTimer: this.setTimer,
					resetOrSetLap: this.resetOrSetLap,
					resetLapData: this.resetLapData
				}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

const Consumer = Context.Consumer;

export {Provider, Consumer};
