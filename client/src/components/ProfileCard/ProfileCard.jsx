import Profile from "../../assets/Profile.jpg";
export const ProfileCard = () => {
    return (
        <div className="profile-card flex justify-between items-center">
            <div className="profile flex">
                <img
                    src={Profile}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <div className="profile-username ml-3 flex items-center">
                    <p className="truncate">nafih8888</p>
                </div>
            </div>
            <div>
                <p className="text-[#1ea1f7]">Switch</p>
            </div>
        </div>
    );
};
