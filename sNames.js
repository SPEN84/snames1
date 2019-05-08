const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

    // Result: ['Selma', 'Sam', 'Sharon'];
let sNames = [];
    names.forEach(name => {
        if(name[1] === 'S') {
            sNames.push(name);
        }
    });

    console.log(sNames);