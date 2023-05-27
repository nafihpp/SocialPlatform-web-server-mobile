import React, { Fragment } from "react";
import { SideNavbar } from "../components/SideNavbar";
import { StoriesBar } from "../components/StoriesBar";
import { SuggestionBar } from "../components/SuggestionBar";

export const InstagramFeed = () => {
    return (
        <Fragment>
            <div className="flex">
                <SideNavbar />
                <StoriesBar />
                {/* <SuggestionBar /> */}
            </div>
        </Fragment>
    );
};
