import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { client } from './apollo/client'
import {ApolloProvider} from '@apollo/client';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApolloProvider  client={client}>
        <NextUIProvider>
            <App />
        </NextUIProvider>
      </ApolloProvider>
  </React.StrictMode>,
)
