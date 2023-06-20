import { SideNavbar } from "../components/SideNavbar";
import { InstaPosts } from "../components/InstaPosts";
import { StoriesBar } from "../components/StoriesBar";
import { Header } from "../components/Header/Header";

export const InstagramFeed = () => {
    return (
        <div className="max-h-screen w-[100%] overflow-hidden">
            <div className="hidden sm:block">
                <Header />
            </div>
            <div className="flex">
                <SideNavbar />
                <div className="w-full h-[calc(100vh-52px)] overflow-y-scroll">
                    <StoriesBar />
                    <InstaPosts />
                </div>
            </div>
        </div>
    );
};
