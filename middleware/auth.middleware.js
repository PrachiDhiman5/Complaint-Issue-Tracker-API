const auth = (req, res, next) =>{
    console.log('Auth Checked!!');

    next();
};

export default auth;