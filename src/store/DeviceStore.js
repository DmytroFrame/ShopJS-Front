import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'ПилиЗборник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: "Xiaomy"},
            {id: 2, name: "XyAvey"}
        ]
        this._device
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }


    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}