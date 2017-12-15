import React from 'react'
import PropTypes from 'prop-types'
import { Shortcut } from './Shortcut'

export class ShortkeysProvider extends React.PureComponent<{}, {}> {
    static childContextTypes = {
        shortcut: PropTypes.any,
    }

    getChildContext() {
        const shortcut = new Shortcut()
        return { shortcut }
    }

    render() {
        const { children } = this.props
        return children
    }
}
