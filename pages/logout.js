function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");

    // redirect to login page
    window.location.href = "/login";
}

export default logout;