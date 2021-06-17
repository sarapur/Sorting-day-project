import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../Redux/action'

function mapStateToProps(state) {
    return {
        ReduserEmployee: state.ReduserEmployee,
    };
}

export default connect(mapStateToProps, )(
    function UpdateCurrentEmployee(props) {

        const setCurrent = () => {
            props.ReduserEmployee.Employee.sort().forEach(element => {
                if (element == props.ReduserEmployee.Employee[props.indexCurrent])
                    props.ReduserEmployee.currentEmployee = element
            });
        }
        return (
            <>
                {setCurrent}
            </>
        )

    }
)
