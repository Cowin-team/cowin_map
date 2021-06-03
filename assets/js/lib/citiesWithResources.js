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
    city: 'Nashik',
    resources: { covidBeds: '1wsxfIklfjmU-P-eiB9UTGlWN-MSn2lwtSAvJqongrbo' },
    lat: 19.981228640979207, 
    lng: 73.78424433073263
  },
  {
    city: 'Bangalore',
    resources: {
      covidBeds: '1H05y2PXFNrvgHnDleC8We453oKFZbsI7I8thPtSMt3M',
      oxygenSupply: '1Nuj9ITW1gKarTHJKP7MBwjuWxtjF8akd8Plnk0ywc9s',
      // triage: '1tTSs7_4BXpnrmfUFhA2_kdhSiiLUrpadlD7Eh1eCh2U'
    },
    lat: 12.9715987,
    lng: 77.5945627
  },
  {
    city: 'Mumbai',
    resources: { covidBeds: '17OeX5qBHXN3c3ICzp-FIgzrw6iWpQjp-7LS2m1GgTp8', 
               oxygenSupply: '1Ihof7PzjiDTdLlEjy8UdjUYF0aAwYVW8Brgx61XVnW0'},
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
    resources: { covidBeds: '17flt2bxwPsIf2y_MpJDLA5ATt0rW8Xm_hbA1sq716qo',
                 oxygenSupply: '1lJrldsvrCpmU9epXWwefHwUvj_gR97uCix42uD3GRSo'},
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
    city: 'Nizamabad',
    resources: { covidBeds: '10giapVMbSggVjLrWIeyCD4_TJkAI1LWLiI3-Zm1Q8Zc' },
    lat: 18.677616127769276, 
    lng: 78.0893157586052
  },
  {
    city: 'Rangareddy',
    resources: { covidBeds: '1-W52kf8VWSCLLLYu_v3OEhs6IwKp5sn8BK92tH7bx9g' },
    lat: 17.32264062145411, 
    lng:  77.94868009355865
  },
  {
    city: 'Sangareddy',
    resources: { covidBeds: '1Msajjnq6b1ePC01TyonnENBOHgInEdp9SsqsOOoZN00' },
    lat: 17.615758338094533,
    lng:   78.076189740768 
  },
  {
    city: 'Rajanna',
    resources: { covidBeds: '1sE-rWDKTXi3I_6ORnH9OwQ126iLRI6U4VXPkyo2kcRw' },
    lat: 18.390610294332063, 
    lng:   78.80740917321216 
  },
  {
    city: 'Peddapalli',
    resources: { covidBeds: '1xYftqk3LN4dyoZcpRIYJTzRqFalYcK5X1_dLOsa6ZH4' },
    lat: 18.61460077564138,  
    lng:   79.37673986263441 
  },
  {
    city: 'Nirmal',
    resources: { covidBeds: '1LRWY08kLaB9h5u5iPB-PZjUhMLTMNXZAINu2DzjrKtY' },
    lat: 19.08617715833125,   
    lng:   78.34365590638431 
  },
   {
    city: 'Nalgonda',
    resources: { covidBeds: '17LroXGuIIG9_XeHOMsmF4sGk-pShEYWjdMbXma2J4yQ' },
    lat: 17.06318066084265,    
    lng:   79.25185195580453 
  },
   {
    city: 'Medchal',
    resources: { covidBeds: '1rxG6qswQeyoTwrM_LY_GrZ-JUsf279wacI03yUDv-8o' },
    lat: 17.637122641936063,     
    lng:   78.47697390074633 
  },
  {
    city: 'Jagtial',
    resources: { covidBeds: '17gGuxkQ8FcFLMK338jh3ECKHjI-_6GaOXSaadKk1BQo' },
    lat: 18.794840656951486,     
    lng:   78.91103964342503  
  },
   {
    city: 'Medak',
    resources: { covidBeds: '1lk05b-W_Kw24MImg0XaEHvux4eZnBHuDLCxR8_mPsvo' },
    lat: 18.048525336522612,    
    lng:   78.25977562819628   
  },
  {
    city: 'Mancherial',
    resources: { covidBeds: '13j1bDF8sUOFrPvcogDZI3ZKb7ajx8gi6NkdQ14IrvVQ' },
    lat: 18.882299365285437,     
    lng:   79.469024631476   
  },
  {
    city: 'Mahabubnagar',
    resources: { covidBeds: '15ncCGoD506AWyxV7RRF4k7yO3UF3V5RcKe8RQZ-thoM' },
    lat: 16.75772814550086,      
    lng:   78.00647007614526   
  },
  {
    city: 'Mahabubabad',
    resources: { covidBeds: '12zMdBVUDuIn8yiCJ0Vhif3e2dtjMmnvmK3LECjjf1Lc' },
    lat: 17.60290938177371,       
    lng:   79.99392796441296   
  },
  {
    city: 'Komaram Bheem',
    resources: { covidBeds: '1TotjGurevBF7pLoxoVR0ur2lmL4SoA2H15IQOa5Gz3A' },
    lat:  19.3654858,       
    lng:   79.282869
  },
  {
    city: 'Kamareddy',
    resources: { covidBeds: '1JqdofLG0lGT0QYBWU6yJjbgyZbgrYvRoq__gsiAAxKw' },
    lat: 18.323504306146408,       
    lng: 78.33185428432418 
  },
  {
    city: 'Jogulamba',
    resources: { covidBeds: '1xBh1znYku0lNfHWfg4W3XOj_id1NB_5IJ4P5J1O1rGI' },
    lat: 16.2321306,       
    lng: 77.7869784 
  },
  {
    city: 'Jayashankar',
    resources: { covidBeds: '1xrCq07fDhL9DbNS55ZT2gCVwSFXx45jrjs51IJ2dIyE' },
    lat: 18.4277451,     
    lng:  79.8265872   
  },
    {
    city: 'Yadadri',
    resources: { covidBeds: '1KL5sgbia3ytrkxUBCFDOfsH4f7zH3x1aUbMN1IRgxww' },
    lat: 17.492237098482654,        
    lng: 78.94364633198467 
  },
    {
    city: 'Narayanpet',
    resources: { covidBeds: '1icAhY03MP_BKyntdhbhZMzRU5RpqHCut8aBueaW3iBE' },
    lat: 16.745012825747782,         
    lng: 77.49189375207665 
  },
   {
    city: 'Mulugu',
    resources: { covidBeds: '13MSE3yt2cU5ji5GRdS0wqT_umQJdjtxaQ19RDBQfvlM' },
    lat: 18.195169123553832,          
    lng: 79.93553790758035 
  },
  {
    city: 'Khammam',
    resources: { covidBeds: '1sWZF0OUSQ3sWWsUoJyMfRQi7S2e1SMCQmQ6GTHrE4Js' },
    lat: 17.261139213244824,           
    lng: 80.14030652466634 
  },
    {
    city: 'Suryapet',
    resources: { covidBeds: '1WKKz9nvG0NEcpydM-h6rde-Bux4GKhbRdQg10NNQLc0' },
    lat: 17.140581435436633,            
    lng: 79.60684764628763 
  },
   {
    city: 'Wanaparthy',
    resources: { covidBeds: '15OBxBnGXqpLGjCfEPYWdgiBRDX2reWjzmFQn6Hhhyro' },
    lat: 16.35876715477846,             
    lng: 78.05580135924764 
  },
  {
    city: 'Nagarkurnool',
    resources: { covidBeds: '1jmiqBr-svm-KiVFMyIBioyWzVKqz0YitsPV1Fm4bHqE' },
    lat: 16.494895280631695,             
    lng:  78.30252170628077
  },
  {
    city: 'Vikarabad',
    resources: { covidBeds: '1MAnap2oPMjyQpBaV5Rsm1zUFT5rFpxT2yPE_n1Vx5e8' },
    lat: 17.34327368308828,             
    lng:  77.87622604357428 
  },
  {
    city: 'Gandhinagar',
    resources: { covidBeds: '1MY97vkgkhq_nH0Smm4yUiP788WkQigVElmBcjnoaPhA',
                 oxygenSupply:'1kKBW9v4KbEPm5QicjVCnyC-yulBFf6OK3-Y36g9P62I'
               },
    lat: 23.2156354,
    lng: 72.63694149999999
  },
  {
    city: 'Ahmedabad',
    resources: { covidBeds: '1oJHvEWzFuSs-LawiNUkGJM_9CdZVUzdAH65Upq03v9I'},
    lat: 23.064227237060607, 
    lng: 72.53300953671666
  },
  {
    city: 'Kashmir',
    resources: { oxygenSupply: '1WXcOiDBAN4HqwSDCSA5AB0Q4NQncSL6CGPgB-8OpBvU' },
    lat: 33.277839,
    lng: 75.34121789999999
  },
  
  {
    city: 'Jaipur',
    resources: { covidBeds: '1lwJadk2va0ImwhfHY0zDmsDgqmI2ARMqrvpQgENKQf8'},
    lat: 26.902594566452265, 
    lng: 75.7627388270979
  },
  {
    city: 'Kota',
    resources: { covidBeds: '1mrvwUaTXHSKDz2v87yajt9BRPwshdPro1UYZ1WWeIhk'},
    lat: 25.20010485377562, 
    lng: 75.87818898274959
  },
  {
    city: 'Jodhpur',
    resources: { covidBeds: '1TLmtaDUM5EEnEyqpsURapCYVPBHa8633l4XL8vRrnE0'},
    lat: 26.25248490994748,  
    lng: 73.02195815724737
  },
  {
    city: 'Ajmer',
    resources: { covidBeds: '1zldQ_mPvjd6PmehUGgErOD4N455mh_uyTsNgitJWMCM'},
    lat: 26.465981536218713, 
    lng: 74.6358828892385
  },
   {
    city: 'Alwar',
    resources: { covidBeds: '1aVOWA7nPhtICa6WvGUP_nIjt_4mFBhqO1eFUgrGobQw'},
    lat: 27.5605725838108, 
    lng: 76.6261192069617
  },
   {
    city: 'Bharatpur',
    resources: { covidBeds: '1KLjNd4zzrtRkepJ6rhyjwTwk5n8HVpN0Y2OucI52sa8'},
    lat: 27.220761376296327,
    lng:  77.50105453056
  },
  {
    city: 'Banswara',
    resources: { covidBeds: '1_J4CxkJLCncltDTP0d22W220gqzAOq36GccGkkZQr18'},
    lat: 23.54636214922438, 
    lng: 74.44424796389497
  },
  {
    city: 'Baran',
    resources: { covidBeds: '1ZS6aG3anCC8_MokgiO0sgZ0uVQJqQVVTd5UuymSW-kM'},
    lat: 25.107271775740173, 
    lng: 76.49037046469367
  },
  {
    city: 'Barmer',
    resources: { covidBeds: '1seYSjORleK0tXJcu-AxrO4OF2lJ_WuHITSno8elBUy0'},
    lat: 25.7651769700699, 
    lng: 71.40071455923368
  },
  {
    city: 'Bhilwara',
    resources: { covidBeds: '1wmhbElpgubWAraqokoOjPP154zqNBz5y4t48pLvXoiQ'},
    lat: 25.352741298559966, 
    lng: 74.62864578749179
  },
  {
    city: 'Bikaner',
    resources: { covidBeds: '1TRBhE-ObupteDzGDf5UH6qdniA1ypCexcWm8S74JTto'},
    lat: 28.025178576424473, 
    lng: 73.27507781629895
  },
  {
    city: 'Bundi',
    resources: { covidBeds: '1eFGCZYouUQRIDkQA-A7hVQ7vLISqhAknt7Hb05a5vKM'},
    lat: 25.43590705745427,  
    lng: 75.65316429463746
  },
  {
    city: 'Chittorgarh',
    resources: { covidBeds: '1N9L6OvHcC5mh866jSvj-njuKIMLXrz9mSlA3aHEIdz8'},
    lat: 24.907168296149898,   
    lng: 74.6317217124535
  },
   {
    city: 'Dausa',
    resources: { covidBeds: '1MYYcg3N3Ub3bgtkqWcpLLK-stGjO25wVax5Scupc1kY'},
    lat: 26.89154801508786,   
    lng: 76.31506678307296 
  },
  {
    city: 'Churu',
    resources: { covidBeds: '1thYUMJ1c1e2KhY8twX551Tu0JHuQ5zunMJGMt4ktT0U'},
    lat: 28.296970615881026, 
    lng: 74.9643085359672    
  },
    {
    city: 'Dholpur',
    resources: { covidBeds: '1WM8r6uue5GoC7jsAnJA6nByk3y6NBwZGt4Ij5i7SMDw'},
    lat: 26.693220211048583, 
    lng: 77.87371617559843     
  },
  {
    city: 'Dungarpur',
    resources: { covidBeds: '1QC_Qg6ZD2R8at-bRunS0CeqAvm2r2eIZ1elY9Gq_goM'},
    lat: 23.850896519580857, 
    lng: 73.7160225202444      
  },
  {
    city: 'Ganganagar',
    resources: { covidBeds: '1ptr34byUPDEa0NVs1BaBtRcimn8V4i1nh26slUlxj6U'},
    lat: 25.21763741816557,  
    lng: 74.26213855944553      
  },
  {
    city: 'Jaisalmer',
    resources: { covidBeds: '1tv1K8S0npjBAHFD7PoAjRhSpvuK6S2cSp-iGbGAuAao'},
    lat: 26.899122049776363,   
    lng: 70.88528636249808      
  },
  {
    city: 'Jalore',
    resources: { covidBeds: '12jKZDa2sCVLAcix8ucZZtEMs9BHZfNKQ19z-GY88C9o'},
    lat: 25.332222536273918,   
    lng: 72.61618600048386      
  },
   {
    city: 'Jhalawar',
    resources: { covidBeds: '1mP2EiRpmQQ_p-ko31iyX4S9rs0SXqLAJ_7_t5mNveEM'},
    lat: 24.594903036861812,    
    lng: 76.1548600608567      
  },
  {
    city: 'Hanumangarh',
    resources: { covidBeds: '1HyoH1P6Gon1Lwej8ILprm4XUwm5KBkTvkVPT7B1hTbU'},
    lat: 29.59036043056152,   
    lng: 74.33461175484176      
  },
    {
    city: 'Udaipur',
    resources: { covidBeds: '1cPbRkiW83SGG-IzFAU5Ll_-Le_kh0VtnFVlwDUb22ug'},
    lat: 24.614992995004158,    
    lng: 73.69864665846268      
  },
   {
    city: 'Tonk',
    resources: { covidBeds: '1xbOg38aPy4XamUWLDRmedYJ7HrKTetLQbH2hPSygNz8'},
    lat: 26.162165183880372,     
    lng: 75.79190955641376      
  },
  {
    city: 'Sirohi',
    resources: { covidBeds: '1QpE7cVWQ3xDnyE8nVjJ0tVaZg_5NWPL4A8Rsvl0HyFE'},
    lat: 24.891008871982265,      
    lng: 72.84028318490579      
  },
   {
    city: 'Sikar',
    resources: { covidBeds: '1szc52Uo4N6MTaKWUVsAFEN9C36ie_RjZQB1JOOnpbqk'},
    lat: 27.619733800317327,       
    lng: 75.13465244131241      
  },
   {
    city: 'Sawai Madhopur',
    resources: { covidBeds: '1z6mdHX3O2CHi91WoZxjlwVxFAdXvY3Kaf7r0Xf6OOF0'},
    lat: 26.02916125468007,        
    lng: 76.36339147739544      
  },
   {
    city: 'Rajsamand',
    resources: { covidBeds: '1aJwPOXMRCayfp5J-2I08_YdSQKLzAglVxdm5fRDARlM'},
    lat: 25.067951353559394,         
    lng: 73.8640952787224      
  },
  {
    city: 'Pratapgarh',
    resources: { covidBeds: '18d4h11Z3GNC7FJ44BjHKqcjXduyOL0hw4NXJSHVg8so'},
    lat: 25.914572884199625,          
    lng: 81.97696750094438      
  },
  {
    city: 'Pali',
    resources: { covidBeds: '1hl8Zf2lIyUXlYb2e3Ul5ESHd8_Lqzq_LhEtw6NwBd2E'},
    lat: 25.7788620374593,           
    lng: 73.30861875565509      
  },
  {
    city: 'Nagaur',
    resources: { covidBeds: '10YAqED2kEFxVH67b1i64f5Ms__-wf4YK6L5JoNK1HBM'},
    lat: 27.201628772983423,            
    lng: 73.71859968897607      
  },
  {
    city: 'Karauli',
    resources: { covidBeds: '1h387gjTx5PkMknr3K1uZXGwVsTdmy369sAFoVi_Ud2E'},
    lat: 26.49584100420632,             
    lng: 77.01531880352304      
  },
  {
    city: 'Jhunjhunu',
    resources: { covidBeds: '1xycB99Ne5gKSyYmjBsm0wFyNo4HBfz-JuzVZcHEhVXE'},
    lat: 28.128323160163436,              
    lng: 75.38556744522447      
  },
  {
    city: 'Ambala',
    resources: { covidBeds: '1O4O_cX1K5BZTaaCaK_77bmamoaaVP14pY7zfrI3nMwk'},
    lat: 30.367828313869154,   
    lng: 76.77579547392473      
  },
  {
    city: 'Bhiwani',
    resources: { covidBeds: '1B9FqaO9pNRIM7ZmLgIYaIyFVEmR9VMkWhS441T_DkIY'},
    lat: 28.804907553201005,    
    lng: 76.1295596340145      
  },
  {
    city: 'Charki Dadri',
    resources: { covidBeds: '1PLelJ656jXEVZ7gEaOgSAQRby0eiQX7yB8FkjxcR5gc'},
    lat: 28.597669949064233,    
    lng: 76.26026620800943       
  },
  {
    city: 'Faridabad',
    resources: { covidBeds: '1pmudISuslWVLwfQTCyfzGvF8vmcawA89ycV7Vyo5f7k',
                 oxygenSupply: '1U0h1HZmgADEgYDC20H7gpRMLxsiblTFSCA8vfwiTN7Y'},
    lat: 28.367086022751877,    
    lng: 77.29847286220924        
  },
  {
    city: 'Fatehabad',
    resources: { covidBeds: '1MWoohXWQaApmMSVUanQvTRnircz5TCumU9fDW050m_s'},
    lat: 29.509091139133584,     
    lng: 75.44322868686757        
  },
   {
    city: 'Gurugram',
    resources: { covidBeds: '1udE2L0YhyjBS-KUduZ9VE3jAXa3o9fmWCDb5pDYM01A'},
    lat: 28.415088863933438,      
    lng: 76.96674445322436        
  },
  {
    city: 'Hisar',
    resources: { covidBeds: '1-8qm0CAfwkdVSf_Wjnm9-ZkVNenPIYC1Hqvh5VL8L5s'},
    lat: 29.182253901162124,       
    lng: 75.69442549035034        
  },
  {
    city: 'Jhajjar',
    resources: { covidBeds: '15BFVyVvzWjw5rwg_2q0pskgGOweBA-WWRIWZ-DYb7bA'},
    lat: 28.60706658848837,        
    lng: 76.65605465508307        
  },
    {
    city: 'Jind',
    resources: { covidBeds: '1-h6YVInfD5tiHFU-Wr3mTkbM5h_nYTWicHUfA5tFKiE'},
    lat: 29.309445767992713,          
    lng: 76.29798842028644        
  },
  {
    city: 'Kaithal',
    resources: { covidBeds: '1XMyHqMZtsfU6ncVMAfO-hPLlzQ7xfeFYT5nPRAMY1gE'},
    lat: 29.797444707447085,          
    lng: 76.40235885528072         
  },
   {
    city: 'Karnal',
    resources: { covidBeds: '15HWgPfNsvyjfnRyGEKBFXnHwzGPuyy4PCsW9-fkVgT4'},
    lat: 29.700450925884027,           
    lng: 76.9752136316515         
  },
  {
    city: 'Kurukshetra',
    resources: { covidBeds: '1mXyuecgHauM9arJ0FI07nDJhvTYJm-OrmMC6CoPZc6E'},
    lat: 29.984150284623198,            
    lng: 76.88078577861012         
  },
  {
    city: 'Mahendragarh',
    resources: { covidBeds: '1_gukJs4SAD2O8HkYTec2xr-ebwUDtwamFtl23PRTGA4'},
    lat: 28.274443371154888,             
    lng: 76.13475134653244         
  },
  {
    city: 'Nuh',
    resources: { covidBeds: '1cKMR6QTYwgbsM5yIoVkAdo5fhWSGABd9CPRVTAmF3Cg'},
    lat: 28.106140495415755,              
    lng: 76.99018837157979         
  },
  {
    city: 'Palwal',
    resources: { covidBeds: '1FkH4uOa-3lvdl5uDEd5YNyrqJBFE8VYALKT8iemP5Ls'},
    lat: 28.14844903652926,               
    lng: 77.31767709554381         
  },
  {
    city: 'Panchkula',
    resources: { covidBeds: '1gMUy3ak9trrqofGiOhzc_83StT1_CUcD4zDRS1C3sKQ'},
    lat: 30.699695796522583,                
    lng: 76.84216623047953         
  },
  {
    city: 'Panipat',
    resources: { covidBeds: '1tUh5th1cjAYlfhCp6J_tiRHZVVw2NwsJRPBzu6di-fQ',
                 oxygenSupply: '1U0h1HZmgADEgYDC20H7gpRMLxsiblTFSCA8vfwiTN7Y'},
    lat: 29.418937520794454,                 
    lng: 76.95210411018972         
  },
   {
    city: 'Rewari',
    resources: { covidBeds: '1FOXvxakGj2-BxeVhdrqjP0OGtkd70nkPcKNl0IkQq0Y'},
    lat: 28.19805000972606,                  
    lng: 76.61645606758763         
  },
  {
    city: 'Rohtak',
    resources: { covidBeds: '1hc1Tvw3ItFyXnKEbG13tQF37gBee0qasMUSfJ9Rxkeg'},
    lat: 28.887727903030726,                   
    lng: 76.583032146931         
  },
  {
    city: 'Sirsa',
    resources: { covidBeds: '1th7mY60rsZbItB6fvA19gAELu6Zbt4rYQKiHBo8mt1c'},
    lat: 29.544446955781382,                    
    lng: 75.00191061811728         
  },
  {
    city: 'Sonipat',
    resources: { covidBeds: '1XHBRDJMIiTBa1OsZJ4zpLHKIBxaV-rObnE1BLqgkUhk'},
    lat: 28.957758634313944,                     
    lng: 76.99767865264431         
  },
  {
    city: 'Yamunanagar',
    resources: { covidBeds: '1BiKX3Uqz7QkFWRiZ8AD3hJcPJW3UnD1OmU-9N_osyrI'},
    lat: 30.131280590638248,                      
    lng: 77.26085648245983         
  },
   {
    city: 'Goa',
    resources: { oxygenSupply: '1Mgk8lPONsA4U87QYf-Z-s7hSCE8CLTv6Na0iORzvaBw'},
    lat: 15.25762732333053, 
    lng: 74.00196437794229
  },
   {
    city: 'Kolkata',
    resources: { oxygenSupply: '1QFsQ-lR0Ui3TuuM6a6UXwhEXhprUynJK5R4qqzAszfM',
                 covidBeds: '16HiM4kXfV-BBJ8Ybf89OzC_BVA8uvc8zJZLmd8qqvK8'
               },
    lat: 22.498872729543695,  
    lng: 88.31114803067148
  },
  
   {
    city: 'Purulia',
    resources: { covidBeds: '11P32Kyp5Dy4b0IPTBe7K827nIvlocEmMkJEB-lqmvZs'
               },
    lat: 23.324594778573,   
    lng: 86.35363278742965
  },
   {
    city: 'Coochbehar',
    resources: { covidBeds: '1qpat0IqNI8XYVImLOIxBPb7tn34CAtT6rfDTMDKoM24'
               },
    lat: 26.331966598953134,    
    lng: 89.43023689372866
  },
  
   {
    city: 'Murshidabad',
    resources: { covidBeds: '1nlwETve6cWvRALzHdAZ2RvmOjFhKnq2CcRR1mmG4t-M'
               },
    lat: 24.182850858653158,     
    lng: 88.27205649591993
  },
  
   {
    city: 'Dakshin 24 Pargana',
    resources: { covidBeds: '1RqnmlQS98-fDvUN_bCu9UgOUKvHCVE0VZXYC9yipypU'
               },
    lat: 22.207206080326817,      
    lng: 88.49792643067215
  },
    {
    city: 'Purba Bardhhaman',
    resources: { covidBeds: '1kZoohAQteucfkvv1sYHsr8p3-ejEy66txBBsCLZEbmQ'
               },
    lat: 23.240778091385238,       
    lng: 87.8624725031369
  },
  {
    city: 'Bankura',
    resources: { covidBeds: '1yFKBrstzZy2yp0krG38t6H5un9nmYa4Z7Lsg91UoXGw'
               },
    lat: 23.238309011415428,        
    lng: 87.04622298783468
  },
   {
    city: 'Alipurduar',
    resources: { covidBeds: '16IiBl8dxZlJiVvjlkBYGNYgN4EaeH0dZ70V2KjbzNvw'
               },
    lat: 26.492430263310563,         
    lng: 89.52803451391192
  },
   {
    city: 'Purba Medinipur',
    resources: { covidBeds: '1DBbSwqO53kCZ4tz2uxRdOlnpd8VlcYRZ5UyQaAIeDdY'
               },
    lat: 22.438673165782824,          
    lng: 87.30148304517705
  },
   {
    city: 'Kalimpong',
    resources: { covidBeds: '1Go6Szx5VLPzYmCmX0JT-LdBpHLYUk8AVlvUYm_YAdzA'
               },
    lat: 27.05933151210706,           
    lng: 88.45098131468372
  },
   {
    city: 'Nadia',
    resources: { covidBeds: '1xupTY7mZEQME6cqOLrbxiHge00kCyEfe3FolAZa9UrI'
               },
    lat: 22.706744188827827,            
    lng: 88.75406247035404
  },
   {
    city: 'Howrah',
    resources: { covidBeds: '1jZYD5wtt1w48gbXNX9t6Po5DWBSEoc0EE8PVJtaxYFo'
               },
    lat: 22.547589332152697,            
    lng:  88.16049660744564
  },
  {
    city: 'Dakshin Dinajpur',
    resources: { covidBeds: '1FHyqM-3IcfCtLA6lt1LPPHwd2KI_r0UBaOlwHbpmYK4'
               },
    lat: 25.445203420865735,             
    lng:  88.4454084475202
  },
  {
    city: 'Darjeeling',
    resources: { covidBeds: '1U6bM-YxqQcuMabsoUyU68AwWhBRVMhnEBjuabyifc24'
               },
    lat: 27.033728987370232,              
    lng:  88.2538602893443
  },
   {
    city: 'Pashim Bardhaman',
    resources: { covidBeds: '1eB0Iu3hBwiXL5ehFEwp6CWxGQkqklShEXyoP6mj_dLA'
               },
    lat: 23.253080609572066,               
    lng:  87.86530491599584
  },
  {
    city: 'Malda',
    resources: { covidBeds: '1mgMm1OryNfPv5tfdTtRF8vjZkcx7gRiwQr5u6PeuYAs'
               },
    lat: 25.011420278983817,                
    lng:  88.12805529460931
  },
  {
    city: 'Birbhum',
    resources: { covidBeds: '10k9Wx46Pw2_SPqYmmEaGcryGO0AMN_WhBfp44MyP6Yk'
               },
    lat: 24.359906374636225,                 
    lng:  87.84193741184451
  },
  {
    city: 'Hooghly',
    resources: { covidBeds: '1wDVVmLhPPCN7rVLApjv6V36lIXlwAt0TrzS8MQmNfns'
               },
    lat: 22.895074629544794,                 
    lng:   88.38106410340144
  },
    {
    city: 'Jalpaiguri',
    resources: { covidBeds: '1ns7QZl63HMnK_gKwiJIlkC0TFHVIE5TgQLr1fEkSyy4'
               },
    lat: 26.542201339663627,                  
    lng:   88.67683405671835
  },
    {
    city: 'Jhargram',
    resources: { covidBeds: '1_8UiGXdKDgKcLv8aflkHKAh63pdbR3hqBbzJvYV916c'
               },
    lat: 22.462928733458252,                  
    lng:    86.98915535160222
  },
   {
    city: 'Uttar Dinajpur',
    resources: { covidBeds: '1mMhK3dmg5-hX8R1qknMka-TIPbTEJys7pZTu4sRoxgA'
               },
    lat: 25.96991787908612,                   
    lng:    87.95998447569255
  },
    {
    city: 'Uttar 24 Pargana',
    resources: { covidBeds: '1OoMCrpo2DdZ9fTTxmi3eM1DS5fU7rbedQ2rYcpEPjyw'
               },
    lat: 22.793283982945475,                   
    lng:    88.74028246925985
  },
 
  {
    city: 'Paschim Medinipur',
    resources: { covidBeds: '1h30e3JTMr1sp4y9xsIsgp-0DqWFYgMuvJMZsFQPq-Mc'
               },
    lat: 22.45695305658366,                    
    lng:    87.09014019916918
  },
    {
    city: 'Krishna',
    resources: { covidBeds: '1IOChcK9xY3-hvPHHQaHGeh5ER3prAKTOIriXlhCkbyY'},
    lat: 16.396893086921445,                       
    lng: 80.8685699774087         
  },
  {
    city: 'East godavari',
    resources: { covidBeds: '1lcoIeFALDmznWomaIkKOeuD_gO3WvP5H-gVlKOrm_Zs'},
    lat: 17.125223747759264,                        
    lng: 81.90772474787013         
  },
  {
    city: 'Spsr nellore',
    resources: { covidBeds: '1ma3yzgcD2tns16xqO6okvwIFMt7W0dObufyMW3lSw_M'},
    lat: 14.23517037461913,                         
    lng: 79.68228736682772         
  },
  {
    city: 'Ysr',
    resources: { covidBeds: '1s4k_aX_NcQtyHUKN5DCTvoJ5qPMJ30W8XCnGIp1Ic7E'},
    lat: 14.432198126256667,                          
    lng: 78.51249877296         
  },
   {
    city: 'Guntur',
    resources: { covidBeds: '1IsJ90naQn8g_YnS7ERYykwxfTr7PbjBKSmiCBAvj68Y'},
    lat: 16.321590803399225,                           
    lng: 80.41494879644107         
  },
  {
    city: 'Kurnool',
    resources: { covidBeds: '1EgWkX_sh20yGsT_4ABc2W9gpKdv8unarhGv5sdAe-MI'},
    lat: 15.803006924781908,                            
    lng: 78.04143273212938         
  },
  {
    city: 'Vizianagaram',
    resources: { covidBeds: '1qwvj-oEmW5raPp8hNfL1uh2o_nAaauEfpJJOv9sAvEk'},
    lat: 18.096566522748972,                             
    lng: 83.39746809380658         
  },
  {
    city: 'West godavari',
    resources: { covidBeds: '1DKOVGpghmaURYzl_JQ6ewervnPeg7zrIddQfDzaZP8Q'},
    lat: 16.83649704014346,                              
    lng: 81.33163667918814         
  },
  {
    city: 'Prakasam',
    resources: { covidBeds: '1an_7IlggwOto64pzFJ3ujdYM_8NZfKzum612nZMq1RE'},
    lat: 15.591280928217449,                               
    lng: 79.0787944572315         
  },
  {
    city: 'Srikakulam',
    resources: { covidBeds: '1qSqrYNB9rDIZaDd1-ks0qFLU61xMf011y_idFhBosJY'},
    lat: 16.19741545887158,                                
    lng: 80.84904322154091         
  },
  {
    city: 'Anantapur',
    resources: { covidBeds: '1bF9xH65LuMkpg6qo4Q_LDgm7zzSoKAfI0EM0du161Gs'},
    lat: 14.653000225697005,                                 
    lng: 77.5960942662483         
  },
   {
    city: 'Visakhapatanam',
    resources: { covidBeds: '16auqyaphO5xeF-j8EXo5nU9A4vNdebK0EQZPByLNJ_I'},
    lat: 17.740584495623455,                                  
    lng: 83.22825243667585         
  },
   {
    city: 'Chittoor',
    resources: { covidBeds: '1GL6dmljtpn_tmn_ZxjRgPZJjMQ-5f6jGiTHGh8FVEUc'},
    lat: 13.20825895747156,                                   
    lng: 79.09000591613848         
  },
  {
    city: 'Dispur',
    resources: { oxygenSupply: '1sx5gscjpnvdAnVF-AepnygZFHSnIoIMnJvxcnGsiYfE'},
    lat: 26.14295020537283,                                    
    lng: 91.78902868412459         
  },
  
  {
    city: 'Cochin',
    resources: { oxygenSupply: '1SFdwBriuyLxu8gocSQC702El-ZqK7tgwGb7JEkGXBew'},
    lat: 9.96408348755382,                                     
    lng: 76.31396914190627         
  },
   {
    city: 'Almora',
    resources: { covidBeds: '1wjVw9SfVMtDd3GHWDwvuZ81nOPcTIZwu0S2O2RYq_gs'},
    lat: 29.59493745518106,                                      
    lng: 79.646597058318         
  },
  
   {
    city: 'Haridwar',
    resources: { covidBeds: '1ODaQi5O0TpoA-T5pDG3YcXD6Hyh5E5ZD3gnP2Hkr8yc'},
    lat: 29.941935795823774,                                       
    lng: 78.0961843255898         
  },
  {
    city: 'Dehradun',
    resources: { covidBeds: '1HK8GD7rDcjbyTuyeV-iUfgJ5iPo21jvP3RK4piO5ZL4',
                 oxygenSupply: '1oObB_y8FPnr8qly29mlPNffLVuwfrudjQfQ2OyBzo2U'
               },
    lat: 30.320978488338188,                                        
    lng: 77.98263034786419         
  },
  {
    city: 'Nainital',
    resources: { covidBeds: '1Ig5af3dwVFgBordIAuXafXy5a6Xc66pYU5xMr4cRGXA'},
    lat: 29.394266013474155,                                         
    lng: 79.45574279620949         
  },
  {
    city: 'Udham Singh Nagar',
    resources: { covidBeds: '1HOaJtCR7PR4RoE2yPcrci5-0-nXGj-rAhnF3FWPsgCw'},
    lat: 29.060190723560403,                                          
    lng: 79.30636231983026         
  },
  {
    city: 'Champawat',
    resources: { covidBeds: '1T6k_euIfTEIJur3yRqEuUBF7pBMw8EGRo5iwN2NMgyg'},
    lat: 29.33813838330643,                                           
    lng: 80.09182535237791         
  },
  {
    city: 'Tehri Garhwal',
    resources: { covidBeds: '1mWtIpox1-lQ2MzeVcMKkQ-tF6OePTDxYtcJjABLOAUw'},
    lat: 30.387388969351537,                                            
    lng: 78.46950765565313         
  },
  {
    city: 'Pauri Garhwal',
    resources: { covidBeds: '1tHSBjM9GngUCIXfUyWcvbNucAAIJ80TLYBFWIPgvlcQ'},
    lat: 30.387388969351537,                                            
    lng: 78.46950765565313         
  },
  {
    city: 'Rudraprayag',
    resources: { covidBeds: '1lJRfL1gBTGfgTWC4ulYLglRsrSH6Mv15bq9_e6zEQZQ'},
    lat: 30.28372353338845,                                             
    lng: 78.97896412594955         
  },
  {
    city: 'Chamoli',
    resources: { covidBeds: '1d1zha73Fl0cWDeHeA1Db-7KCq4cnPkGb020BktLqtFE'},
    lat: 30.12437969988813,                                              
    lng: 78.65473334867922         
  },
  {
    city: 'Bageshwar',
    resources: { covidBeds: '1dd2R1Npuwnk2d6Wyzv2NepTEWEbrxxhv93KBxH9fpYY'},
    lat: 29.840209703154397,                                               
    lng: 79.76605295477198         
  },
  {
    city: 'Pithoragarh',
    resources: { covidBeds: '1krw8alfH5muBzqCg5qu1arnlOQKHnFlWtMo7RwNURMw'},
    lat: 29.587872393824142,                                                
    lng: 80.2210306792313         
  },
  {
    city: 'Uttarakashi',
    resources: { covidBeds: '1j6nHPdZw4uqsaZ4zXv8l72cKQtW1DktzEEO1isG9Llo'},
    lat: 30.726876135168116,                                                
    lng: 78.43085996829741         
  },
  {
    city: 'Alappuzha',
    resources: { covidBeds: '1EviRgBbnupcLziourVke5U5CG72LzOnDRigmE1oM2-M'},
    lat: 9.53082639956268,                                                 
    lng: 76.31738393090492         
  },
  {
    city: 'Ernakulam',
    resources: { covidBeds: '1Bk397i6m-tLjIcIMLRS5RKnBA1QQvNNiQaHEGoO7dtI'},
    lat: 9.968162191,                                                 
    lng: 76.30657506         
  },
  {
    city: 'Kottayam',
    resources: { covidBeds: '1j2DY7QXMnDpnCPnvQHfYhCiokUdxPEMSStMM9IXnRgA'},
    lat: 9.601480325777741,	                                                 
    lng: 76.51956263         
  },
  {
    city: 'Kannur',
    resources: { covidBeds: '11SpU5FqbW7zmzxVWHskWI4sIQ8NXQIocM4f5sVE1Obw'},
    lat: 11.87567368,	                                                 
    lng: 75.36428388         
  },
  {
    city: 'Kozhikode',
    resources: { covidBeds: '1xMfJOPFnDSjDvsMU31c2YNAXf8JJrDeo8PGeJkHz1kg'},
    lat: 11.27838585,	                                                 
    lng: 75.81630544         
  },
  {
    city: 'Kollam',
    resources: { covidBeds: '1Ey5F2Y_pbzemXMMa56ydBB5Sb63ko1z0VtZArABCYxg'},
    lat: 8.912879376,	                                                 
    lng: 76.55232925         
  },
  {
    city: 'Thrissur',
    resources: { covidBeds: '1yd6ubGZrFiOgWUNGKNYh1RNM75EsTH8tNl_HCHrnXyg'},
    lat: 10.52286255,	                                                 
    lng: 76.18050635        
  },
  {
    city: 'Thiruvananthapuram',
    resources: { covidBeds: '1B39vsjzGN4B-esgcGrAoGWoPkQWvEhhQff_lCh2tMBI'},
    lat: 8.529266567,	                                                 
    lng: 76.9142086        
  },
  {
    city: 'Pathannamthitta',
    resources: { covidBeds: '1MwggfGdXhcKF8rXRS9CTum90IDmRL8zl5mTG5fSQ62A'},
    lat: 9.261176645,	                                                 
    lng: 76.75179715        
  },
  {
    city: 'Kasaragod',
    resources: { covidBeds: '13ru-ew19JBXSh77rXA2aGR_atzd_iLsWKl3dZfd-TlE'},
    lat: 12.50806571,	                                                 
    lng: 74.97945745        
  }

]

// module.exports.citiesWithResources = citiesWithResources;
