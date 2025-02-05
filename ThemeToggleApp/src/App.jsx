import { useRef, useState } from "react";
import Page from "./components/Page";
import ThemeContextProvider from "./store/ThemeContextProvider";
import axios from "axios";

function App() {
  const [filename, setFileName] = useState("");
  const [equipment, setEquipment] = useState({
    age: "",
    name: "",
  });

  //onChangeHandler
  const fileInput = document.querySelector("#fileInput");
  const onChangeHandler = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      setFileName(e.target.files[0].name);
    }

    if (e.target.name === "file") {
      setEquipment((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setEquipment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  //submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(equipment);
    try {
      const response = await axios.post(
        "http://localhost:8080/profile/edit-profile",
        equipment,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      
      alert("Equipment added");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    // <ThemeContextProvider>
    //   <Page />{" "}
    //   <form onSubmit={submitHandler}>
    //     <input type="text" ref={inputref} placeholder="age" name="age" />
    //     <input type="submit" value="Submit" />
    //   </form>
    // </ThemeContextProvider>
    <div className="w-[100vw] h-[65vh]">
      <form
        method="post"
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center h-[100%]"
      >
        <input
          type="text"
          placeholder="Age"
          name="age"
          id="age"
          onChange={onChangeHandler}
          className="border px-3 py-1 my-1 outline-none rounded-md"
        />
       
        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          onChange={onChangeHandler}
          className="border px-3 py-1 my-1 outline-none rounded-md"
        />
       
        <input
          type="file"
          name="file"
          id="fileInput"
          accept="image/*"
          onChange={onChangeHandler}
          className="mx-0"
        />
        <input
          type="submit"
          value="Submit"
          name="submit"
          className="w-[14%] my-3 py-2 bg-green-300 rounded-lg"
        />
      </form>
    </div>
  );
}

export default App;
