
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../Redux/action'

function mapStateToProps(state) {
    return {
        ReduserEmployee: state.ReduserEmployee,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveChanges: () => dispatch(actions.saveChanges()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    function Status(props) {

        useEffect(
            function () {
                if (props.ReduserEmployee.user.type == "admin") {
                    //Need to use React Children
                    // disabled='false'
                    // onChange={changeName}
                    //<button onClick={props.saveChanges}>Save Changes</button>
                }
            }
            , [])

        const getCurrent = () => {
            props.ReduserEmployee.Employee.sort().forEach(element => {
                if (element === props.ReduserEmployee.currentEmployee)
                    return element;
            });
        }

        const FuncBack = () => {
            window.location.replace("/")
        }
        return (
            <>
                <label>
                    Name:
                    <input type="text"
                        name="name"
                        value={getCurrent.name} />
                </label>
                <label>
                    Mail:
                    <input type="text"
                        name="mail"
                        value={getCurrent.mail} />
                </label>
                <label>
                    password:
                    <input type="password"
                        name="password"
                        value={getCurrent.password} />
                </label>
                <label>
                    Status:
                    <input type="status"
                        name="password"
                        value={getCurrent.status} />
                </label>

                <button onClick={FuncBack}>Back</button>
            </>
        )
    }
)