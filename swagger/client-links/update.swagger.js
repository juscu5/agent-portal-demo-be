module.exports = {
  description: 'creating an category return status 201 if created and 400 if validation issues',
  operationId: 'updateClientLinks',
  tags: ['clientLinks'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            linkId: {
              type: 'string',
            },
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
