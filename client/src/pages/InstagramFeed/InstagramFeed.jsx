import { SideNavbar } from "../../components/SideNavbar";
import { InstaPosts } from "../../components/InstaPosts";
import { StoriesBar } from "../../components/StoriesBar";
import { Header } from "../../components/Header/Header";
import { BottomNavbar } from "../../components/BottomNavbar";
import { SuggestionBar } from "../../components/SuggestionBar/SuggestionBar";

export const InstagramFeed = () => {
    return (
        <div className="max-h-screen w-[100%] overflow-hidden ">
            <div className="hidden ok sm:block border-b-[1px] border-[#dbdbdb]">
                <Header />
            </div>
            <div className="flex">
                <SideNavbar />
                <div className="w-full h-[calc(100vh-52px)] overflow-y-scroll scroll-smooth no-scrollbar mt-5 md:mt-0 mx-7 md:mx-0">
                    <StoriesBar />
                    <InstaPosts />
                </div>
                <div className="w-[30%] mt-24 md:hidden">
                    <SuggestionBar />
                </div>
            </div>
            <div className="absolute bottom-0 w-full hidden sm:block">
                <BottomNavbar />
            </div>
        </div>
    );
};
