import { Component } from "react";

class ListStudent extends Component {
  state = {
    subTitle: "Welcome",
  };

  handleChange = () => {
    this.setState({ subTitle: "Selamat Datang" });
  };

  componentDidMount() {
    console.log("component did mount dijalankan");
  }
  componentDidUpdate() {
    console.log("component did update dijalankan");
  }
  componentWillUnmount() {}

  render() {
    console.log("render dijalankan");
    const { title, students } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{this.state.subTitle}</p>
        <ul>
          {students.map((student) => {
            return <li>{student.name}</li>;
          })}
        </ul>

        <button onClick={this.handleChange}>Change Subtitle</button>
      </div>
    );
  }
}

export default ListStudent;
