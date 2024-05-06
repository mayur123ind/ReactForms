import React,{useState} from "react";
import Form from "./Components/Form";
import Cards from "./Components/Cards";
const App = () => {

  const [users, setUsers] = useState([])
  
  // Function to handle form submission
  const formHandleSubmit =(data)=>{
    setUsers([...users, data])  
  }

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form formHandleSubmit={formHandleSubmit}/>
      </div>
    </div>
  );
};

export default App;
