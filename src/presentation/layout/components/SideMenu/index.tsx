import {
  Files,
  Search,
  GitFork,
  Bug,
  Puzzle,
  FlaskConical,
} from "lucide-react";
import { MenuItem } from "./MenuItem";

export const SideMenu = () => {
  return (
    <div className="w-14 h-full">
      <MenuItem icon={Files} isActive />
      <MenuItem icon={Search} />
      <MenuItem icon={GitFork} />
      <MenuItem icon={Bug} />
      <MenuItem icon={Puzzle} />
      <MenuItem icon={FlaskConical} />
    </div>
  );
};
