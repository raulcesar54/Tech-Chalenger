import { ContainerList, SidebarContainer } from "../../atom";
import { ListItem } from "../../atom/listItem";
import ringIcon from "../../../assets/ring-icon.png";
import editIcon from "../../../assets/edit-icon.png";
import historyIcon from "../../../assets/history-icon.png";
import homeIcon from "../../../assets/home-icon.png";
import mapIcon from "../../../assets/map-icon.png";
import userIcon from "../../../assets/user-icon.png";
import { ROUTES } from "../../../types/routes";

export const Sidebar = () => {
  return (
    <aside className={SidebarContainer()}>
      <div className="w-full h-10 bg-white"></div>
      <ul className={ContainerList()}>
        <ListItem icon={homeIcon} href={ROUTES.DEFAULT} />
        <ListItem icon={editIcon} href={ROUTES["EDIT-USER"]} />
        <ListItem icon={ringIcon} href={ROUTES.NOTIFICATION} />
        <ListItem icon={mapIcon} href={ROUTES.MAP} />
        <ListItem icon={historyIcon} href={ROUTES.HISTORY} />
        <ListItem icon={userIcon} href={ROUTES.USER} />
      </ul>
      <div></div>
    </aside>
  );
};
