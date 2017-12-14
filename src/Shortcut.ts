import Mousetrap from 'mousetrap'
import { element } from '../node_modules/@types/prop-types/index';

export type IShortkeys = string | string[]

export class Shortcut {
    private mousetrap: any
    constructor (element: Element) {
        this.mousetrap = new Mousetrap(element)
    }

    on = (key: IShortkeys, func) => {
        this.mousetrap.bind(key, func)
    }

    off = (key: IShortkeys) => {
        this.mousetrap.unbind(key)
    }
}
