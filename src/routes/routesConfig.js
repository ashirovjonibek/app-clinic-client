import React from "react"
import PropTypes from 'prop-types'
import {Route, Switch} from "react-router-dom"

const Authmiddleware = ({component: Component}) => (
    <Route
        render={props => {
            return (
                <Component {...props} />
            )
        }}
    />
)

Authmiddleware.propTypes = {
    component: PropTypes.any,
    layout: PropTypes.any
}

export default Authmiddleware