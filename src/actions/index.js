export const selectUser = (user) => {
console.log("you clicked on user:",user.name);
return{
type: "USER_SELECTED",
payload: user
}
};
