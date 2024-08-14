export const generateToken = (user, message, statusCode, res) => {
  // Assuming the method to generate JWT is called `getJWTToken` in your user model
  const token = user.getJWTToken(); 
  
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      // secure: true, // Uncomment if using HTTPS
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
