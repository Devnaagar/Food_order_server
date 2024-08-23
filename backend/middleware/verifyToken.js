import jwt from 'jsonwebtoken';
const JWT_SECRET = '12345'; 


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token.' });
        }
        req.adminId = decoded.adminId;
        next();
    });
};

export default verifyToken;