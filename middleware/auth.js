const jwt = require(`jsonwebtoken`)
exports.isAuth = async (req, res, next) => {
    try {

        const token = req.header('token')
        if (token) {
            jwt.verify(token, "shhhh", (err, decoded) => {
                if (err) {
                    res
                    .status(500)
                    .json({ error: "invalid token"})        
                } else {
                    req.userId = decoded.userId
                    next()
                }
            })
        } else {
            res
            .status(500)
            .json({ error: "token not exist"})    
        }
    } catch (error) {
        res
      .status(500)
      .json({ error: "catch error in add new note controller", error });
    }
}








