const planetLog = [
{name: "Mercury", distance: 57, explored: true, type:"Rocky"},
{name: "Venus", distance: 66, explored: false, type:"Gas"},
{name: "Mars", distance: 40, explored: true, type:"Ice"},
{name: "Jupiter", distance: 77, explored: false, type:"Rocky"},
{name: "", distance: 60, explored: false, type:"Gas"},

]

console.table(planetLog);

// step2

for (i = 0; i < planetLog.length; i++){
    if (planetLog[i].explored == true){
        console.log(` Explored: ${planetLog[i].name} - ${planetLog[i].type}`);
    }
        else {
            console.log(` Uncharted: ${planetLog[i].name} - ${planetLog[i].distance} M Km away`)
        }
        if (planetLog[i].distance < 100){
            console.log(` ${planetLog[i].name} - Nearby!`);
            
        }
        
}function validatePlanet(planet) {
    if (typeof planet.name == null || typeof planet.name == undefined){
        return;
    }
    if (planetLog.missing == true){
        console.log(`Error: ${planetLog.name} has incomplete data `);
        
    }
}
