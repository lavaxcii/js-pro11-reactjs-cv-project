import './styles/App.css';
import React, { Component } from 'react'
import SectionComp from './components/SectionComp';
import InputComp from './components/InputComp.js';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      email: "",
      phone: "",
      schoolName: "",
      studyProgram: "",
      studyDate: "",
      companyName: "",
      positionTitle: "",
      jobTasks: "",
      workPeriodInCompany: "",
      submited: false
    };

    this.updateData = this.updateData.bind(this);
    this.submitStatus = this.submitStatus.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateData = (event) => {
    // console.log("----------------------");
    // console.log(this.state.user);
    // console.log(this.state.email);
    // console.log(this.state.phone);
    // console.log(this.state.schoolName);
    // console.log(this.state.studyProgram);
    // console.log(this.state.studyDate);
    // console.log(this.state.companyName);
    // console.log(this.state.positionTitle);
    // console.log(this.state.jobTasks);
    // console.log(this.state.workPeriodInCompany);
    // console.log(this.state.submited);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitStatus = (setStatus) => { 
    this.setState({
      submited: setStatus
    })
  }

  submitForm = () => {
    if (this.state.submited === true) {
      return (
        <SectionComp>
          <p>My name is {this.state.user}.
            My e-mail adress is {this.state.email}.
            My phone number is {this.state.phone}.

            I attened {this.state.schoolName} and studied {this.state.studyProgram} which I gratuated on{" "} {this.state.studyDate}.


            I worked at {this.state.companyName} and at position of {this.state.positionTitle} with main
            tasks at job including {this.state.jobTasks}. I worked there in period of{" "}
            {this.state.workPeriodInCompany}.
          </p>
        </SectionComp>
      )
    } else {
      return (
        <SectionComp />
      )
    }
    
  };

  render() {

    return (
      <div >
        <SectionComp title={"General information"}>
          <InputComp
            generalInfo={"Name: "}
            identifier={"user"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"E-mail: "}
            identifier={"email"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Phone number: "}
            identifier={"phone"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
        </SectionComp>

        <SectionComp title={"School information"}>
          <InputComp
            generalInfo={"School name: "}
            identifier={"schoolName"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Study program: "}
            identifier={"studyProgram"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Date of study program completion: "}
            identifier={"studyDate"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
        </SectionComp>

        <SectionComp title={"Company and work experience"}>
          <InputComp
            generalInfo={"Company name: "}
            identifier={"companyName"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Position title: "}
            identifier={"positionTitle"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Tasks job required: "}
            identifier={"jobTasks"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
          <InputComp
            generalInfo={"Time period performing work: "}
            identifier={"workPeriodInCompany"}
            updateData={this.updateData}
            submited={this.state.submited}
          />
        </SectionComp>

        <button onClick={() => { this.submitStatus(true) }}>Submit</button>
        <button onClick={() => { this.submitStatus(false) }}>Edit</button>

        {(this.state.submited === true || false) ? this.submitForm() : null}

      </div>
    );
  }
}



export default App
