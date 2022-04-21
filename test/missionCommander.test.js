const  MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1',() => {
        const result = 1 + 2
        expect(result).toBe(3);
    });
})

describe("Unit Tests for Mission Commander Class", () => {
    test('Create a mission commander object', () => {
        const mymissionCommander = new MissionCommander("Woopa")
        expect(mymissionCommander.name).toBe("Woopa");
    })
})