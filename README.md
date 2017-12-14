# React shortcut component

## Usage

1. Wrapper your app

````tsx
import { ShortkeysProvider } from 'react-shortkeys'

<ShortkeysProvider>
    <YourApp />
</ShortkeysProvider>
````

2. (Un)Bind key event

a. Use hoc

````tsx
import { withShortkeys, IShortkeysProps } from 'react-shortkeys'

class YourComponent extends React.Component<IShortkeysProps, {}> {
    componentDidMount () {
        this.props.shortkeys.on('a', this.pressA)
    }

    componentUnmount () {
        this.props.shortkeys.off('a', this.pressA)
    }

    pressA = () => {
        // some thing you want
    }
}
export default withShortkeys()(YourComponent)
````

3. Use binded button

````tsx
import { ShortkeyButton } from 'react-shortkeys'

<ShortkeyButton onClick={handleClick} shortkey='ctrl+o'>Click</ShortkeyButton>
<ShortkeyButton onClick={handleClick} shortkey={['ctrl+o', 'command+o']}>Click</ShortkeyButton>
````
