const employeeData = [
    {
      id: "1",
      name: "Ofc_Infinitybad",
      position: "Technical Lead",
      story: "Employee story for Ofc_Infinitybad...",
      robloxProfile: "https://www.roblox.com/users/2725012025/profile"
    },
    {
      id: "2",
      name: "Fun1892",
      position: "Creative Lead",
      story: "Employee story for Fun1892...",
      robloxProfile: "https://www.roblox.com/users/85764101/profile"
    },
    // Add more employee data objects as needed
];

function showEmployeeDetails(element) {
    const id = element.dataset.id;
    const employeeDetails = document.querySelector(".employee-details");
    const employeeDetailsContent = employeeDetails.querySelector(
      ".employee-details-content"
    );
    const template = document.getElementById("employee-details-template");
  
    employeeDetails.style.display = "block";
  
    if (employeeDetailsContent) {
      employeeDetailsContent.remove();
    }
  
    const newDetails = template.content.cloneNode(true);
    newDetails.querySelector(".employee-details-content").style.display = "flex";
    newDetails.querySelector(".employee-details-content").dataset.id = id;
  
    const employee = employeeData.find((e) => e.id === id);
  
    newDetails.querySelector("h2").innerText = employee.name;
    newDetails.querySelector("h4").innerText = employee.position;
    newDetails.querySelector(".story").innerText = employee.story;
  
    const buttons = newDetails.querySelectorAll(".button");
    buttons[0].href = employee.robloxProfile;
  
    employeeDetails.appendChild(newDetails);
} 