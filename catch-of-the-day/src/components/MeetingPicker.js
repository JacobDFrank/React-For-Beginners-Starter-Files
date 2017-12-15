import React from 'react';
import { getFunName } from '../helpers';

class MeetingPicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    const calId = this.storeInput.value;
    console.log(`Going to ${calId}`)
    // second we're going to transition from / to /store/:calId
    this.context.router.transitionTo(`/store/${calId}`);
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Meeting Title</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Meeting →</button>
      </form>
    )
  }
}

MeetingPicker.contextTypes = {
  router: React.PropTypes.object
}

export default MeetingPicker;
