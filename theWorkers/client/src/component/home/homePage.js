
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../Redux/action'
import RouterComponenet from '../../Router/routerHome'
import { BrowserRouter as Router, } from 'react-router-dom'
import UpdateCurrentEmployee from '../home/UpdateCurrent';

function mapStateToProps(state) {
    return {
        ReduserEmployee: state.ReduserEmployee,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setAllEmployee: () => dispatch(actions.setAllEmployee()),
        setNewEmployee: () => dispatch(actions.AddEmployeeMiddaleWare()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    function FirstPage(props) {
        useEffect(
            function () {
                props.setAllEmployee()
            }, []
        )
        const renderEmployee = () => {
            debugger;
            return props.ReduserEmployee.Employee.sort().map((item, index) => {
                return <ViewOneEmployee indexEmployee={index} employee={item}></ViewOneEmployee>
            })
        }
        const AddEmployee = () => {
            if (props.ReduserEmployee.uset.type === "admin")
                return <AddNewEmployee funcToAdd={props.setNewEmployee()}></AddNewEmployee>
        }
        return (
            <>
                <Router>
                    <RouterComponenet></RouterComponenet>
                </Router>
                {AddEmployee}
                {renderEmployee}
            </>
        )
    }
)

function ViewOneEmployee(props) {
    return (
        <>
            <tabale>
                <tr>
                    <th>name:</th>
                    <th>status:</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{props.employee.name}</td>
                    <td>{props.employee.status}</td>
                    <td>
                        <button onClick={
                            (e) => {
                                if (props.employee === e.target.value) {
                                    <UpdateCurrentEmployee indexCurrent={props.indexEmployee}></UpdateCurrentEmployee>
                                    window.location.replace("/Status")
                                }

                            }
                        }>datials</button>
                    </td>
                </tr>
            </tabale>
        </>
    )
}

function AddNewEmployee(props) {

    const newEmployee = {}
    const changeName = (event) => {
        newEmployee.name = event.target.value
    }
    const changeMail = (event) => {
        newEmployee.mail = event.target.value
    }
    const changePassword = (event) => {
        newEmployee.password = event.target.value
    }

    const Add = () => {
        debugger;
        props.funcToAdd(newEmployee)
    }
    return (
        <>
            <form name="addEmployee" onSubmit={Add}>
                <label>
                    Name:
                    <input type="text"
                        name="name"
                        onChange={changeName} />
                </label>
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
                <input type="submit" value="Add New Employee" />
            </form>
        </>
    )
}