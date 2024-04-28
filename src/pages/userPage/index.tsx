// import { IoSettingsOutline } from "react-icons/io5";
import axios from "axios";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";
import { NavBar } from "../../components/navbar";
import { Logout } from "../Login/logout";
import CreateUserComponent from "./createUser";
import UpdateUserComponent from "./updateUser";
// import * as from '../userPage/index.css' 
// import './index.css';

export const UserPage = () => {

  const baseUrl = 'http://localhost:4000/api/user/account'

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/26`);
      console.log("User deleted:", response.data);
      // Aquí podrías realizar alguna acción adicional si lo necesitas
    } catch (err) {
      console.error("Error deleting user:", err);
      // Aquí podrías mostrar un mensaje de error o realizar alguna otra acción
    }
  };

  return (
    <>
      <div className="bg-background h-screen">
        <div className="flex flex-col lg:border lg:border-solid lg:border-slate-900 lg:bg-zinc-700 ">
          <div className="flex justify-between gap-72 mx-5 mt-8 lg:mt-8">
            <Logout />
          </div>
          <div>
            <div>
                <button className="bg-tops mb-6">
                  <p className="text-white" onClick={deleteUser}>Borrar</p>
                </button>
              </div>
          </div>
          <div>
            <CreateUserComponent />
          </div>
          <div>
            <UpdateUserComponent />
          </div>
          <div className="flex items-center justify-center flex-col mt-32">
            <div className="flex justify-center items-center size-44 m-8 lg:size-48">
              <p>imagen de la persona</p>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col">
                <p className="m-2  text-3xl text-names lg:text-4xl">
                  nombre e informacion de la persona
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col m-6  "></div> */}
        <div className="absolute bottom-14 w-screen">
          <SmallShowPlaySong selectedSongId={null} />
        </div>
        <div className="absolute bottom-0 w-screen">
          <NavBar />
        </div>
      </div>
    </>
  );
};
