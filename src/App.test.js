import React from 'react';
import { mount } from 'enzyme'
import RootProvider from './RootProvider'
import App from './App'
import IntroModal from './components/IntroModal';


const RP = () => {
    return (
        <RootProvider>
            <App />
        </RootProvider>
    )
}


let app
beforeEach(() => {
    app = mount(<RP />)
})

afterEach(() => {
    app.unmount()
})

it('has a header', () => {
    
    expect(app.find(IntroModal).length).toEqual(1)

})
