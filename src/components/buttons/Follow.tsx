import React from 'react'
import { fireStore, store } from '../../firebase';
import { addUserToFolloweeAndFollower, getUserByID, removeUserFromFolloweeAndFollower } from '../../functions/services';
import { Insta } from '../../types'
import { ReactComponent as FollowingIcon } from '../../assets/svgs/followed_icon.svg'

function Follow({
    // currentUserID,
    // followeeID,
    isFollow,
    onClick
}: Insta.followProp) {


    

    return (
        <div>
            <button
                className={`text-festa-one font-semibold px-4 py-1 rounded-lg cursor-pointer ${isFollow ? 'bg-festa-one border border-festa-eight' : 'bg-festa-two'}`}
                onClick={onClick}
            >
                {
                    isFollow ?
                        <FollowingIcon className="h-6 w-6" />
                        :
                        <span className="">Follow</span>
                }
            </button>
        </div>
    )
}

export default Follow