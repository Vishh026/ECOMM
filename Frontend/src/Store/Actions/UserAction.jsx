import axios from "../../Api/axiosConfig.jsx"
import { loadUser } from "../reducers/UserSlice.jsx";


// regiter user in databse (db.json > backend)
export const asyncRegister = (user) => async(dispatch,getState) => {
    try {
        const res = await axios.post("/user",user);
        console.log(res);
        
        
    } catch (error) {
        console.log(error)
    }
}

// login user => saved login user in localhost

export const asyncLoginUser = (user) => async(dispatch,getState) => {
    try {
        //get user details
        const { data } = await axios.get(
            `/user?email=${user.email}&password=${user.password}`
        );
        console.log(data[0]);
        localStorage.setItem("user" ,JSON.stringify(data[0]))
        
    } catch (error) {
        console.log(error)
    }
}


// logout user
export const asyncLogoutUser = () => (dispatch,getState) => {
    try {
        localStorage.removeItem("user","")
    } catch (error) {
        console.log(error)
    }
}

//current user details findout
export const asyncCurrentUser = () => (dispatch,getState) => {
    try {
        const userAvail = JSON.parse(localStorage.getItem("user"));
        if(userAvail) dispatch(loadUser(userAvail))
        else console.log("user not found")

    } catch (error) {
        console.log(error)
    }
}