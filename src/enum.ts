// enum

// set of fixed string 

// type UserRoles = "admin" | "Editor" | "viewer"
enum UserRoles  {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    } else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable);