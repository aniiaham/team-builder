import "./App.css";
import React, { useState } from "react";
import { render } from "@testing-library/react";

// const member = [
//   {memberName: 'Aniia', memberEmail: 'aniia_axm@mail.ru', memberRole: 'Student'},
//   {memberName: 'Enzhe', memberEmail: 'enzhe_axm@mail.ru', memberRole: 'Engineer'}
// ]
const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(members);
  
  const submit = () => {
    const newMembers = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    setMembers(members.concat(newMembers));
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <MembersForm
        submit={submit}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      {/* {
        members.map((member, idx) => {
          return (<div key={idx}> 
            {member.name}: {member.email}, {member.role}
          </div>)
        }) 
      } */}
      <DisplayText members={members}/>
    </div>
  );
}
export default App;

const DisplayText = (props) => {
  const { members } = props;

  return (
    members.map((member, idx) => {
      return (<div key={idx}> 
        {member.name}: {member.email}, {member.role}
      </div>)
    }) 
  )
}



const MembersForm = (props) => {
  const { submit, setFormValues, formValues } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={onChange}
          // value={values.name}
          placeholder="type a name"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onChange}
          // value={values.email}
          placeholder="enter your email"
        />
      </label>

      <label>
        Role
        <select name="role" onChange={onChange}>
          <option value="">-- select role--</option>
          <option value="engineer">Engineer</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
      <div className="submit">
        <button
          disabled={!formValues.email || !formValues.name || !formValues.role}
          onSubmit={submit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
