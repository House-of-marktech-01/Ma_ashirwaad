
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const authenticator = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                error: {
                    code: 'BAD_REQUEST_ERROR',
                    description: 'No authorization Header found'
                }
            });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                error: {
                    code: 'BAD_REQUEST_ERROR',
                    description: 'No token found'
                }
            });
        };

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: {
                        code: 'BAD_REQUEST_ERROR',
                        description: 'Authentication Failed'
                    }
                });
            }
            req.user = decoded;
        });
    } catch (err) {
        res.status(500).json({
            error: {
                error: {
                    code: 'SERVER_ERROR',
                    description: 'Server Error'
                }
            }
        });
    }
};

const authorizeRole=(role)=>{
    return(req, res, next)=>{
        if(req.user.role!==role){
            return res.status(403).json({
                error:{
                    code:'FORBIDDEN',
                    description:'You are not authorized to access this route'
                }
            });
        }
        next();
    }
};

export default {authenticator, authorizeRole};
