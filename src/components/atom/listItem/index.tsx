import { tv } from "tailwind-variants";
import { ListItemProps } from "./interface";
import { useMatch, useNavigate } from "react-router-dom";

export const ContainerListItem = tv({
  base: "border-white w-full flex justify-center box-border items-center cursor-pointer",
  variants: {
    active: {
      false: "",
      true: "border-l-[4px] pr-1",
    },
  },
});
export const ListItemContent = tv({
  base: "w-8 h-8 rounded-[10px] flex justify-center items-center",
  defaultVariants: {
    active: false,
  },
  variants: {
    active: {
      false: "bg-white/80",
      true: "bg-white",
    },
  },
});

export const ListItem = ({ icon, href }: ListItemProps) => {
  const navigate = useNavigate();
  const matchRoute = useMatch(href);
  return (
    <li
      className={ContainerListItem({ active: !!matchRoute })}
      onClick={() => navigate(href)}
    >
      <div className={ListItemContent({ active: !!matchRoute })}>
        <img src={icon} alt="icone sidebar" />
      </div>
    </li>
  );
};
