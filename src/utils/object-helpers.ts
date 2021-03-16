import {UsersInformationType} from "../redux/users-reducer";
/*UsersInformationType*/

export const updateObjectInArray = (items: any,
                                    itemId: string,
                                    objPropName: string,
                                    newObjProps: { followed: boolean }) => {

    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}