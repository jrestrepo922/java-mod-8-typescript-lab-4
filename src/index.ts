// your code here
function prepend<N,S>(numArray: N[], textArr: S[]) :string {
    // your code here
    let numSpaces: N = numArray[0];
    let inputString: S = textArr[0];
    let modifiedString: unknown = inputString as unknown;   
    debugger
    for(let i = 0; i < +numSpaces; i++){
      modifiedString = "_" + modifiedString; 
    }
    return modifiedString as string;  
  }
  
const button = document.querySelector("button") as HTMLButtonElement; 
const numInput = document.getElementById("numInput") as HTMLInputElement; 
const textInput = document.getElementById("textInput") as HTMLInputElement; 
const divEle = document.querySelector("#answer") as HTMLDivElement; 

button!.addEventListener("click", () => {
    let numValue: number = +numInput!.value;  
    let textValue: string = textInput!.value; 
    let answer: string = prepend([numValue], [textValue]);
    console.log(answer); 
    divEle.innerHTML = answer; 
})