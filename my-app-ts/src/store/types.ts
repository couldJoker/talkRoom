export interface IState {
    friends: IFriend[]
}

interface IFriend {
    id: string,
    name: string,
    img: string
}