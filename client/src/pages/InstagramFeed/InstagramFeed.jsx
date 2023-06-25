import { SideNavbar } from "../../components/SideNavbar";
import { InstaPosts } from "../../components/InstaPosts";
import { StoriesBar } from "../../components/StoriesBar";
import { Header } from "../../components/Header/Header";
import { BottomNavbar } from "../../components/BottomNavbar";
import { SuggestionBar } from "../../components/SuggestionBar/SuggestionBar";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const InstagramFeed = () => {
    const [hideDiv, setHideDiv] = useState(false);
    const InstaPostRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = InstaPostRef.current.scrollTop;
            if (scrollTop > 60) {
                setHideDiv(true);
            } else {
                setHideDiv(false);
            }
        };

        InstaPostRef.current.addEventListener("scroll", handleScroll);

        return () => {
            InstaPostRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="max-h-screen w-[100%] overflow-hidden ">
            <div className="hidden ok sm:block border-b-[1px] border-[#dbdbdb]">
                <Header />
            </div>
            <div className="flex">
                <SideNavbar />
                <div
                    className="w-full h-[calc(100vh-52px)] overflow-y-scroll scroll-smooth no-scrollbar mt-5 md:mt-0 mx-7 md:mx-0"
                    ref={InstaPostRef}
                >
                    <StoriesBar />
                    <InstaPosts />
                </div>
                {!hideDiv && (
                    <div className="w-[30%] mt-24 mx-auto md:hidden">
                        <div className="w-[90%] mx-auto">
                            <SuggestionBar />
                        </div>
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 w-full hidden sm:block">
                <BottomNavbar />
            </div>
        </div>
    );
};
