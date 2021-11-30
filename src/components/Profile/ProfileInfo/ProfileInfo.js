import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="bom" src="https://www.krafton.com/wp-content/uploads/2021/06/games-banner7-min.png"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;
