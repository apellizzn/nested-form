import React, { PropTypes } from 'react';

export default class UserForm extends React.Component {

  static propTypes = {
    types: PropTypes.array.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.typeOptions = [(<option key="0">Select type..</option>)]
      .concat(this.props.types.map(this.toOption));
  }

  toOption = type => <option key={type} value={type}>{type}</option>

  render() {
    return (
      <form>
        <h1>New User</h1>
        <label>Full Name</label>
        <input type="text" name="fullname"/>
        <label>Email</label>
        <input type="text" name="email"/>
        <h2>Skills</h2>
        <label>Name</label>
        <input type="text" name=""/>
        <label>Points</label>
        <input type="number" name=""/>
        <label>Type</label>
        <select name="">{this.typeOptions}</select>
        <br/>
        <label>Name</label>
        <input type="text" name=""/>
        <label>Points</label>
        <input type="number" name=""/>
        <label>Type</label>
        <select name="">{this.typeOptions}</select>
        <br/>
        <input type="submit" value="Create User"/>
      </form>
    );
  }
}
