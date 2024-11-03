function showMessage(message: string): void { //нічого не повертає так як немає return
  console.log(message);
}

function calc(num1: number, num2: number): number { 
  return num1 + num2;
}

function customError(): never {
  //завжди повертає Error
  throw new Error("Error");
}
