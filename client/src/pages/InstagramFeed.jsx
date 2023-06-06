import React, { Fragment } from "react";
import { SideNavbar } from "../components/SideNavbar";
import { StoriesBar } from "../components/StoriesBar";
import { InstaPosts } from "../components/InstaPosts";

export const InstagramFeed = () => {
    return (
        <div className="flex max-h-screen w-[100%]">
            <SideNavbar />
            <div>
                <StoriesBar />
                <InstaPosts />
            </div>
        </div>
    );
};
