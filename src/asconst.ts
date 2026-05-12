// as const assertion 

// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

const userRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;     // read only assertion




const canEdit = (role: typeof userRole[keyof typeof userRole]) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true
    } else return false;
}

const isEditPermissable = canEdit(userRole.Admin)
console.log(isEditPermissable);