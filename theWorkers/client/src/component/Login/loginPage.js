
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../Redux/action'
 
function mapStateToProps(state) {
    return {
        ReduserEmployee: state.ReduserEmployee,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendDatialsOfPermission: (datials) => dispatch(actions.sendDatialsOfPermission(datials)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    function LoginPage(props) {

        const myDatails = {}
        const changeMail = (event) => {
            myDatails.mail = event.target.value
        }
        const changePassword = (event) => {
            myDatails.password = event.target.value
        }

        const Send = () => {
            debugger;
            props.sendDatialsOfPermission(myDatails)
        }

        return (
            <>
                <form name="LoginForm" onSubmit={Send}>
                    <label>
                        Mail:
                     <input type="text"
                            name="mail"
                            onChange={changeMail} />
                    </label>
                    <label>
                        password:
                      <input type="password"
                             name="password"
                             onChange={changePassword} />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            
                <h2>{props.ReduserEmployee.user.type}</h2>
            </>
        )
    }
)