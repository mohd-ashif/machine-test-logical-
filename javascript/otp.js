function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10); 
    }
    return otp;
}

let otp = generateOTP();
console.log("Generated OTP:", otp);
