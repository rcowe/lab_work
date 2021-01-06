const React = require('react');
class Show extends React.Component {
  render() {
    const { vegetable, index } = this.props; // vegetable = this.props.vegetable, index = this.props.index
    return (
      <div>
        <h1>This is the Show Page</h1>
        <div key={vegetable.name}>
          {vegetable.name} is the color {vegetable.color} <br />
          <form action={`/vegetables/${index}?_method=DELETE`} method={'POST'}>
            <input type="submit" value={`DELETE ${vegetable.name}`} />
          </form>
          <a href={`/vegetables/${index}/edit`}>Edit This Vegetable</a>
        </div>
      </div>
    );
  }
}
module.exports = Show;
