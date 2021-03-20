import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { getWeb3Library } from '../../utils/web3Utils'
import { ToastProvider } from '../../context/ToastContext'
import nightwind from 'nightwind/helper'
import AppRouter from '../AppRouter'

const App = () => {
    return (
        <Web3ReactProvider getLibrary={getWeb3Library}>
            <ToastProvider>
                <div className="app">
                    <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
                    <HashRouter>
                        <AppRouter />
                    </HashRouter>
                </div>
            </ToastProvider>
        </Web3ReactProvider>
    )
}

export default App
