import React, { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/");
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        tpe="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          const response = await axios.post("http://localhost:3000/signup", {
            name,
            email,
            password,
          });
        }}
      >
        Submit
      </button>
      <div>
        {data.map((elem) => {
          return (
            <div>
              <h1>{elem.name}</h1>
              <h1>{elem.email}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Signup;
