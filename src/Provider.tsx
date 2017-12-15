import React from 'react'
import PropTypes from 'prop-types'
import { Shortcut } from './Shortcut'

export class ShortkeysProvider extends React.PureComponent<{}, {}> {
    static childContextTypes = {
        shortcut: PropTypes.any
    }
    private shortcut: Shortcut

    constructor(props, context) {
        super(props, context)
    }

    getChildContext() {
        this.shortcut = new Shortcut()
        return { shortcut: this.shortcut }
    }

    render() {
        const { children } = this.props
        return children
    }
}
