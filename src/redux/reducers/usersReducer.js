
import { usersAPI } from './../../api/api';
import { updateObjectArray } from './../../utils/helpers/reducer_helper';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let defaultState = {
  users: [
    // { id: '1', name: 'Baby Yoda', img: Jpg, followed: true, status: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '2', name: 'Andriy R', followed: true, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '3', name: 'Vlad V', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '4', name: 'Bogdan Demchuk', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '5', name: 'sfx', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '6', name: 'asdfa fgnghf', followed: true, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '7', name: 'asdfa fgnghf', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '8', name: 'asdfa fgnghf', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
  ],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: []
}

// const followUser = (state, userId) => {
//   let stateCopy = {
//     ...state,
//     users: state.users.map(u => {
//       if (u.id === userId) {
//         return { ...u, followed: true }
//       }
//       return u
//     })
//   }
//   return stateCopy
// }
// const unfollowUser = (state, userId) => {
//   let stateCopy = {
//     ...state,
//     users: state.users.map(u => {
//       if (u.id === userId) {
//         return { ...u, followed: false }
//       }
//       return u
//     })
//   }
//   return stateCopy
// }

// const setUsers = (state, users) => {
//   let stateCopy = {
//     ...state, users: [...users]
//   }
//   return stateCopy
// }

// const setCurrentPage = (state, page) => {
//   let stateCopy = {
//     ...state, currentPage: page
//   }
//   return stateCopy
// }

// const setTotalCount = (state, number) => {
//   let stateCopy = {
//     ...state, totalUsersCount: number
//   }
//   return stateCopy
// }

// const toggleIsFetching = (state, isFetching) => {
//   let stateCopy = {
//     ...state, isFetching: isFetching
//   }
//   return stateCopy
// }

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, 'id', { followed: true })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true }
        //   }
        //   return u
        // })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, 'id', { followed: false })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false }
        //   }
        //   return u
        // })
      }
    case SET_USERS:
      return {
        ...state, users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.page
      }
    case SET_TOTAL_COUNT:
      return {
        ...state, totalUsersCount: action.number
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      }
    case FOLLOWING_IN_PROGRESS:
      if (action.isFetching) { return { ...state, isFollowingInProgress: [...state.isFollowingInProgress, action.userId] } }
      else { return { ...state, isFollowingInProgress: state.isFollowingInProgress.filter(id => id !== action.userId) } }
    default:
      return state
  }
}

export const followSuccesses = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccesses = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCount = (number) => ({ type: SET_TOTAL_COUNT, number })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId })

export const requestUsers = (page, count) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(setUsers([]))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(page, count).then(data => {
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
      dispatch(toggleIsFetching(false))
    });
  }
}

const followUnfollowFlow = async (dispatch, id, apiMethod, AC) => {
  dispatch(followingInProgress(true, id))
  let response = await apiMethod(id)
  if (response.data.resultCode === 0) {
    (dispatch(AC(id)))
  }
  dispatch(followingInProgress(false, id))
}

export const followUser = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.followUser, followSuccesses)
}

export const unfollowUser = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.unfollowUser, unfollowSuccesses)
}

// OLD
// 
// export const followUser = (id) => {
//   return (dispatch) => {
//     dispatch(followingInProgress(true, id))
//     usersAPI.followUser(id).then(response => {
//       if (response.data.resultCode === 0) {
//         (dispatch(followSuccesses(id)))
//       }
//       dispatch(followingInProgress(false, id))
//     });
//   }
// }

// export const unfollowUser = (id) => {
//   return (dispatch) => {
//     dispatch(followingInProgress(true, id))
//     usersAPI.unfollowUser(id).then(response => {
//       if (response.data.resultCode === 0) {
//         (dispatch(unfollowSuccesses(id)))
//       }
//       dispatch(followingInProgress(false, id))
//     });
//   }
// }

export const currentPageSet = (page) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page))
  }
}


// if (action.type === ADD_MESSAGE) {
//   addMessage(state)
// } else if (action.type === UPDATE_MESSAGE_TEXT) {
//   updateMessageText(state, action.text)
// }

// return state
