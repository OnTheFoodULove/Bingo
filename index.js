console.log("Hello world")
let B = false,
  I = false,
  N = false,
  G = false,
  O = false;
  
let a = [];

function newNumber(maxNumber) {
  let x = Math.floor(Math.random() * maxNumber) + 1;
  let x1 = Math.floor(Math.random() * 15) + 1;
  let x2 = Math.floor(Math.random() * 15) + 1;
  let x3 = Math.floor(Math.random() * 15) + 1;
  let x4 = Math.floor(Math.random() * 15) + 1;


  let I1 = Math.floor(Math.random() * 15) + 16;
  let I2 = Math.floor(Math.random() * 15) + 16;
  let I3 = Math.floor(Math.random() * 15) + 16;
  let I4 = Math.floor(Math.random() * 15) + 16;
  let I5 = Math.floor(Math.random() * 15) + 16;


  let N1 = Math.floor(Math.random() * 15) + 31;
  let N2 = Math.floor(Math.random() * 15) + 31;
  let N3 = Math.floor(Math.random() * 15) + 31;
  let N4 = Math.floor(Math.random() * 15) + 31;
  let N5 = Math.floor(Math.random() * 15) + 31;


  let G1 = Math.floor(Math.random() * 15) + 46;
  let G2 = Math.floor(Math.random() * 15) + 46;
  let G3 = Math.floor(Math.random() * 15) + 46;
  let G4 = Math.floor(Math.random() * 15) + 46;
  let G5 = Math.floor(Math.random() * 15) + 46;


  let O1 = Math.floor(Math.random() * 15) + 61;
  let O2 = Math.floor(Math.random() * 15) + 61;
  let O3 = Math.floor(Math.random() * 15) + 61;
  let O4 = Math.floor(Math.random() * 15) + 61;
  let O5 = Math.floor(Math.random() * 15) + 61;

  
  if (x <= 15) {
    console.log(`New number ${x} belongs to "B"`);
    B = true;
    BNum = x;
    if (!a.includes(x)) {

      document.querySelector("#td1").textContent = x;
      a.push(x);

    }
    if (!a.includes(x1)) {

      document.querySelector("#td6").textContent = x1;
      a.push(x1);

    }
    if (!a.includes(x2)) {

      document.querySelector("#td11").textContent = x2;
      a.push(x2);

    } if (!a.includes(x3)) {

      document.querySelector("#td16").textContent = x3;
      a.push(x3);

    } if (!a.includes(x4)) {

      document.querySelector("#td21").textContent = x4;
      a.push(x4);

    }


  } else if (x >= 16 && x <= 30) {
    console.log(`New number ${x} belongs to "I"` );
    I = true;
    INum = x;

   if (!a.includes(I1)) {

      document.querySelector("#td2").textContent = I1;
      a.push(I1);

    }
    if (!a.includes(I2)) {

      document.querySelector("#td7").textContent = I2;
      a.push(I2);

    }
    if (!a.includes(I3)) {

      document.querySelector("#td12").textContent = I3;
      a.push(I3);

    } if (!a.includes(I4)) {

      document.querySelector("#td17").textContent = I4;
      a.push(I4);

    } if (!a.includes(I5)) {

      document.querySelector("#td22").textContent = I5;
      a.push(I5);

    }

  } else if (x >= 30 && x <= 45) {
    console.log(`New number ${x} belongs to "N"` );
    N = true;
    NNum = x;
    if (!a.includes(N1)) {

      document.querySelector("#td3").textContent = N1;
      a.push(N1);

    }
    if (!a.includes(N2)) {

      document.querySelector("#td8").textContent = N2;
      a.push(N2);

    }
  
     if (!a.includes(N4)) {

      document.querySelector("#td18").textContent = N4;
      a.push(N4);

    } if (!a.includes(N5)) {

      document.querySelector("#td23").textContent = N5;
      a.push(N5);

    }
  } else if (x >= 45 && x <= 60) {
    console.log(`New number ${x} belongs to "G" `);
    G = true;
    GNum = x;
    if (!a.includes(G1)) {

      document.querySelector("#td4").textContent = G1;
      a.push(G1);

    }
    if (!a.includes(G2)) {

      document.querySelector("#td9").textContent = G2;
      a.push(G2);

    }
    if (!a.includes(G3)) {

      document.querySelector("#td14").textContent = G3;
      a.push(G3);

    } if (!a.includes(G4)) {

      document.querySelector("#td19").textContent = G4;
      a.push(G4);

    } if (!a.includes(G5)) {

      document.querySelector("#td24").textContent = G5;
      a.push(G5);

    }
    
  } else if (x >= 60 && x <= 75) {
    console.log(`New number ${x} belongs to "O" `);
    O = true;
    ONum = x;
    if (!a.includes(O1)) {

      document.querySelector("#td5").textContent = O1;
      a.push(O1);

    }
    if (!a.includes(O2)) {

      document.querySelector("#td10").textContent = O2;
      a.push(O2);

    }
    if (!a.includes(O3)) {

      document.querySelector("#td15").textContent = O3;
      a.push(O3);

    } if (!a.includes(O4)) {

      document.querySelector("#td20").textContent = O4;
      a.push(O4);

    } if (!a.includes(O5)) {

      document.querySelector("#td25").textContent = O5;
      a.push(O5);

    }
   
  }

  else {
    console.log(`New number ${x} is invalid.`);
  }
  if (B == true && I == true && N == true && G == true && O == true) {
    console.log("BEGOO");
    console.table({
      B: BNum,
      I: INum,
      N: NNum,
      G: GNum,
      O: ONum,
    });
  }


}
newNumber(75);

// let counter = 5;

// for (counter; counter > 0; counter--) {
// console.log(Current Counter is ${counter});
//if (counter == 2) break;
// }

// while (counter > 0)
// {
//  console.log(While, Current counter is ${counter});
// if (counter == 2) break;

// newNumber(75);
// counter-- ;
// }

while (B == false || I == false || N == false || G == false || O == false) {
  newNumber(75);
}
