const employeeList = [
  {
    name: "Jan",
    officeNum: 1,
    phoneNum: "222-222-2222"
  },
  {
    name: "Juan",
    officeNum: 304,
    phoneNum: "489-789-8789"
  },
  {
    name: "Margie",
    officeNum: 789,
    phoneNum: "789-789-7897"
  },
  {
    name: "Sara",
    officeNum: 32,
    phoneNum: "222-789-4654"
  },
  {
    name: "Tyrell",
    officeNum: 3,
    phoneNum: "566-621-0452"
  },
  {
    name: "Tasha",
    officeNum: 213,
    phoneNum: "789-766-5675"
  },
  {
    name: "Ty",
    officeNum: 211,
    phoneNum: "789-766-7865"
  },
  {
    name: "Sarah",
    officeNum: 345,
    phoneNum: "222-789-5231"
  }
];

const command = prompt("Enter a command");

if (command === "print") {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
} else if (command === "verify") {
  const inputName = prompt("Enter an employee's name");
  let count = 0;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      count++;
    }
  }
  render(count === 1);
} else if (command === "lookup") {
  const inputName = prompt("Enter an employee's name");
  let index = 0;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  render(employeeList[index].name);
  render(employeeList[index].officeNum);
  render(employeeList[index].phoneNum);
} else if (command === "contains") {
  const inputStr = prompt("Enter keyword");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.includes(inputStr)) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
} else if (command === "update") {
  const inputName = prompt("Enter an employee's name");
  const inputField = prompt("Enter a field");
  const inputValue = prompt("Enter a value");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  employeeList[index][inputField] = inputValue;
  render(employeeList[index].name);
  render(employeeList[index].officeNum);
  render(employeeList[index].phoneNum);
} else if (command === "add") {
  const inputName = prompt("Enter an employee's name");
  const inputOffice = prompt("Enter office number");
  const inputPhone = prompt("Enter telephone number");
  leng = employeeList.length;
  newObj = [];
  employeeList.push(newObj);
  newObj.name = inputName;
  newObj.officeNum = inputOffice;
  newObj.phoneNum = inputPhone;
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
} else if (command === "delete") {
  const inputName = prompt("Enter an employee's name");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  employeeList[index] = [];
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
} else if (command === "location") {
  const inputName = prompt("Enter an employee's name");
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  office = parseInt(employeeList[index].officeNum);
  leng = office.toString().length;
  if (leng <= 2) {
    render(`${inputName} is located on the ground floor in office ${office}.`);
  } else if (leng === 3) {
    render(
      `${inputName} is located on floor ${
        office.toString()[0]
      } in office ${office}.`
    );
  } else {
    render("Not a valid command. Refresh the page.");
  }
}
