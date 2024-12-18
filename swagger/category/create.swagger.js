module.exports = {
  description: 'creating an category return status 201 if created and 400 if validation issues',
  operationId: 'createCategory',
  tags: ['category'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            categoryName: {
              type: 'string',
            },
            status: {
              type: 'boolean',
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
    400: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            items: {
              message: 'string',
              invalidProperties: {
                type: 'array',
                items: [
                  {
                    property: 'string',
                    message: 'string',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
};
