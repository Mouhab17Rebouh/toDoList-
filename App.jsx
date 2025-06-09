iimport React from "react";
import Group from "./Photo/Group1.png";
import { useState } from "react";
import { SiClickhouse } from "react-icons/si";
import { FcIntegratedWebcam } from "react-icons/fc";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNexTasks] = useState("");
  const Styles = {
    fontSize: "25px",
    fontWeight: "500",
    fontFamily: "Poppins",
  };
  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks([...tasks, newTasks]);
    }
  }
  function Handleinpute(event) {
    setNexTasks(event.target.value);
  }
  const [clicked, setClicked] = useState([]);
  return (
    <>
      <div className="flex justify-center my-130  flex-col  items-center">
        <div className="my-48 font-[poppins] text-[25px] font-medium">
          📚 Your to do list
        </div>
        <div className="relative w-387">
          <input
            type="text"
            className="bg-[#EAEAEA] w-387 h-53 rounded-[25px] placeholder-[#696969] font-semibold ps-20 text-[13px] font-[poppins]"
            placeholder="Task you want to add"
            value={newTasks}
            onChange={Handleinpute}
          />
          <button
            className="absolute top-0 left-273 h-full bg-[#FF5349] rounded-[25px] hover:bg-red-600 flex justify-center  items-center w-114"
            onClick={addTask}
          >
            <div className="text-white font-semibold texr-[poppins] text-[16px]">
              ADD
            </div>
          </button>
        </div>
        <ol className="flex flex-col justify-center my-[32px] w-[420px]">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="flex flex-row mb-[8px] ">
                <div className="pl-[24px] flex items-center w-full h-full pr-[110px] ">
                  <button
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: clicked[index] ? "#FF5349" : "white",
                      border: clicked[index]
                        ? "#FF5349 solid 3px"
                        : "#DADADA solid 3px",
                      borderRadius: "100%",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => {
                      const update = [...clicked];
                      update[index] = !update[index];
                      setClicked(update);
                    }}
                  ></button>
                  <div className="text-black font-[poppins] my-10 text-[13px] font-400 w-full h-full pl-[20px] whitespace-normal">
                    {task}
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    border: "none",
                    background: "none",
                    hover: "pointer",
                  }}
                >
                  <img
                    src={Group}
                    alt="Buuton action"
                    className="w-[8.435px] h-[8px] "
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
