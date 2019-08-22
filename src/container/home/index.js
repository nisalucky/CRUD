import React from "react";
import Axios from "axios";
import Cards from "../../component/card";
import { CardActions, Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

class HOME extends React.Component {
  state = {
    sampleData: []
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    Axios.get("https://dummy-apis.herokuapp.com/posts")
      .then(response => {
        const dataku = response.data.map(data => {
          return {
            id: data.id,
            judul: data.title,
            konten: data.content
          };
        });
        this.setState({
          sampleData: dataku
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteData = id => {
    Axios.delete(`https://dummy-apis.herokuapp.com/posts/${id}`)
      .then(() => {
        alert("berhasil dihapus");
        window.location.reload();
      })

      .catch(() => {
        alert("gagal");
        window.location.reload();
      });
  };

  render() {
    return (
      <div>
        <h2>INI HOME</h2>
        {this.state.sampleData.map(response => {
          return (
            <Card key={response.id} style={{ margin: 10 }}>
              <Cards judul={response.judul} konten={response.konten} />
              <CardActions>
                <Button>Edit</Button>
                <Button onClick={() => this.deleteData(response.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
            // <div key={response.id}>
            //   <h2>{response.judul}</h2>
            //   <h2>{response.konten}</h2>
            // </div>
          );
        })}
        <Button component={Link} to="./create">
          TAMBAH
        </Button>
      </div>
    );
  }
}

export default HOME;
