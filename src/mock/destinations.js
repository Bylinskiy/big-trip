const mockDestinations = [
  {
    id: 'bed9968c-f830-43b2-a7e3-5379ebc16c05',
    name: 'Chamonix',
    description: 'Chamonix, with crowded streets.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Chamonix central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Chamonix zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Chamonix parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Chamonix embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Chamonix street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Chamonix embankment'
      }
    ]
  },
  {
    id: '200647c2-a122-4eaf-9ead-429399762656',
    name: 'Geneva',
    description: 'Geneva, is a beautiful city, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Geneva biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Geneva parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Geneva biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Geneva city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Geneva zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Geneva biggest supermarket'
      }
    ]
  },
  {
    id: '74669640-07a1-42eb-8a65-56f37b4d7f4a',
    name: 'Amsterdam',
    description: 'Amsterdam, with a beautiful old town, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Amsterdam biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Amsterdam biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Amsterdam embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Amsterdam embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Amsterdam biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Amsterdam city centre'
      }
    ]
  },
  {
    id: '9e6d2a8c-46b2-4a4d-8b01-3bff5187ab54',
    name: 'Helsinki',
    description: 'Helsinki, with a beautiful old town.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Helsinki kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Helsinki street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Helsinki kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Helsinki zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Helsinki street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Helsinki embankment'
      }
    ]
  },
  {
    id: '98c1ddf8-6d26-4a2c-bb91-7031bdf25942',
    name: 'Oslo',
    description: 'Oslo, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Oslo zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Oslo zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Oslo park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Oslo city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Oslo zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Oslo embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Oslo embankment'
      }
    ]
  },
  {
    id: '3b95cee1-287f-4269-84f0-17ee5491c321',
    name: 'Kopenhagen',
    description: 'Kopenhagen, with crowded streets, with a beautiful old town, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Kopenhagen parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Kopenhagen city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Kopenhagen embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Kopenhagen street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Kopenhagen kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Kopenhagen park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Kopenhagen street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Kopenhagen embankment'
      }
    ]
  },
  {
    id: '0c43e412-6f13-434c-873c-e8d156e27072',
    name: 'Den Haag',
    description: 'Den Haag, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Den Haag street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Den Haag park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Den Haag kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Den Haag park'
      }
    ]
  },
  {
    id: '8fde2b92-61c9-43b5-8223-50db3385135b',
    name: 'Rotterdam',
    description: 'Rotterdam, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Rotterdam biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Rotterdam parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Rotterdam zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Rotterdam embankment'
      }
    ]
  },
  {
    id: 'db8fec33-495d-484e-af15-bf385b0a22b6',
    name: 'Saint Petersburg',
    description: 'Saint Petersburg, is a beautiful city, middle-eastern paradise, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Saint Petersburg kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Saint Petersburg park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Saint Petersburg street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Saint Petersburg biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Saint Petersburg street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Saint Petersburg street market'
      }
    ]
  },
  {
    id: 'e23e55cf-c4b5-4033-ad84-2c7fc48bd4f0',
    name: 'Moscow',
    description: 'Moscow, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Moscow biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Moscow zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Moscow street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Moscow city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Moscow park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Moscow zoo'
      }
    ]
  },
  {
    id: 'e148f73b-854b-4f6d-bd20-1dc49c88864b',
    name: 'Sochi',
    description: 'Sochi, in a middle of Europe.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Sochi street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Sochi embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Sochi parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Sochi central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Sochi kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Sochi kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Sochi parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Sochi park'
      }
    ]
  },
  {
    id: '8651216a-7fce-46a6-bf04-bb669e35a172',
    name: 'Tokio',
    description: 'Tokio, with a beautiful old town, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Tokio street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Tokio biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Tokio street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Tokio zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Tokio embankment'
      }
    ]
  },
  {
    id: 'e2ba6b05-4bb9-4e5c-bec6-eedacf42c1ee',
    name: 'Kioto',
    description: 'Kioto, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Kioto park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Kioto central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Kioto central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Kioto biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Kioto central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Kioto biggest supermarket'
      }
    ]
  },
  {
    id: '48addb2b-d72d-4db2-84a6-992dc947480f',
    name: 'Nagasaki',
    description: 'Nagasaki, a true asian pearl.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Nagasaki embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Nagasaki embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Nagasaki kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Nagasaki biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Nagasaki biggest supermarket'
      }
    ]
  },
  {
    id: '167e9093-9be6-46c7-8558-8c86bc3c3938',
    name: 'Hiroshima',
    description: 'Hiroshima, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Hiroshima zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Hiroshima embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Hiroshima biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Hiroshima biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Hiroshima zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Hiroshima biggest supermarket'
      }
    ]
  },
  {
    id: '083ecdf7-a915-4b5d-839d-5e4830e0409d',
    name: 'Berlin',
    description: 'Berlin, middle-eastern paradise.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Berlin central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Berlin city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Berlin biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Berlin biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Berlin central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Berlin biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Berlin embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Berlin street market'
      }
    ]
  },
  {
    id: 'bf9293be-cd24-4c30-8eac-8d981c8e2731',
    name: 'Munich',
    description: 'Munich, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Munich kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Munich zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Munich kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Munich parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Munich kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Munich biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Munich embankment'
      }
    ]
  },
  {
    id: '90ab2fc7-d8ab-40fa-9850-4d9097e55d5e',
    name: 'Frankfurt',
    description: 'Frankfurt, with crowded streets, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Frankfurt zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Frankfurt park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Frankfurt park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Frankfurt biggest supermarket'
      }
    ]
  },
  {
    id: '3ea45176-c96e-4e09-8a5d-96fbd943e823',
    name: 'Vien',
    description: 'Vien, is a beautiful city, a true asian pearl, with crowded streets, in a middle of Europe, middle-eastern paradise.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Vien embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Vien central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Vien kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Vien parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Vien city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Vien city centre'
      }
    ]
  },
  {
    id: '2d88fb5f-f52c-4627-a8a7-97221218e064',
    name: 'Rome',
    description: 'Rome, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Rome central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Rome central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Rome central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Rome kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Rome kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Rome street market'
      }
    ]
  },
  {
    id: '19aa2aec-c29f-410e-ae5e-b3b2ae28adae',
    name: 'Naples',
    description: 'Naples, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Naples embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Naples kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Naples biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Naples kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Naples kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Naples park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Naples kindergarten'
      }
    ]
  },
  {
    id: 'ac55b9ce-de32-4e08-908f-1dd6718214af',
    name: 'Venice',
    description: 'Venice, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Venice kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Venice central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Venice embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Venice embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Venice embankment'
      }
    ]
  },
  {
    id: 'dd549bae-d61d-48c5-b1c4-9d2d7374d59f',
    name: 'Milan',
    description: 'Milan, a true asian pearl, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Milan park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Milan city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Milan kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Milan biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Milan street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Milan kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Milan park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Milan street market'
      }
    ]
  },
  {
    id: 'ecaa08ce-4216-409b-a929-a2bf2e9fa1c6',
    name: 'Monaco',
    description: 'Monaco, is a beautiful city, with crowded streets, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Monaco embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Monaco embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Monaco street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Monaco kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Monaco street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Monaco central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Monaco parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Monaco zoo'
      }
    ]
  },
  {
    id: '0570fa97-d830-4289-9eff-4266e6dd2882',
    name: 'Paris',
    description: 'Paris, a true asian pearl, in a middle of Europe, with a beautiful old town, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Paris street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Paris zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Paris central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Paris city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Paris street market'
      }
    ]
  },
  {
    id: 'b86fc9e5-edf7-4554-8dd6-2737250c9a66',
    name: 'Barcelona',
    description: 'Barcelona, is a beautiful city, with crowded streets, in a middle of Europe.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Barcelona park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Barcelona parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Barcelona street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Barcelona embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Barcelona embankment'
      }
    ]
  },
  {
    id: '33303506-06d4-4cba-bc90-e777d05797b6',
    name: 'Valencia',
    description: 'Valencia, is a beautiful city, with crowded streets, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Valencia kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Valencia street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Valencia parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Valencia city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Valencia embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Valencia biggest supermarket'
      }
    ]
  },
  {
    id: '45c7e22e-f893-4e20-a517-96098cf4ba5d',
    name: 'Madrid',
    description: 'Madrid, with a beautiful old town, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Madrid biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Madrid central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Madrid kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Madrid city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Madrid parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Madrid central station'
      }
    ]
  }
];

const generateDestinations = () => mockDestinations;

export {generateDestinations};
