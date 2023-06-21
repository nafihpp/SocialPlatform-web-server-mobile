import { SideNavbar } from "../../components/SideNavbar";
import { InstaPosts } from "../../components/InstaPosts";
import { StoriesBar } from "../../components/StoriesBar";
import { Header } from "../../components/Header/Header";
import { BottomNavbar } from "../../components/BottomNavbar";

export const InstagramFeed = () => {
    return (
        <div className="max-h-screen w-[100%] overflow-hidden ok">
            <div className="hidden ok sm:block border-b-[1px] border-[#dbdbdb]">
                <Header />
            </div>
            <div className="flex">
                <SideNavbar />
                <div className="w-full h-[calc(100vh-52px)] overflow-y-scroll">
                    <StoriesBar />
                    <InstaPosts />
                </div>
            </div>
            <div className="bottom-navbar">
                <BottomNavbar />
            </div>
        </div>
    );
};
