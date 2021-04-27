import React from 'react';
import { mount } from 'enzyme'
import RootProvider from './RootProvider'
import App from './App'
import IntroModal from './components/IntroModal';
import Main from './components/Main';


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

it('has a modal', () => {
    
    expect(app.find(IntroModal).length).toEqual(1)

})

it('has a main view', () => {
    
    expect(app.find(Main).length).toEqual(1)

})
