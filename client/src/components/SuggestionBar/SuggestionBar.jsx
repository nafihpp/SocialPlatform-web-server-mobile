import { ProfileCard } from "../ProfileCard";
import { SuggestionCard } from "../SuggestionCard";

export const SuggestionBar = () => {
    return (
        <div className="w-[100%]">
            <ProfileCard />
            <SuggestionCard />
        </div>
    );
};
