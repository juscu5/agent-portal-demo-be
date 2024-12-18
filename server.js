const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const { connector } = require('swagger-routes-express');
const { swaggerDocument } = require('./swagger');
const controllers = require('./controllers');
const authMiddleware = require('./configurations/AuthMiddleware');

const logger = require('./configurations/WinstonLogger');

const app = express();
app.use(express.json());


/* CORS config */
app.use(cors({
  origin: '*',
  exposedHeaders: ['Content-Disposition'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

/* middleware */
authMiddleware(app, swaggerDocument);

/* swagger */
const connect = connector(controllers, swaggerDocument);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
connect(app);

/* start server */
app.listen(process.env.PORT, () => {
  logger.info(`Starting server at http://localhost:${process.env.PORT}`);
});
