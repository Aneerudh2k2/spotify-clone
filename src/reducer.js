export const initialState = {
    user: null,
    playlists: [],
    playing: null,
    item: null,
    token: 'BQC32GTTH2R4-Q1Z_cB7442z7v1ZgdbJgjFcYxbjsSScu20140t4qoCexBnQDjVcpszDoV61-8kLMIuMG3_03V5EKsMP38I3Qa1vAtEzRgWJDrFekZVtYBLP5PDR3kg-8gYqf8VtJblxb0q1Fvzz0ughpXm5z1A5v5Zi'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, user: action.user, 
            }
        case 'SET_TOKEN':
            return {
                ...state, token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, discover_weekly: action.discover_weekly
            }
        default: return state;
    }
}

export default reducer;