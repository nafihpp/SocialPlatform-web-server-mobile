import React, { Fragment } from "react";
import { SideNavbar } from "../components/SideNavbar";
import { InstaPosts } from "../components/InstaPosts";
import { StoriesBar } from "../components/StoriesBar";

export const InstagramFeed = () => {
    return (
        <div className="flex max-h-screen w-[100%]">
            <SideNavbar />
            <div className="w-full">
                <StoriesBar />
                <InstaPosts />
            </div>
        </div>
    );
};
