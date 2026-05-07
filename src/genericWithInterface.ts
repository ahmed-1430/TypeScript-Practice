
interface iDeveloper<T, X = null> {
    name: string,
    salry: number,
    device: {
        Brand: string,
        Model: string,
        releasedYear: string
    };
    smartWatch: T
    bike?: X
}

const poorDeveloper: iDeveloper<{
    heartrate: string,
    stopWatch: boolean,

}> = {
    name: 'mr. poor',
    salry: 40,
    device: {
        Brand: 'Asus',
        Model: 'vivobook',
        releasedYear: '2020'
    },
    smartWatch: {
        heartrate: '160',
        stopWatch: true
    }
}



// for clean code 
interface appleWatch {
    heartrate: string,
    callSupport: boolean,
    calculator: boolean,
    AiSupport: boolean

}

interface bike {
    Brand: string,
    Model: string,
    engine: string,
    fuelCapacity: number,
}

const richDeveloper: iDeveloper<appleWatch, bike> = {
    name: 'mr. poor',
    salry: 90,
    device: {
        Brand: 'Asus Rog',
        Model: 'vivobook',
        releasedYear: '2025'
    },
    smartWatch: {
        heartrate: '160',
        callSupport: true,
        calculator: true,
        AiSupport: true
    },
    bike: {
        Brand: 'Yamaha',
        Model: 'R15',
        engine: '160cc',
        fuelCapacity: 15
    }
}