module.exports = {
    description: 'creating an category return status 201 if created and 400 if validation issues',
    operationId: 'login',
    tags: ['authentication'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              username: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        content: {
          'application/json': {
            schema: {},
          },
        },
      },
      401: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              items: {
                message: 'string',
                properties: "string",
              },
            },
          },
        },
      },
    },
  };
  