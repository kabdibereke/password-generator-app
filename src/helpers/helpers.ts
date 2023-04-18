export const getLevel =(num:number, setState: React.Dispatch<React.SetStateAction<string>>,characterLength:number,strengthArr:string[])=> {
    if(num==1) {
        if(characterLength<9) {
          setState(strengthArr[0])
        }
        if(characterLength>=9 && characterLength< 13 ) {
          setState(strengthArr[1])
        }
        if(characterLength>=13 && characterLength< 17 ) {
          setState(strengthArr[2])
        }
        if(characterLength>=17 && characterLength<=20 ) {
          setState(strengthArr[3])
        }
      }
    if(num==2) {
        if(characterLength<8) {
          setState(strengthArr[0])
        }
        if(characterLength>=8 && characterLength< 12 ) {
          setState(strengthArr[1])
        }
        if(characterLength>=12 && characterLength< 16 ) {
          setState(strengthArr[2])
        }
        if(characterLength>=16 && characterLength<=20 ) {
          setState(strengthArr[3])
        }
      }
    if(num==3) {
        if(characterLength<6) {
          setState(strengthArr[0])
        }
        if(characterLength>=6 && characterLength< 8 ) {
          setState(strengthArr[1])
        }
        if(characterLength>=8 && characterLength< 11 ) {
          setState(strengthArr[2])
        }
        if(characterLength>=11 && characterLength<=20 ) {
          setState(strengthArr[3])
        }
      }
    if(num==4) {
        if(characterLength<4) {
          setState(strengthArr[0])
        }
        if(characterLength>=4 && characterLength< 5 ) {
          setState(strengthArr[1])
        }
        if(characterLength>=5 && characterLength< 7 ) {
          setState(strengthArr[2])
        }
        if(characterLength>=7 && characterLength<=20 ) {
          setState(strengthArr[3])
        }
    }
}

export  function shuffleArray(array:string[]) {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}