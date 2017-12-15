import React, { Component } from 'react';
import DayRange from '../../components/DayRange'
import {
Form,
Button,
FormItem,
TextField,
SelectBox,
} from 'reactackle';

const data = [
  { text: 'midnight', value: 0 },
  { text: '1 am', value: 1 },
  { text: '2 am', value: 2 },
  { text: '3 am', value: 3 },
  { text: '4 am', value: 4 },
  { text: '5 am', value: 5 },
  { text: '6 am', value: 6 },
  { text: '7 am', value: 7 },
  { text: '8 am', value: 8 },
  { text: '9 am', value: 9 },
  { text: '10 am', value: 10 },
  { text: '11 am', value: 11 },
  { text: 'noon', value: 12 },
  { text: '1 pm', value: 13 },
  { text: '2 pm', value: 14 },
  { text: '3 pm', value: 15 },
  { text: '4 pm', value: 16 },
  { text: '5 pm', value: 17 },
  { text: '6 pm', value: 18 },
  { text: '7 pm', value: 19 },
  { text: '8 pm', value: 20 },
  { text: '9 pm', value: 21 },
  { text: '10 pm', value: 22 },
  { text: '11 pm', value: 23 },
  { text: 'midnight', value: 0 },
];

export class PlanStart extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(key) {
    return ({ value }) => this.setState({ [key]: value });
  }
  _getValue(key) {
    return this.state[key] ? this.state[key] : 1;
}
 render() {
    return (
      <div>

      <Form>
        <FormItem>
          <TextField bordered placeholder="Bordered TextField" />
        </FormItem>
        <FormItem>
          <p>Ready?</p>
          <Button text="Create Event"/>
        </FormItem>
      </Form>

      <SelectBox
        value={this._getValue(0)}
        options={data}
        placeholder={'Choose option...'}
        onChange={this._handleChange(0)}
        label="No ealier than:"
      />

      <SelectBox
        value={this._getValue(0)}
        options={data}
        placeholder={'Choose option...'}
        onChange={this._handleChange(0)}
        label="No later than:"
      />

      <DayRange/>
      </div>
    );
  }
}
