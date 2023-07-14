import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    id: '21377943-96a2-458e-94ea-6a75db449710',
    type: 'taxi',
    dateFrom: '2023-06-09T22:34:33.683Z',
    dateTo: '2023-06-10T20:31:08.134Z',
    destination: '90ab2fc7-d8ab-40fa-9850-4d9097e55d5e',
    basePrice: 500,
    isFavorite: true,
    offers: [
      'd14427ce-2d9c-4c25-bcab-f6720ea8a776',
      '260c1ccb-3da7-413d-be27-ba7a3ec008be'
    ]
  },
  {
    id: 'de7f627f-4329-4da7-97fa-c0a0a7822d53',
    type: 'bus',
    dateFrom: '2023-06-10T20:31:08.134Z',
    dateTo: '2023-06-11T19:24:02.483Z',
    destination: '8651216a-7fce-46a6-bf04-bb669e35a172',
    basePrice: 800,
    isFavorite: false,
    offers: [
      'f57997e9-5e77-4fec-a160-5f886c8989a3',
      '8162a8d1-8db1-41ec-86f2-c9215acb7277',
      '8df2768f-a0d2-4cf9-98ef-3b83ec3bcb09'
    ]
  },
  {
    id: '567628b6-e09d-4193-8f0d-5fc1baf144db',
    type: 'bus',
    dateFrom: '2023-06-11T19:24:02.483Z',
    dateTo: '2023-06-12T14:06:29.151Z',
    destination: '90ab2fc7-d8ab-40fa-9850-4d9097e55d5e',
    basePrice: 800,
    isFavorite: false,
    offers: [
      'f57997e9-5e77-4fec-a160-5f886c8989a3',
      '8162a8d1-8db1-41ec-86f2-c9215acb7277',
      '8df2768f-a0d2-4cf9-98ef-3b83ec3bcb09'
    ]
  },
  {
    id: '243f1506-5e3b-4545-9009-e0b6ec8ccd99',
    type: 'sightseeing',
    dateFrom: '2023-06-12T14:06:29.151Z',
    dateTo: '2023-06-12T19:32:24.051Z',
    destination: '98c1ddf8-6d26-4a2c-bb91-7031bdf25942',
    basePrice: 600,
    isFavorite: true,
    offers: []
  },
  {
    id: 'fc7ae593-b3d5-486c-be06-1ef78b3e48c4',
    type: 'ship',
    dateFrom: '2023-06-12T19:32:24.051Z',
    dateTo: '2023-06-13T10:22:57.810Z',
    destination: '48addb2b-d72d-4db2-84a6-992dc947480f',
    basePrice: 1100,
    isFavorite: false,
    offers: [
      '468369a7-a1f5-4621-9880-5b04b6547bce',
      '47a1c1b5-85b2-401d-81a2-c799adb4f726',
      'dd1f35f9-0fa7-4882-9e50-3007715bf19d',
      'bce0e16b-6668-40a5-ab73-600a3de27a33',
      '48b07375-a25d-438b-b643-ce5ce5df9f36'
    ]
  },
  {
    id: 'bd2b4de6-c617-425f-8c28-3a0425f1d9a4',
    type: 'sightseeing',
    dateFrom: '2023-06-13T10:22:57.810Z',
    dateTo: '2023-06-14T08:02:48.474Z',
    destination: '200647c2-a122-4eaf-9ead-429399762656',
    basePrice: 1000,
    isFavorite: true,
    offers: []
  },
  {
    id: '4365279f-3346-412b-8751-933ec22214f1',
    type: 'restaurant',
    dateFrom: '2023-06-14T08:02:48.474Z',
    dateTo: '2023-06-14T20:03:30.440Z',
    destination: '33303506-06d4-4cba-bc90-e777d05797b6',
    basePrice: 900,
    isFavorite: false,
    offers: [
      '577168cf-c4f2-4c98-b719-2da424db6f53',
      '7291382b-c1f4-4aae-af49-5ff46a086f5c'
    ]
  },
  {
    id: '88ddefd2-3ea1-4357-bcbb-2a37032009bb',
    type: 'train',
    dateFrom: '2023-06-14T20:03:30.440Z',
    dateTo: '2023-06-15T17:20:45.938Z',
    destination: '45c7e22e-f893-4e20-a517-96098cf4ba5d',
    basePrice: 1000,
    isFavorite: false,
    offers: [
      '8da013b8-96a8-4dc5-85aa-bd0828bee516',
      'aad00e0b-65dd-4c3a-a6ba-04aed5768fde',
      '6c2759bf-e80f-418d-bd9f-64d214aea965'
    ]
  },
  {
    id: '58255540-4f62-4a48-a7f2-95f80da8b381',
    type: 'flight',
    dateFrom: '2023-06-15T17:20:45.938Z',
    dateTo: '2023-06-16T08:44:11.884Z',
    destination: '90ab2fc7-d8ab-40fa-9850-4d9097e55d5e',
    basePrice: 800,
    isFavorite: false,
    offers: [
      '6c4fb610-b7ca-4945-b6c9-4fadeacb60ce',
      'c4713870-ee24-46ec-912a-eda85fdfd5e1'
    ]
  },
  {
    id: '6eaa3e84-94c4-46f1-80b6-8a9e38464081',
    type: 'flight',
    dateFrom: '2023-06-16T08:44:11.884Z',
    dateTo: '2023-06-16T19:25:56.055Z',
    destination: '3ea45176-c96e-4e09-8a5d-96fbd943e823',
    basePrice: 800,
    isFavorite: false,
    offers: [
      '10eb2ead-35ec-4ff6-8331-b9400c643460',
      '6c4fb610-b7ca-4945-b6c9-4fadeacb60ce',
      '84594f02-de54-420e-ab7b-0b84e20db5ec'
    ]
  },
  {
    id: '1bfc9813-a16e-4256-afb2-4513aeafebf5',
    type: 'taxi',
    dateFrom: '2023-06-16T19:25:56.055Z',
    dateTo: '2023-06-17T09:53:49.365Z',
    destination: '8651216a-7fce-46a6-bf04-bb669e35a172',
    basePrice: 1000,
    isFavorite: true,
    offers: [
      'd14427ce-2d9c-4c25-bcab-f6720ea8a776',
      '260c1ccb-3da7-413d-be27-ba7a3ec008be',
      'c0bd2f64-47b9-4b4e-9a0d-1405417b01f2',
      '8db96f33-3076-48e9-9322-473530deea66'
    ]
  },
  {
    id: 'd7689a00-43f5-478c-b545-9644e152dc3f',
    type: 'flight',
    dateFrom: '2023-06-17T09:53:49.365Z',
    dateTo: '2023-06-17T16:22:49.135Z',
    destination: '33303506-06d4-4cba-bc90-e777d05797b6',
    basePrice: 1100,
    isFavorite: false,
    offers: [
      '10eb2ead-35ec-4ff6-8331-b9400c643460',
      '931a3c30-c3bb-4e24-be9c-569ce2cc9563',
      'c4713870-ee24-46ec-912a-eda85fdfd5e1',
      '84594f02-de54-420e-ab7b-0b84e20db5ec'
    ]
  },
  {
    id: '05585923-397e-4369-9cc7-bff799d86746',
    type: 'flight',
    dateFrom: '2023-06-17T16:22:49.135Z',
    dateTo: '2023-06-18T13:16:39.277Z',
    destination: 'ac55b9ce-de32-4e08-908f-1dd6718214af',
    basePrice: 700,
    isFavorite: false,
    offers: [
      '6c4fb610-b7ca-4945-b6c9-4fadeacb60ce'
    ]
  },
  {
    id: '64a88873-f88c-43ad-9565-86d18cf8d157',
    type: 'ship',
    dateFrom: '2023-06-18T13:16:39.277Z',
    dateTo: '2023-06-18T20:00:41.055Z',
    destination: 'e23e55cf-c4b5-4033-ad84-2c7fc48bd4f0',
    basePrice: 500,
    isFavorite: false,
    offers: [
      'bce0e16b-6668-40a5-ab73-600a3de27a33',
      '48b07375-a25d-438b-b643-ce5ce5df9f36'
    ]
  },
  {
    id: 'd0ac5526-f985-45b5-9c1d-97fd2eeb0acd',
    type: 'flight',
    dateFrom: '2023-06-18T20:00:41.055Z',
    dateTo: '2023-06-19T02:45:59.141Z',
    destination: 'dd549bae-d61d-48c5-b1c4-9d2d7374d59f',
    basePrice: 800,
    isFavorite: true,
    offers: [
      'ff7a733d-9c50-4f26-8be1-dfc5d3728844',
      '931a3c30-c3bb-4e24-be9c-569ce2cc9563'
    ]
  },
  {
    id: '6dfc597a-4ec0-447b-b080-1beec032a55e',
    type: 'taxi',
    dateFrom: '2023-06-19T02:45:59.141Z',
    dateTo: '2023-06-19T21:00:32.819Z',
    destination: '0570fa97-d830-4289-9eff-4266e6dd2882',
    basePrice: 500,
    isFavorite: false,
    offers: [
      'd14427ce-2d9c-4c25-bcab-f6720ea8a776',
      '54e808b8-53e8-4dd1-9acb-4e8ab65f7fdf',
      'c0bd2f64-47b9-4b4e-9a0d-1405417b01f2',
      '8db96f33-3076-48e9-9322-473530deea66'
    ]
  },
  {
    id: '3722eab0-a34c-462e-a2fd-3b24a8735971',
    type: 'ship',
    dateFrom: '2023-06-19T21:00:32.819Z',
    dateTo: '2023-06-20T19:39:36.863Z',
    destination: '48addb2b-d72d-4db2-84a6-992dc947480f',
    basePrice: 900,
    isFavorite: false,
    offers: [
      'bce0e16b-6668-40a5-ab73-600a3de27a33'
    ]
  },
  {
    id: 'f8c50f7d-bcb2-445b-aa34-f33465d5746a',
    type: 'flight',
    dateFrom: '2023-06-20T19:39:36.863Z',
    dateTo: '2023-06-20T22:55:31.718Z',
    destination: 'dd549bae-d61d-48c5-b1c4-9d2d7374d59f',
    basePrice: 300,
    isFavorite: false,
    offers: [
      '10eb2ead-35ec-4ff6-8331-b9400c643460',
      'ff7a733d-9c50-4f26-8be1-dfc5d3728844',
      '84594f02-de54-420e-ab7b-0b84e20db5ec'
    ]
  },
  {
    id: '5bf119ac-af3d-4b1f-bed9-967fcfc8ce4d',
    type: 'taxi',
    dateFrom: '2023-06-20T22:55:31.718Z',
    dateTo: '2023-06-21T19:01:03.680Z',
    destination: '3ea45176-c96e-4e09-8a5d-96fbd943e823',
    basePrice: 900,
    isFavorite: true,
    offers: [
      '54e808b8-53e8-4dd1-9acb-4e8ab65f7fdf',
      '8db96f33-3076-48e9-9322-473530deea66'
    ]
  },
  {
    id: '537de528-74dc-4823-8e21-d0c433392c5b',
    type: 'check-in',
    dateFrom: '2023-06-21T19:01:03.680Z',
    dateTo: '2023-06-21T22:35:32.870Z',
    destination: '3b95cee1-287f-4269-84f0-17ee5491c321',
    basePrice: 800,
    isFavorite: true,
    offers: [
      'd0ed739a-fdca-4731-b76e-5a1afd1b0cfa',
      'f675c634-b3a8-4062-aff3-7fa1eb6024c5'
    ]
  }
];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export {getRandomPoint};
