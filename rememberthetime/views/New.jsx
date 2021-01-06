const React = require('react');
class New extends React.Component {
  render() {
    return (
      <div>
        <form action={'/vegetables'} method={'POST'}>
          <label htmlFor="">
            Name:
            <input type="text" name="name" />
          </label>
          <label htmlFor="">
            Color:
            <input type="text" name="color" />
          </label>
          <input type="submit" value="Create Vegetable" />
        </form>
      </div>
    );
  }
}
module.exports = New;
