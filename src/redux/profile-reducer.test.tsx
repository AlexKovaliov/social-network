import profileReducer, {addPostActionCreator, ProfilePageType, deletePost} from "./profile-reducer";
import {ProfilePropsType} from "../components/Profile/Profile";

let state: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    profile: {} as ProfilePropsType,
    status: '',
    newPostText: ''
};

it('a new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('IT')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expect
    expect(newState.posts.length).toBe(3)
})

it('the message must be correct', () => {
    // 1. test data
    let action = addPostActionCreator('IT')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expect
    expect(newState.posts[2].message).toBe('IT')
})

it('the message length should decrease after deletion', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expect
    expect(newState.posts.length).toBe(1)
})

it('after deletion, the message length should decrease if such id exists', () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expect
    expect(newState.posts.length).toBe(2)
})