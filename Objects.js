

// declaring an objects 

let backpack = {

    stripes : 2 ,
    pockets : 5 ,
    bookHandeling: 5 , 
    smolPockets : 2 
}

let varb= backpack.pockets ;

//console.log(varb) ; 

for (let propertie in backpack)     {

   // console.log(propertie) ;
}

backpack.bookHandeling= 2 ;

console.log(backpack.bookHandeling) ;