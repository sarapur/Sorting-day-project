import { actions } from "../action"


export const PermissionMiddaleWare = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SEND_DATIALS_OF_PERMISSION')
    {
    
        fetch('http://localhost:3000/checkPermission', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
               
            })
            .then((result) => {
                debugger;
                dispatch(actions.checkPermission(result))
            })
            .catch((err) => console.log(err.massage))

    }
    return next(action);
}



export const AllEmployeeMiddaleWare = ({ dispatch, getState }) => next => action => {

    if(action.type==='SET_ALL_EMPLOYEE')
    {
        fetch('http://localhost:3000/getAllEmploee', {
            method: 'GET',
        })
            .then((response) => {
                return response.json()
            })
            .then((result)=>{
               dispatch(actions.setAllEmployee(result))
            })
    }
    return next(action);
}



export const AddEmployeeMiddaleWare = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_EMPLOYEE_MIDDALE_WARE') {
        fetch('http://localhost:3000/newEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                dispatch(actions.setNewEmployee(result))
            })
            .catch((err) => console.log(err.massage))
    }
    return next(action);
}



export const SaveChangesMiddaleWare = ({ dispatch, getState }) => next => action => {
   
    if (action.type === 'SAVE_CHANGE')
    {
        fetch('http://localhost:3000/updateEmployee', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
               
            })
            .then((result) => {
                debugger;
                dispatch(actions.checkPermission(result))
                console.log("result")
            })
            .catch((err) => console.log(err.massage))

    }
    return next(action);
}
