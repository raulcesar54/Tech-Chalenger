import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export const Toolbox = ({
  handleChange,
  handleDelete,
}: {
  handleChange: () => void;
  handleDelete: () => void;
}) => {
  return (
    <Menu>
      <MenuButton className="md:w-[48px] w-full text-white font-bold text-[32px] bg-primary">
        <span>...</span>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="bg-white rounded-lg divide-y !shadow-lg"
      >
        <MenuItem>
          <p
            onClick={handleChange}
            className="p-3 px-5 cursor-pointer hover:bg-primary hover:text-white text-medium-gray"
          >
            Alterar
          </p>
        </MenuItem>
        <MenuItem>
          <p
            onClick={handleDelete}
            className="p-3 px-5 cursor-pointer hover:bg-primary hover:text-white text-medium-gray"
          >
            Excluir
          </p>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
