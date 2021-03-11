import React from 'react'
import { IRouteComponentProps } from 'umi'

const Layout = ({children}: IRouteComponentProps) => {
    return (
        <div>
            <div>Layout</div>
            {children}
        </div>
    )
}
export default Layout