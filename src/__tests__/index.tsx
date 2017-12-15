import React from 'react'
import ReactDOM from 'react-dom'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestUtils from 'react-dom/test-utils'
import { ShortkeysProvider, withShortkeys, IShortkeysProps, ShortkeyButton } from '../index'

// TODO: fix this: https://github.com/facebook/jest/issues/4545
configure({ adapter: new Adapter() })

const pressA = jest.fn()
const pressB = jest.fn()

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

const wrapper = mount(
    <ShortkeysProvider>
        <App />
    </ShortkeysProvider>
)

// NOTE: ES5 KeyboardEvent declaration don't support way to set key code manually.
// However, I have to simulate a keypress event with a specified key code
declare var KeyboardEvent: any

describe('default', () => {
    it('with shortkeys', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'a',
            code: 'KeyA',
            keyCode: 65,
            which: 65,
        })
        document.dispatchEvent(event)
        expect(pressA).toHaveBeenCalledTimes(1)
    })

    it('shortkey button', () => {
        const event = new KeyboardEvent('keypress', {
            key: 'b',
            code: 'KeyB',
            keyCode: 66,
            which: 66,
        })
        document.dispatchEvent(event)
        expect(pressB).toHaveBeenCalledTimes(1)

        wrapper.unmount()
        document.dispatchEvent(event)
        expect(pressB).toHaveBeenCalledTimes(1)
    })
})
