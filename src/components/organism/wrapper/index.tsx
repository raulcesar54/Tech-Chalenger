import { Outlet as OutletComponent } from "react-router-dom";
import { Sidebar } from "../../molecules";

export const Wrapper = () => {
  return (
    <div
      className="bg-ligth-gray h-screen flex flex-1 overflow-scroll overflow-x-hidden"
      id="bg-imagem"
    >
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="flex-1 p-0 md:p-6 pl-0 md:pl-0 w-full bg-bg-default">
        <div className="flex-1 px-8 py-6">
          <OutletComponent />
        </div>
      </div>
    </div>
  );
};
