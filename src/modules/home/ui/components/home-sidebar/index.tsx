import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "./main-section";

export const HomeSideBar = () => {
  return (
    <Sidebar className="z-40 border-none pt-16">
      <SidebarContent className="bg-background">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
};
