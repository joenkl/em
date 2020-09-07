MIDDLEWARES
    Mongo-Sanitize
        Description: This module searches for any keys in objects that begin with a $ sign or contain a ., from         req.body, req.query or req.params
        Link: https://www.npmjs.com/package/express-mongo-sanitize
    Express-Sanitized
        The above sanitizes req.body and req.query. Req.Params need to do it manually
        https://www.npmjs.com/package/express-sanitized
    Express-Sanitizer
        Same as above but need to do it manually
        https://www.npmjs.com/package/express-sanitizer
    Morgan
       https://www.npmjs.com/package/morgan
    CSURF
       https://www.npmjs.com/package/csurf
    HSTS
       https://www.npmjs.com/package/hsts

Social Login
https://medium.com/@tkssharma/authentication-using-passport-js-social-auth-with-node-js-1e1ec7086ded

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365