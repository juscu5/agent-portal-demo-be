module.exports = {
  description: 'creating an category return status 201 if created and 400 if validation issues',
  operationId: 'getClientLinks',
  tags: ['clientLinks'],
  requestBody: {},
  responses: {
    200: {
      content: {
        'application/json': {
          schema: [],
        },
      },
    },
  },
};
