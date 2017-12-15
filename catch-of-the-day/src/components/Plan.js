import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

var Plan = createClass({
	displayName: 'ValuesAsNumbersField',
	propTypes: {
		label: PropTypes.string
	},
	getInitialState () {
		return {
			options: [
        { value: 0,  label: 'midnight' },
        { value: 1,  label: '1 am' },
        { value: 2,  label: '2 am' },
        { value: 3,  label: '3 am' },
        { value: 4,  label: '4 am' },
        { value: 5,  label: '5 am' },
        { value: 6,  label: '6 am' },
        { value: 7,  label: '7 am' },
        { value: 8,  label: '8 am' },
        { value: 9,  label: '9 am' },
        { value: 10,  label: '10 am' },
        { value: 11,  label: '11 am' },
        { value: 12,  label: 'noon' },
        { value: 13,  label: '1 pm' },
        { value: 14,  label: '2 pm' },
        { value: 15,  label: '3 pm' },
        { value: 16,  label: '4 pm' },
        { value: 17,  label: '5 pm' },
        { value: 18,  label: '6 pm' },
        { value: 19,  label: '7 pm' },
        { value: 20,  label: '8 pm' },
        { value: 21,  label: '9 pm' },
        { value: 22,  label: '10 pm' },
        { value: 23,  label: '11 pm' },
        { value: 0, label: 'midnight'  }
			],
			matchPos: 'any',
			matchValue: true,
			matchLabel: true,
			value: null,
			multi: false
		};
	},
	onChangeMatchStart(event) {
		this.setState({
			matchPos: event.target.checked ? 'start' : 'any'
		});
	},
	onChangeMatchValue(event) {
		this.setState({
			matchValue: event.target.checked
		});
	},
	onChangeMatchLabel(event) {
		this.setState({
			matchLabel: event.target.checked
		});
	},
	onChange(value) {
		this.setState({ value });
		console.log('Numeric Select value changed to', value);
	},
	onChangeMulti(event) {
		this.setState({
			multi: event.target.checked
		});
	},
	render () {
		var matchProp = 'any';
		if (this.state.matchLabel && !this.state.matchValue) {
			matchProp = 'label';
		}
		if (!this.state.matchLabel && this.state.matchValue) {
			matchProp = 'value';
		}
		return (
			<div className="section">
        <Select
					matchPos={this.state.matchPos}
					matchProp={matchProp}
					multi={this.state.multi}
					onChange={this.onChange}
					options={this.state.options}
					simpleValue
					value={this.state.value}
					/>
			</div>
		);
	}
});
module.exports = Plan;
