export interface Dock {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void
};

const dock1: Dock = {
    name: 'Joy',
    numLegs: 2,
    makeSound: (sound) => { console.log(sound); }
};

const dock2: Dock = {
    name: 'Jun',
    numLegs: 2,
    makeSound: (sound) => { console.log(sound); }
};

dock1.makeSound('Gaga');

export const docks = [dock1, dock2];