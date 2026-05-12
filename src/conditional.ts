// conditional

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;  // C=true beceause B=undefined

type richPeopleVehivle = {
    bike: string,
    car: string,
    ship: string
}

type checkVehicle<T> = T extends keyof richPeopleVehivle ? true : false;

type hasBike = checkVehicle<"bike">