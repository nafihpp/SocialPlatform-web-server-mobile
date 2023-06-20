import React, { Fragment } from "react";
import { SideNavbar } from "../components/SideNavbar";
import { InstaPosts } from "../components/InstaPosts";
import { StoriesBar } from "../components/StoriesBar";
import { Header } from "../components/Header/Header";

export const InstagramFeed = () => {
    return (
        <div className="max-h-screen w-[100%]">
            <Header />
            <div className="flex overflow-hidden">
                <SideNavbar />
                <div className="w-full overflow-hidden">
                    <StoriesBar />
                    <InstaPosts />
                </div>
            </div>
        </div>
    );
};
