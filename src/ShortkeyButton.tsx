import React from 'react'
import { withShortkeys, IShortkeysProps } from './withShortkeys'
import { IShortkeys, Shortcut } from './Shortcut'

export interface IShortkeyButtonProps {
    shortkey: IShortkeys
    onClick?: () => void
    [key: string]: any
}

class ShortkeyButtonRaw extends React.PureComponent<IShortkeyButtonProps & IShortkeysProps, {}> {
    componentDidMount() {
        const { shortcut, shortkey, onClick } = this.props
        if (onClick) {
            shortcut.on(shortkey, onClick)
        }
    }

    componentWillUnmount() {
        const { shortcut, shortkey, onClick } = this.props
        if (onClick) {
            shortcut.off(shortkey)
        }
    }

    render() {
        const { shortkey, shortcut, ...props } = this.props
        return <div {...props}></div>
    }
}

export const ShortkeyButton = withShortkeys()(ShortkeyButtonRaw)
