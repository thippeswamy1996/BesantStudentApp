// Store credentials in sessionStorage (only for demo purposes; do not use this method in production)
sessionStorage.setItem('adminUsername', 'Admin');
sessionStorage.setItem('adminPassword', 'Admin@123');
sessionStorage.setItem('userUsername', 'Thippesh');
sessionStorage.setItem('userPassword', 'Thippu@123');

// Attach event listener to the login button
document.getElementById("loginButton").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const enteredUsername = document.getElementById("Username").value;
    const enteredPassword = document.getElementById("password").value;

    // Retrieve stored credentials
    const adminUsername = sessionStorage.getItem('adminUsername');
    const adminPassword = sessionStorage.getItem('adminPassword');
    const userUsername = sessionStorage.getItem('userUsername');
    const userPassword = sessionStorage.getItem('userPassword');

    // Validate credentials
    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
        // Redirect to Admin Dashboard
        location.assign("file:///C:/xampp/htdocs/FrontEndProject/views/Adminpage.html");
    } else if (enteredUsername === userUsername && enteredPassword === userPassword) {
        // Redirect to User Dashboard
        location.assign("C://xampp//htdocs//FrontEndProject//views//UserDashboard.html");
    } else {
        // Show an alert for invalid credentials
        alert("Invalid Username or Password! Please try again.");
    }
});
