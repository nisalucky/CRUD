import React from "react";
import { TextField, Button } from "@material-ui/core";
import Axios from "axios";

class Create extends React.Component {
  state = {
    judul: "",
    konten: ""
  };

  handleChangeJudul = event => {
    this.setState({
      judul: event.target.value
    });
  };

  handleChangeKonten = event => {
    this.setState({
      konten: event.target.value
    });
  };

  simpanData = () => {
    Axios.post("https://dummy-apis.herokuapp.com/posts", {
      title: this.state.judul,
      content: this.state.konten
    })

      .then(() => {
        alert("berhasil");
        this.props.history.goBack();
      })

      .catch(() => {
        alert("gagal");
      });
  };

  render() {
    return (
      <div>
        <form
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          <TextField
            id="judul"
            label="judul"
            onChange={e => this.handleChangeJudul(e)}
          />
          <TextField
            id="konten"
            label="konten"
            multiline
            onChange={e => this.handleChangeKonten(e)}
          />
          <Button onClick={() => this.simpanData()}>SIMPAN</Button>
          {/* {console.log(this.state.judul)} */}
        </form>
      </div>
    );
  }
}

export default Create;
