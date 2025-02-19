function login() {
    var userid = document.getElementById("userid").value;
    var userpassword = document.getElementById("userpassword").value;

    if (userid === "1" && userpassword === "1") {
        alert("✅ Login Successful: Welcome Vishal Patodekar!");
        window.location.href = "UserPage/VishalUser.html";
        
    }
    else if (userid === "2" && userpassword === "2"){
        alert("✅ Login Successful: Welcome Samarth Patodekar!");
        window.location.href = "UserPage/SamarthUser.html";
    }
    else {
        alert("❌ Login Failed: Incorrect ID or Password.");
        document.getElementById("error").textContent = "Invalid ID or Password";
    }
}
