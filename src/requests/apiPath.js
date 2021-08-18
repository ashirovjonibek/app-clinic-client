export const apiPath = {

    /**     words-controller    **/

    updateWords: '/words/',
    deleteWords: '/words/',
    createWords: '/words/create',
    getWords: '/words',


    /**     menu-controller    **/

    getMenu: '/menu/',
    updateMenu: '/menu/',
    deleteMenu: '/menu/',
    createMenu: '/menu/create',
    getMenus: '/menu',


    /**     auth-controller    **/

    loginUser: '/auth/login',
    createListener: '/auth/createListener',
    createApplicant: '/auth/createApplicant',
    getListeners: '/auth/listeners',
    getApplicant: '/auth/applicants',
    getMe: '/auth/me',
    updateUser: '/auth/',
    updateListenerByRole: '/auth/update/listenerByRole',
    getRoles: '/auth/roles',


    /**     application-controller    **/

    createApplication: '/application/create',
    getApplication: '/application/',
    updateApplication: '/application/',
    getApplicationListener: '/application/listener',
    getApplicationApplicant: '/application/applicant',


    /**     answer-controller    **/

    createAnswer: '/answer/create',
    getAnswer: '/answer/',
    updateAnswer: '/answer/',
    getAnswers: '/answer',
    deleteAnswer: '/answer/',
    updateAnswerByListener: '/answer/updateByListener/',
    updateAnswerChangedListener: '/answer/changedListener',
    getAnswerListenerIsNull: '/answer/listenerIsNull',
    getAnswerListener: '/answer/listener/',


    /**     position-controller    **/

    createPosition: '/position/create',
    getPositions: '/position',
    getPosition: '/position/',


    /**     attachment-controller    **/

    uploadAttachment: '/attach/upload',
    getAttachment: '/attach/',








}
