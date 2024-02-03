let availableSpaces = 100;
let userProfile = {
    userName: '',
    vehicleNumber: '',
    userEmail: '',
    userPhoneNumber: '',
    
};
function reserveSpace() {
    // Ask for user's name, vehicle number, email, phone number, and vehicle type
    userProfile.userName = prompt('Enter your name:');
    userProfile.vehicleNumber = prompt('Enter your vehicle number:');
    userProfile.userEmail = prompt('Enter your email:');
    userProfile.userPhoneNumber = prompt('Enter your phone number:');
}