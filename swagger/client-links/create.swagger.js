module.exports = {
  description: 'creating an category return status 201 if created and 400 if validation issues',
  operationId: 'createClientLinks',
  tags: ['clientLinks'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              categoryRef: {
                type: 'string',
              },
              clientRef: {
                type: 'string',
              },
              companyRef: {
                type: 'string',
              },
              linkDesc: {
                type: 'string',
              },
              platFormName: {
                type: 'string',
              },
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
