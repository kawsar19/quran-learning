export async function sendOtpSms(phoneNumber: string, otp: string): Promise<boolean> {
  const simulate = process.env.SIMULATE_OTP === "true";

  if (simulate) {
    console.log(`[SIMULATED OTP] Phone: ${phoneNumber}, OTP: ${otp}`);
    return true;
  }

  try {
    const user = process.env.SMS_API_USER;
    const password = process.env.SMS_API_PASSWORD;
    const message = encodeURIComponent(
      `Welcome to EasyQuran.bd. Your OTP is ${otp}.`
    );

    const url = `http://www.aamarsms.com/api?user=${user}&password=${password}&to=${phoneNumber}&text=${message}`;
   console.log(url);
   const res = await fetch(url);
    return res.ok;
  } catch (error) {
    console.error("SMS send failed:", error);
    return false;
  }
}
