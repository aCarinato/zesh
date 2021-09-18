import React from 'react'
import Navbar from './Navbar'
import { Container } from '@material-ui/core'

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <Container>{children}</Container>
        </div>
    )
}
