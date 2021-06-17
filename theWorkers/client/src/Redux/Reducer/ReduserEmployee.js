import product from 'immer'
import createRducer from "./ReduserUtils"

const initialState = {
    Employee: [],
    user: {
        'type': String,
        'jwt': String
    },
    currentEmployee: {}
}

const changeDatilesOfEmplyee = {
    checkPermission(state, action) {
        debugger;
        state.user = action.payload;
    },
    setAllEmployee(state, action) {
        state.Employee.push(action.payload);
    },
    setNewEmployee(state, action) {
        state.Employee.push(action.payload);
    },

};


export default product((state, action) =>
    createRducer(state, action, changeDatilesOfEmplyee), initialState);
