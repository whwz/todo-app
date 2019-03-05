import React, { Component } from "react";
import { MDBBtn, MDBListGroup, MDBListGroupItem, MDBAnimation } from "mdbreact";
import "./index.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: 0
    }
  }

  AddTask = () => this.setState({tasks: this.state.tasks + 1});

  RemoveTask = () => this.state.tasks > 0 ? this.setState({tasks: this.state.tasks - 1}) : this.setState({tasks: 0})

  ClearAll = () => this.setState({tasks: 0});

  render() {
    const arr = [];
    if(this.state.tasks > 0) for(let i = 0; i < this.state.tasks; i++) arr.push(i+1);
    return (
      <>

        <div class="d-flex justify-content-center">
          <MDBBtn color="primary" onClick={this.AddTask}>Add</MDBBtn>
          <MDBBtn color="warning" onClick={this.RemoveTask}>Remove</MDBBtn>
          <MDBBtn color="danger" onClick={this.ClearAll}>Clear</MDBBtn>
        </div>

          {this.state.tasks > 0 ? 
            <div class="d-flex justify-content-center text-center">
              <MDBListGroup style={{ width: "22rem"}}>
                {arr.map(item =><MDBAnimation type="bounceIn"><MDBListGroupItem key={item}>Task number {item}</MDBListGroupItem></MDBAnimation>)}
              </MDBListGroup>
            </div>
          : 
            null}
      </>
    );
  }
}

export default App;
