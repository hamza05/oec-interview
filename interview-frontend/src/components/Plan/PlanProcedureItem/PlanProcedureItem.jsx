import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";
import { useParams } from "react-router-dom";
import {
    addUserToProcedure,
    getPlanProceduresUser,
    getUsers
  } from "../../../api/api";
const PlanProcedureItem = ({ procedure, users }) => {
    const [selectedUsers, setSelectedUsers] = useState(null);
    let { id } = useParams();

    const handleAssignUserToProcedure = async(e) => {
        console.log(procedure);
        await addUserToProcedure(id,procedure.procedureId,e[0].value);
        setSelectedUsers(e);
        // TODO: Remove console.log and add missing logic
        console.log(e);
    };
    useEffect(() => {
        (async () => {
        // Set an initial value for selectedUsers when the component mounts
        const initialSelectedUsers = await getPlanProceduresUser(id,procedure.procedureId);
        console.log("procedure id", procedure.procedureId);
        var allUsers = await getUsers();
                  // Create userOptions array by mapping through each user in initialSelectedUsers
    const userOptions = (initialSelectedUsers || []).map((selectedUser) => {
        // Find the user with the matching userId from allUsers
        const user = allUsers.find((u) => u.userId === selectedUser.userId);
        return user ? { label: user.name, value: user.userId } : null;
      });   
      setSelectedUsers(userOptions);
      console.log(initialSelectedUsers);

    })();
}, []); // The empty dependency array ensures that this effect runs only once on mount
    
    return (
        <div className="py-2">
            <div>
                {procedure.procedureTitle}
            </div>

            <ReactSelect
                className="mt-2"
                placeholder="Select User to Assign"
                isMulti={true}
                options={users}
                value={selectedUsers}
                onChange={(e) => handleAssignUserToProcedure(e)}
            />
        </div>
    );
};

export default PlanProcedureItem;
