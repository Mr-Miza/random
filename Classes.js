/*
class Coffe {

    espresso ;
    moccachino ;
    machiato ;
    constructor (espresso ,machiato, moccachino) {
        this.espresso= espresso ;
        this.machiato = machiato ;
        this.moccachino = moccachino ;
    }

    esspresoDrinking () {
        console.log('Drink esspreso warm as its foamy');
    }

    moccachinoTasting () {
        console.log('Taste moccachino , ma fav is cold with choco') ; 
    }

    machiatoEnjoying () {
        console.log ('Usually its better after u eat than before !') ;
    }
}

let c = new Coffe (1 ,2 ,0) ; 
 

console.log(c.espresso); 
c.esspresoDrinking() ;

*/

// ---------------------------------------------------------------------- //


class dog {
#breed ;
#color ;
#hairlength ;

    constructor (breed, color , hairlength){
        this.#breed= breed ;
        this.#color=color ;
        this.#hairlength= hairlength;
    }

    barks () {
        console.log(this.#color +' dog is barking ') ;
    }

    jumps (){
        console.log(this.#breed +' jumps high af');
    }

    getBreed (){
        return this.#breed;
    }
    setBreed(breed){
        this.#breed=breed ;
    }
    hiar(){
        console.log('This dog has '+ this.#hairlength  ) ;
    }
}

let d= new dog('Doberman', 'Black', 'Short hair ') ;

d.setBreed('Pitbull') ;
console.log(d.hiar());