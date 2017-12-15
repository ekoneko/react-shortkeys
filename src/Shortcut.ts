import Mousetrap from 'mousetrap'
import { element } from '../node_modules/@types/prop-types/index';

export type IShortkeys = string | string[]

export class Shortcut {
    private mousetrap = Mousetrap

    on = (key: IShortkeys, func) => {
        this.mousetrap.bind(key, func)
    }

    off = (key: IShortkeys) => {
        this.mousetrap.unbind(key)
    }
}
