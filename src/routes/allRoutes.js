import Admin from "../component/Admin/Admin";
import PersonalAccountSupervisor from "../component/PersonalAccountSupervisor/PersonalAccountSupervisor";
import PersonalAccountModerator from "../component/PersonalAccountModerator/PersonalAccountModerator";
import NewPassword from "../component/Registration/NewPassword";
import PersonalAccountApplicant from "../component/PersonalAccountApplicant/PersonalAccountApplicant";
import ApplicantAppeal from "../component/PersonalAccountApplicant/ApplicantAppeal";
import PersonalAccountListener from "../component/PersonalAccountListener/PersonalAccountListener";
import ProfileSettings from "../component/user/ProfileSettings";


export const adminRoute=[
    {
        path:"/admin",
        component:Admin
    },
    {
        path:"/newPassword",
        component:NewPassword
    },
    {
        path:"/profileSettings",
        component:ProfileSettings
    }
]

export const supervisorRoute=[
    {
        path:"/personalAccountSupervisor",
        component:PersonalAccountSupervisor
    },
    {
        path:"/newPassword",
        component:NewPassword
    },
    {
        path:"/profileSettings",
        component:ProfileSettings
    }
]

export const moderatorAndSuperModeratorRoute=[
    {
        path:"/personalAccountSupervisor",
        component:PersonalAccountSupervisor
    },
    {
        path:"/personalAccountModerator",
        component:PersonalAccountModerator
    },
    {
        path:"/newPassword",
        component:NewPassword
    }
]

export const moderatorRoute=[
    {
        path:"/personalAccountModerator",
        component:PersonalAccountModerator
    },
    {
        path:"/newPassword",
        component:NewPassword
    },
    {
        path:"/profileSettings",
        component:ProfileSettings
    }
]

export const applicantRoute=[
    {
        path:"/personalAccountApplicant",
        component:PersonalAccountApplicant
    },
    {
        path:"/applicantAppeal",
        component:ApplicantAppeal
    },
    {
        path:"/newPassword",
        component:NewPassword
    },
    {
        path:"/profileSettings",
        component:ProfileSettings
    }
]

export const listenerRoute=[
    {
        path:"/personalAccountListener",
        component:PersonalAccountListener
    },
    {
        path:"/newPassword",
        component:NewPassword
    },
    {
        path:"/profileSettings",
        component:ProfileSettings
    }
]



