const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'd14427ce-2d9c-4c25-bcab-f6720ea8a776',
        title: 'Upgrade to a business class',
        price: 190
      },
      {
        id: '260c1ccb-3da7-413d-be27-ba7a3ec008be',
        title: 'Choose the radio station',
        price: 30
      },
      {
        id: '54e808b8-53e8-4dd1-9acb-4e8ab65f7fdf',
        title: 'Choose temperature',
        price: 170
      },
      {
        id: 'c0bd2f64-47b9-4b4e-9a0d-1405417b01f2',
        title: 'Drive quickly, I\'m in a hurry',
        price: 100
      },
      {
        id: '8db96f33-3076-48e9-9322-473530deea66',
        title: 'Drive slowly',
        price: 110
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'f57997e9-5e77-4fec-a160-5f886c8989a3',
        title: 'Infotainment system',
        price: 50
      },
      {
        id: '8162a8d1-8db1-41ec-86f2-c9215acb7277',
        title: 'Order meal',
        price: 100
      },
      {
        id: '8df2768f-a0d2-4cf9-98ef-3b83ec3bcb09',
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '8da013b8-96a8-4dc5-85aa-bd0828bee516',
        title: 'Book a taxi at the arrival point',
        price: 110
      },
      {
        id: 'aad00e0b-65dd-4c3a-a6ba-04aed5768fde',
        title: 'Order a breakfast',
        price: 80
      },
      {
        id: '6c2759bf-e80f-418d-bd9f-64d214aea965',
        title: 'Wake up at a certain time',
        price: 140
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '10eb2ead-35ec-4ff6-8331-b9400c643460',
        title: 'Choose meal',
        price: 120
      },
      {
        id: '6c4fb610-b7ca-4945-b6c9-4fadeacb60ce',
        title: 'Choose seats',
        price: 90
      },
      {
        id: 'ff7a733d-9c50-4f26-8be1-dfc5d3728844',
        title: 'Upgrade to comfort class',
        price: 120
      },
      {
        id: '931a3c30-c3bb-4e24-be9c-569ce2cc9563',
        title: 'Upgrade to business class',
        price: 120
      },
      {
        id: 'c4713870-ee24-46ec-912a-eda85fdfd5e1',
        title: 'Add luggage',
        price: 170
      },
      {
        id: '84594f02-de54-420e-ab7b-0b84e20db5ec',
        title: 'Business lounge',
        price: 160
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '0deb565c-23c8-48eb-ba7c-3e1961e7aadb',
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: 'e17bbeb7-8523-4370-a7d5-fbcc0fdcb1f8',
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 'd0ed739a-fdca-4731-b76e-5a1afd1b0cfa',
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 'c66e6798-ec2b-433a-b18c-71158043294b',
        title: 'Laundry',
        price: 140
      },
      {
        id: 'f675c634-b3a8-4062-aff3-7fa1eb6024c5',
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: '468369a7-a1f5-4621-9880-5b04b6547bce',
        title: 'Choose meal',
        price: 130
      },
      {
        id: '47a1c1b5-85b2-401d-81a2-c799adb4f726',
        title: 'Choose seats',
        price: 160
      },
      {
        id: 'dd1f35f9-0fa7-4882-9e50-3007715bf19d',
        title: 'Upgrade to comfort class',
        price: 170
      },
      {
        id: 'bce0e16b-6668-40a5-ab73-600a3de27a33',
        title: 'Upgrade to business class',
        price: 150
      },
      {
        id: 'e8e22b79-8484-4a2f-a722-e9e8d8b76bcf',
        title: 'Add luggage',
        price: 100
      },
      {
        id: '48b07375-a25d-438b-b643-ce5ce5df9f36',
        title: 'Business lounge',
        price: 40
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '16b1bee2-21d2-4836-aa84-d62d697af6dc',
        title: 'With automatic transmission',
        price: 110
      },
      {
        id: '8a8f8eb0-7718-4658-ac58-ec999d1b46f1',
        title: 'With air conditioning',
        price: 180
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '577168cf-c4f2-4c98-b719-2da424db6f53',
        title: 'Choose live music',
        price: 150
      },
      {
        id: '7291382b-c1f4-4aae-af49-5ff46a086f5c',
        title: 'Choose VIP area',
        price: 70
      }
    ]
  }
];

const generateOffers = () => mockOffers;

export {generateOffers};
