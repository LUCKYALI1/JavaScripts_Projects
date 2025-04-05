// Fetches 10 users and returns the user at given index `val`
async function getAllUsers(val) {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        return data.results[val];
    } catch (error) {
        console.log("E: ", error);
    }
}

// Populates the user card with user data
function display(user) {
    const userImg = document.getElementById('userImg');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userLocation = document.getElementById('userLocation');

    userImg.src = user.picture.large;
    userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    userEmail.textContent = user.email;
    userLocation.textContent = `${user.location.city}, ${user.location.country}`;
}

// Handles the Generate button click
document.getElementById('generateBtn').addEventListener('click', async () => {
    const val = Math.floor(Math.random() * 10); // 0 to 9
    const user = await getAllUsers(val);
    console.log(user); // For debugging
    display(user);
});
