const errorResponseHelper = require('../controllers/common/ErrorResponseHelper');
const {
  validateToken,
} = require('../domain/usecases');

module.exports = (app, swaggerDocument) => {
  const paths = Object.keys(swaggerDocument.paths).reduce((acc, item) => {
    const authEndpoints = Object.keys(swaggerDocument.paths[item]).filter((key) => swaggerDocument.paths[item][key].tags.includes('auth'));

    if (authEndpoints.length > 0) {
      acc.push(item);
    }

    return acc;
  }, []);

  /* add middleware */
  if (paths.length > 0) {
    app.use(paths, async (req, res, next) => {
      const { token } = req.query;

      try {
        await validateToken(token);

        return next();
      } catch (e) {
        return errorResponseHelper(e, res);
      }
    });
  }
};
