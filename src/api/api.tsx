import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40d9ad0b-5c59-493c-b1f4-22ed9e6cc14c"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const UnsubscribeAPI = {
    unsubscribe(userId: string) {
        return instance.get(`unsubscribe/${userId}`)
            .then(response => response.data)
    }
}

export const SubscribeAPI = {
    subscribe(userId: string) {
        return instance.get(`subscribe/${userId}`)
            .then(response => response.data)
    }
}


