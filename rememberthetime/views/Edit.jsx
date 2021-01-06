const React = require('react');
class Edit extends React.Component {
  render() {
    return (
      <div>
        <form
          action={`/vegetables/${this.props.index}?_method=PUT`}
          method={'POST'}
        >
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              defaultValue={this.props.vegetable.name}
            />
          </label>
          <label htmlFor="">
            Color:
            <input
              type="text"
              name="color"
              defaultValue={this.props.vegetable.color}
            />
          </label>
          <input type="submit" value="Edit Vegetable" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
