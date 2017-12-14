import React from 'react'
import PropTypes from 'prop-types'
import { Shortcut } from './Shortcut'

export function withShortkeys ()  {
    return <P extends {}, S extends {}>(WrappedComponent: React.ComponentType<P & IShortkeysProps>): React.ComponentClass<P> => {
        type CP = P & IShortkeysProps
        return class extends React.PureComponent<CP, S> {
            static contextTypes = {
                shortcut: PropTypes.any
            }
            render () {
                const { shortcut } = this.context
                return <WrappedComponent {...this.props} shortcut={shortcut} />
            }
        }
    }
}

export interface IShortkeysProps {
    shortcut: Shortcut
}
