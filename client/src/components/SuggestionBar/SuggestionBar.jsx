import { ProfileCard } from "../ProfileCard";

export const SuggestionBar = () => {
    return (
        <div className="w-[100%]">
            <ProfileCard condition={"profile"} />
            <p className="text-[#a3a3a3] mt-3 font-semibold">
                Suggested for you
            </p>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>
    );
};
