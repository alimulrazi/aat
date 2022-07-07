import { data } from "../data/users.js";

/* get all users information from file*/
export const getAllUsersJSON = (req, res) => {
  res.status(200).json(data);
};

/*get individual user information from file */
export const getIndividualUsersJSON = (req, res) => {
  var user = data.filter((item) => {
    return item.id == req.params.id;
  });
  
  if(user.length>0)
   res.status(200).json(user[0]);
  else
  res.status(400).json("Invalid request");
};

/* 
 *  get individual user information or filtered information  
*/
export const getFilteredUsersJSON = (req, res) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (let key in filters) {
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });

  if(filteredUsers)
    res.status(200).json(filteredUsers);
  else
    res.status(400).json("Invalid request");
};