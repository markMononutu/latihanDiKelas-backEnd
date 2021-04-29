import { Component } from "react";
import ListStudent from "./components/ListStudents";

class App extends Component {
  state = {
    isShow: true,
  };

  toggleButton = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const backend = [
      {
        name: "John",
        address: "Manado",
      },
      {
        name: "Jane",
        address: "Airmadidi",
      },
      {
        name: "Bob",
        address: "Tondano",
      },
    ];

    const webProgramming = [
      {
        name: "Smith",
        address: "Manado",
      },
      {
        name: "Peter",
        address: "Airmadidi",
      },
      {
        name: "Mayrra",
        address: "Tondano",
      },
    ];
    return (
      <div>
        {this.state.isShow && (
          <ListStudent title="Back-end Programming Class" students={backend} />
        )}

        {/* <ListStudent title="Web-Programming Class" students={webProgramming} /> */}
        <button onClick={this.toggleButton}>Toggle List Student</button>
      </div>
    );
  }
}

export default App;
