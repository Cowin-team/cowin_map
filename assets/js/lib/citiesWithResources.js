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
    city: 'Gandhinagar',
    resources: { covidBeds: '1MY97vkgkhq_nH0Smm4yUiP788WkQigVElmBcjnoaPhA',
                 oxygenSupply:'1kKBW9v4KbEPm5QicjVCnyC-yulBFf6OK3-Y36g9P62I'
               },
    lat: 23.2156354,
    lng: 72.63694149999999
  },
  {
    city: 'Kashmir',
    resources: { oxygenSupply: '1WXcOiDBAN4HqwSDCSA5AB0Q4NQncSL6CGPgB-8OpBvU' },
    lat: 33.277839,
    lng: 75.34121789999999
  },
   {
    city: 'Dehradun',
    resources: { oxygenSupply: '1oObB_y8FPnr8qly29mlPNffLVuwfrudjQfQ2OyBzo2U' },
    lat: 30.31498113274747,
    lng: 78.03051469656198
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
    resources: { covidBeds: '1pmudISuslWVLwfQTCyfzGvF8vmcawA89ycV7Vyo5f7k'},
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
    resources: { covidBeds: '1tUh5th1cjAYlfhCp6J_tiRHZVVw2NwsJRPBzu6di-fQ'},
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
    resources: { oxygenSupply: '1QFsQ-lR0Ui3TuuM6a6UXwhEXhprUynJK5R4qqzAszfM'},
    lat: 22.498872729543695,  
    lng: 88.31114803067148
  }
]


// module.exports.citiesWithResources = citiesWithResources;
