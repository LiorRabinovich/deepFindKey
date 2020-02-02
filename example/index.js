const deepFindKey = require('../deepFindKey');
const object = {
    a: {
        a1: {
            a2: {
                a3: {
                    id: 0
                }
            },
            a22: {

            }
        },
        a11: {

        }
    },
    b: {
        b1: {
            b2: {
                b3: {
                    id: 1
                }
            },
            b22: {

            }
        },
        b11: {
            
        }
    },
    c: {
        c1: {
            c2: {
                c3: {
                    id: 2
                }
            },
            c22: {

            }
        },
        c11: {
            
        }
    }
}

console.log('Original Object', object);
console.log('New Object', deepFindKey(object, 'id'));
