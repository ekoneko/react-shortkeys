import React from 'react'
import ReactDOM from 'react-dom'
import { ShortkeysProvider, withShortkeys, IShortkeysProps, ShortkeyButton } from 'react-shortkeys'

function pressA () {
    console.log('press A')
}

function pressB () {
    console.log('press or click B')
}

interface ISubProps {
    onClick: () => void
}
class Sub extends React.PureComponent<ISubProps & IShortkeysProps, {}> {
    componentDidMount() {
        this.props.shortcut.on('a', pressA)
    }
    componentWillUnmount() {
        this.props.shortcut.off('a')
    }
    render() {
        return <div>wrapped with hoc</div>
    }
}
const WrappedSub = withShortkeys()(Sub)

function App () {
    return (
        <div>
            <WrappedSub onClick={pressA} />
            <ShortkeyButton shortkey='b' onClick={pressB}>click ShortkeyButton</ShortkeyButton>
        </div>
    )
}

ReactDOM.render(
    <ShortkeysProvider>
        <App />
    </ShortkeysProvider>
, document.getElementById('root'))
