const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the Index Page</h1>
        <ul>
          {this.props.vegetables.map((vegetable, index) => {
            return (
              <li key={vegetable.name}>
                {vegetable.name} is the color {vegetable.color} <br />
                <form
                  action={`/vegetables/${index}?_method=DELETE`}
                  method={'POST'}
                >
                  <input type="submit" value={`DELETE ${vegetable.name}`} />
                </form>
                <a href={`/vegetables/${index}/edit`}>Edit This Vegetable</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
