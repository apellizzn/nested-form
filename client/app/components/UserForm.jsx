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

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData(this.userForm);
    console.log('form data', $(this.userForm).serialize());
    // send data to the server via ajax, collect the errors
  }

  render() {
    return (
      <form ref={(form) => this.userForm = form } onSubmit={this.onSubmit.bind(this)}>
        <h1>New User</h1>
        <label>Full Name</label>
        <input type="text" name="user[fullname]"/>
        <label>Email</label>
        <input type="text" name="user[email]"/>

        {this.renderSkill(0)}

        <input type="submit" value="Create User"/>
      </form>
    );
  }

  renderSkill(index) {
    return (
      <div>
        <label>Name</label>
        <input type="text" name={`user[skill_attributes][${index}][name]`}/>
        <label>Points</label>
        <input type="number" name={`user[skill_attributes][${index}][points]`}/>
        <label>Type</label>
        <select name={`user[skill_attributes][${index}][type]`}>{this.typeOptions}</select>
      </div>
    );
  }
}
