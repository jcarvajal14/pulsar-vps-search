enum admin {
  admin,
}
enum staff {
  admin,
  staff,
}
enum user {
  admin,
  staff,
  user,
}
enum onlyGuest {
  onlyGuest,
}

type authRole = {
  admin: admin;
  staff: staff;
  user: user;
  onlyGuest: onlyGuest;
};
export default authRole;
