import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { getWeb3Library } from '../../utils/web3Utils'
import nightwind from 'nightwind/helper'
import AppRouter from '../AppRouter'

const App = () => {
    return (
        <Web3ReactProvider getLibrary={getWeb3Library}>
            <div className="app">
                <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
                <HashRouter>
                    <AppRouter />
                </HashRouter>
            </div>
        </Web3ReactProvider>
    )
}

export default App
