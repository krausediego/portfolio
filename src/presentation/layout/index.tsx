import { Explorer, SideMenu } from "./components";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen bg-vscode flex column justify-center items-center">
      <div className="w-[77%] h-[86%] bg-primary flex flex-col rounded-lg">
        <div className="w-full h-8" />
        <div className="w-full flex">
          <SideMenu />
          <Explorer />
          {children}
        </div>
      </div>
    </div>
  );
};
