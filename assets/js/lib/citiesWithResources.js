const citiesWithResources = [
  {
    city: 'Ariyalur',
    resources: { covidBeds: '12Dmi6ISJQUDIkhbRZ_py4n_IQHJRN1pnuBEOA7tv5ko' },
    lat: 11.1400585,
    lng: 79.0786281
  },
  {
    city: 'Chengalpattu',
    resources: { covidBeds: '1OlpEEumoFhNDgnFxe6WIe78A8SlhSYHVQorVbOK1Uvo' },
    lat: 12.6819372,
    lng: 79.98884129999999
  },
  {
    city: 'Chennai',
    resources: {
      covidBeds: '1YV3DWGxsvlTp0-vaw8f09AajQ5cl3MovFvWVVDtkbOc',
      oxygenSupply: '1p_QIV3kvXZX8C0jB4RIVMsU87YPVm3EJT3-qsJo80b8'
    },
    lat: 13.0826802,
    lng: 80.2707184
  },
  {
    city: 'Coimbatore',
    resources: {
      covidBeds: '1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw',
      oxygenSupply: '1Ry3y1hx1iHeuF17YmWtzfaDQdhx5zRr6lSLrzBW_TU0',
      meals: '13KNh-6geHXQlr4yBlEo3pSqeU5Q_rGQk6bbZcCz4KVE'
    },
    lat: 11.0168445,
    lng: 76.9558321
  },
  {
    city: 'Cuddalore',
    resources: { covidBeds: '1EH9C7FkWud1jjzj-7q7xQwPd4WpoMccVVtWl0oqq98U' },
    lat: 11.7480419,
    lng: 79.7713687
  },
  {
    city: 'Dharmapuri',
    resources: { covidBeds: '1C1FJzyXNVa5-j0Q62mpjJFD1KRCBcqnBH1eOLAXYa70' },
    lat: 12.1210997,
    lng: 78.1582143
  },
  {
    city: 'Dindigul',
    resources: {
      covidBeds: '1RPZhwn_Aw-g7o2pBgfe4r0MJe-1UjpQxGkWjzMsQTHY',
      oxygenSupply: '1TXQJClVgsUZrlM7riWdcdqassbq2eLLyM7_u49pUSjA'
    },
    lat: 10.3623794,
    lng: 77.9694579
  },
  {
    city: 'Erode',
    resources: {
      covidBeds: '16X-7DT_U_XLFYusN9z_tFypRre1suvJ8wkTHeb1YtCQ',
      oxygenSupply: '1XqOcQLJ-4EcH0EoNbSVsJAKcoVsqoocTKE56RSxHQ7E'
    },
    lat: 11.3410364,
    lng: 77.7171642
  },
  {
    city: 'Kallakurichi',
    resources: { covidBeds: '18eJ4qiH1B906qdzaP58SIziTClCB0x_FpZxcl9oYz14' },
    lat: 11.7383735,
    lng: 78.9638899
  },
  {
    city: 'Kancheepuram',
    resources: {
      covidBeds: '1JFeF1AtpCxRKy6Wb1Mfxq0wCT6M6ULFBvbGwBkMTzjc',
      oxygenSupply: '1rusD1ki3o4ZPiINi5zmz-lTS2DdFSI8toQvzWh1DzjM'
    },
    lat: 12.818456,
    lng: 79.6946586
  },
  {
    city: 'Kanyakumari',
    resources: {
      covidBeds: '1mmnz6UDlqkm3EqU6UdW7nqOAmyeZcSH14fftnO1rqh8',
      oxygenSupply: '1Wph7kltlEew06IB8zebiktIfj3koFAkjDT5enidmLVM'
    },
    lat: 8.0883064,
    lng: 77.5384507
  },
  {
    city: 'Karur',
    resources: { covidBeds: '1yeSYSu9FJWQtxh5sfCBGfGJD62BzBmg4EgAefsaYbbg' },
    lat: 10.9600778,
    lng: 78.07660360000001
  },
  {
    city: 'Krishnagiri',
    resources: {
      covidBeds: '1bkBE2k5zB7FlhsFHtpdzNKF7EKON_vKP7mjdCAZLt9Y',
      oxygenSupply: '14BHWZyxxbYpqHPtKusLtP0y4Y-EOjKuKvX9fFRckoeY'
    },
    lat: 12.5265661,
    lng: 78.2149575
  },
  {
    city: 'Madurai',
    resources: {
      covidBeds: '1Dr7DYS6GKe5avhHcwhHMB6Z9DTFSj20eEgLvfBlQJSo',
      oxygenSupply: '1vWJ8l9Hso6PD9cjs0a6rR49j-7H5nKKCmkIB7aMMEb0'
    },
    lat: 9.9252007,
    lng: 78.1197754
  },
  {
    city: 'Nagapattinam',
    resources: { covidBeds: '13O7rh6C3XCR3lSkujGFh6iEdMu0sxnb14sqZEXfrxPw' },
    lat: 10.7672313,
    lng: 79.8448512
  },
  {
    city: 'Namakkal',
    resources: {
      covidBeds: '1RP_dDLl4a49_hq-Mp39WWiZiNXKOq5wUBkq1iw7hSFY',
      oxygenSupply: '1FilCvqv6Dh4tXxNKRuRUmjvR_bg7w17m8TQJayCRk8s'
    },
    lat: 11.2188958,
    lng: 78.1673575
  },
  {
    city: 'Nilgiris',
    resources: { covidBeds: '1CUH-nT9LjD3aIt502segS9CPdz60oq9JdRy4ZvuXETc' },
    lat: 11.4916043,
    lng: 76.7336521
  },
  {
    city: 'Preambalur',
    resources: { covidBeds: '1nWkVDXRxuWI6dAYLtDo4eNvSW8FggvNuHCoL27B8qCw' },
    lat: 11.2342104,
    lng: 78.8806852
  },
  {
    city: 'Pudukottai',
    resources: { covidBeds: '1od8JhGoSmn0r66PQCxV4j9oJoJ-RJNbCginMBtnV_60' },
    lat: 10.3832867,
    lng: 78.800129
  },
  {
    city: 'Ramanathapuram',
    resources: { covidBeds: '1szYIqEjXO9DPZXH6z8TbIrlKjLoPT0V5MwHiZkXb0ag' },
    lat: 9.3639356,
    lng: 78.8394819
  },
  {
    city: 'Ranipet',
    resources: { covidBeds: '1c9xo2XBRXjr6tU4AlZWh2VzSGPPJsOKTZC_vsX5tJgM' },
    lat: 12.9487403,
    lng: 79.318978
  },
  {
    city: 'Salem',
    resources: {
      covidBeds: '1GlNu4jyK_nkI2KwEBe9Wc6qgW1bCxbrH9v8cUJDJWrs',
      oxygenSupply: '13L6bhcNQFNlkTrQFV79xyEf11FAQSKSb2WMCCLJ5blM'
    },
    lat: 11.6538948,
    lng: 78.0682571
  },
  {
    city: 'Sivagangai',
    resources: { covidBeds: '1wGN_t4TW70RNvNhg259Tb8Cc5bli73vrMIDuGH8zFhM' },
    lat: 9.8432999,
    lng: 78.48087749999999
  },
  {
    city: 'Tenkasi',
    resources: { covidBeds: '1Rjn8tzK_DuKzbGE3FRHAK9klpbsk7nasfDi8hWYG_Xo' },
    lat: 8.959351999999999,
    lng: 77.316109
  },
  {
    city: 'Thanjavur',
    resources: { covidBeds: '12wJXWn2ropifcuAEj6KZxyNkkJzZBYjjG7r-5WVjgT4' },
    lat: 10.7869994,
    lng: 79.13782739999999
  },
  {
    city: 'Theni',
    resources: {
      covidBeds: '1xgvC0LSHJ4gedshTMEjlqOqM7OIlRFmlgD5z_CdL8jQ',
      oxygenSupply: '1R1JBktkU2Uae7walzJ-chGwfv8icl4-yupW2OmoxmE4'
    },
    lat: 10.0103658,
    lng: 77.4768115
  },
  {
    city: 'Thirupathur',
    resources: { covidBeds: '1x8_36yw3M51tdYHUAj-BaQfZCqFSgkS2A666XPxO3Jo' },
    lat: 12.4754424,
    lng: 78.58545529999999
  },
  {
    city: 'Thiruvarur',
    resources: { covidBeds: '1GUsyRy-wWrQ0VWRUe_V2ZHhKIz9z_K3Q6ZkPtlICpSk' },
    lat: 10.7661312,
    lng: 79.6343691
  },
  {
    city: 'Thoothukudi',
    resources: {
      covidBeds: '1CliAXv8Ws8tmu1yGzFo5TgOYVdUrPW9Et7KU-fvm-3k',
      oxygenSupply: '1zkcR2R93gYNayeSdkxvwl9kSeqDhQpdC3dJTfSOgmyM'
    },
    lat: 8.764166099999999,
    lng: 78.1348361
  },
  {
    city: 'Thirunelveli',
    resources: { covidBeds: '124dWtrpcunekPx-AGyoNDD6cgFKEYFc63BYXCadl4Kw' },
    lat: 8.713912600000002,
    lng: 77.7566523
  },
  {
    city: 'Tirupur',
    resources: { covidBeds: '1T5fUP5nhCctC2bpNWeO4Yg2UYrewbTxrGh58c2zJePU' },
    lat: 11.1085242,
    lng: 77.3410656
  },
  {
    city: 'Thiruvallur',
    resources: { covidBeds: '1v0Qiew7dauoum8E_3p6GdL13TL0HmCT_Ruz5_7EdMGQ' },
    lat: 13.1230558,
    lng: 79.9119526
  },
  {
    city: 'Thiruvannamalai',
    resources: { covidBeds: '1L9Mll_3sD709TOsYXRr8sxZgbAqqKNtjtWLkdqqR9JE' },
    lat: 12.2252841,
    lng: 79.07469569999999
  },
  {
    city: 'Vellore',
    resources: { covidBeds: '1NFfB_ApMAmU9t6LHV78Ohh4wnda4kSlLgMA394koB0c' },
    lat: 12.9165167,
    lng: 79.13249859999999
  },
  {
    city: 'Villupuram',
    resources: { covidBeds: '1S-SB3KLbKyyt_XWQDI0qnwIf2kiKrH5PlDe_NgiumJA' },
    lat: 11.9401378,
    lng: 79.4861449
  },
  {
    city: 'Virudhunagar',
    resources: { covidBeds: '1NIECJ0FGqMSJ5yY72gfk-C-F3K8EhnhJGMC0tQs8CZ0' },
    lat: 9.5680116,
    lng: 77.96244349999999
  },
  {
    city: 'Thiruchirappalli',
    resources: {
      covidBeds: '1flK4l2oPJ9zvaPCWW1lXqEK3PrKW7B5EgQJQPil_c-8',
      oxygenSupply: '1FhcJTJ1CZp4L5ZQFkAdVYQ_19ceryWPRee7fM7u4zDQ'
    },
    lat: 10.7904833,
    lng: 78.7046725
  },
  {
    city: 'Pune',
    resources: { covidBeds: '1WSz9VGzdhiuc37ksXMSrwf8aFIZnG9Hhg9uBJsLn4uA' },
    lat: 18.5204303,
    lng: 73.8567437
  },
  {
    city: 'Bangalore',
    resources: {
      covidBeds: '1H05y2PXFNrvgHnDleC8We453oKFZbsI7I8thPtSMt3M',
      oxygenSupply: '1Nuj9ITW1gKarTHJKP7MBwjuWxtjF8akd8Plnk0ywc9s'
    },
    lat: 12.9715987,
    lng: 77.5945627
  },
  {
    city: 'Mumbai',
    resources: { covidBeds: '17OeX5qBHXN3c3ICzp-FIgzrw6iWpQjp-7LS2m1GgTp8' },
    lat: 19.0759837,
    lng: 72.8776559
  },
  {
    city: 'Delhi',
    resources: {
      covidBeds: '1vLo6mt3md3i7D_emnYNIgtAqFRAmq7guoj5a1qyKxq8',
      oxygenSupply: '1dnrCvIN9Nok119MTP0KBB0ZDhwjB_APa-in2bngkd7g'
    },
    lat: 28.7040592,
    lng: 77.10249019999999
  },
  {
    city: 'Hyderabad',
    resources: { covidBeds: '17flt2bxwPsIf2y_MpJDLA5ATt0rW8Xm_hbA1sq716qo' },
    lat: 17.385044,
    lng: 78.486671
  },
  {
    city: 'Warangal Urban',
    resources: { covidBeds: '1jDqsZDTy70368kl7YOEyPGa37xqpPJhhDGLohRjInxI' },
    lat: 17.9744395,
    lng: 79.9192702
  },
  {
    city: 'Warangal Rural',
    resources: { covidBeds: '1WMijTIV6QGmKDVWhTB11ibBnG8n6M5nM5AbAXoWjP_0' },
    lat: 17.997682,
    lng: 79.55319930000002
  },
  {
    city: 'Karimnagar',
    resources: { covidBeds: '1T-a4MJqesqwnV37MkfHXIO5X6QpVKUyL4l7fBdcbnqg' },
    lat: 18.4385553,
    lng: 79.1288412
  },
  {
    city: 'Adilabad',
    resources: { covidBeds: '14lPZWg4vZ258cnMRtSXeJ0muhnEEG6cFMj7EHGGbJM4' },
    lat: 19.6640624,
    lng: 78.5320107
  },
  {
    city: 'Jangaon',
    resources: { covidBeds: '1HzO0hFfNw5I38pExN_awTYEuLJVxl8O-atxt1F_OTCM' },
    lat: 17.7226509,
    lng: 79.1517868
  },
  {
    city: 'Gandhinagar',
    resources: { covidBeds: '1MY97vkgkhq_nH0Smm4yUiP788WkQigVElmBcjnoaPhA' },
    lat: 23.2156354,
    lng: 72.63694149999999
  },
  {
    city: 'Kashmir',
    resources: { oxygenSupply: '1WXcOiDBAN4HqwSDCSA5AB0Q4NQncSL6CGPgB-8OpBvU' },
    lat: 33.277839,
    lng: 75.34121789999999
  }
]


// module.exports.citiesWithResources = citiesWithResources;