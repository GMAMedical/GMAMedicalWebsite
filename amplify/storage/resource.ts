import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'productImages',
    access: (allow) => ({
    'images/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read','write','delete'])
    ],
  })
});