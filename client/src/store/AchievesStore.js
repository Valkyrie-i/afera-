import {makeAutoObservable} from "mobx";

export default class AchievesStore{
    constructor() {
        this._achieves = [

        ]

        makeAutoObservable(this)
    }
    setAchieves(achieves){
        this._achieves = achieves
    }

    get achieves(){
        return this._achieves
    }

}