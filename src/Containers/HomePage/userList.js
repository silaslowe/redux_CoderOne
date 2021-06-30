import React from "react";
import {createSelector} from "reselect";
import {makeSelectUsers} from "./selectors";
import {useSelector} from "react-redux";
import styled from "styled-components";

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const UserWrapper = styled.div`
display: flex;
  flex-direction: column;
  border: 3px solid black;
`

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  
  img {
    width: 100%;
    height: 100%
  }
`

const UserName = styled.h3`
font-size: 20px;
  color: #000;
  margin: 0;
`

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}))

export function UserList(props) {
    const {users} = useSelector(stateSelector)

    const isEmptyUsers = !users || (users && users.length === 0)

    if (isEmptyUsers)
        return null

    return <UsersContainer>
        {users.map((user, idx) => (
            <UserWrapper key={idx}>
                <UserImage>
                    <img src={user.avatar}/>
                </UserImage>
                <UserName>{user.first_name} {user.last_name}</UserName>
            </UserWrapper>
            ))}
    </UsersContainer>
}