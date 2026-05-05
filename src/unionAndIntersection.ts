// Union   => " | "

type userRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: userRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard'
    }
    else if (role === 'user') {
        return 'User Dashboard'
    }
    else {
        return 'guest dashboard'
    }
}

getDashboard('admin')



// Intersection => " & "

type employee = {
    id: number,
    name: string,
    phoneNo: string
}

type manager = {
    designation: string,
    teamSize: number

}
type employeeManager = employee & manager;

const managerUser: employeeManager = {
    id: 123,
    name: 'Ahmed',
    phoneNo: '+8801712345678',
    designation: 'Manager',
    teamSize: 5
}