import React, {useEffect} from "react";
import {createSelector} from "reselect";
import {makeSelectUsers} from "./selectors";
import {useSelector} from "react-redux";
import Axios from "axios";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}))

export function HomePage(props) {
    const {users} = useSelector(stateSelector)

    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users").catch((err) => {
            console.log("ERR", err)
        })

        console.log("Users", response.data.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (<>
    <h1>Hello Werld</h1>
    </>)
}