import { MenuItemProps } from "./types";

export const MenuItem = ({ icon: Icon, isActive = false }: MenuItemProps) => {
  return (
    <div
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
    >
      <Icon
        strokeWidth={1.5}
        size={28}
        color={isActive ? "#E0DEF2" : "#8F8CA8"}
      />
    </div>
  );
};
