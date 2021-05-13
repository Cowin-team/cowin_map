function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
    cowinMap.plotAllCowinMapMarkers();
  };

  let ariyalurCity = new City(
    "Ariyalur",
    {
      covidBeds: "12Dmi6ISJQUDIkhbRZ_py4n_IQHJRN1pnuBEOA7tv5ko"
    },
    afterCityDataFetchCallback
  );

  let chengalpattuCity = new City(
    "Chengalpattu",
    {
      covidBeds: "1OlpEEumoFhNDgnFxe6WIe78A8SlhSYHVQorVbOK1Uvo"
    },
    afterCityDataFetchCallback
  );

  let chennaiCity = new City(
    "Chennai",
    {
      covidBeds: "1YV3DWGxsvlTp0-vaw8f09AajQ5cl3MovFvWVVDtkbOc",
      oxygenSupply: "1p_QIV3kvXZX8C0jB4RIVMsU87YPVm3EJT3-qsJo80b8"
    },
    afterCityDataFetchCallback
  );

  let coimbatorCity = new City(
    "coimbatore",
    {
      covidBeds: "1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw",
      oxygenSupply: "1Ry3y1hx1iHeuF17YmWtzfaDQdhx5zRr6lSLrzBW_TU0",
      meals: "13KNh-6geHXQlr4yBlEo3pSqeU5Q_rGQk6bbZcCz4KVE"
    },
    afterCityDataFetchCallback
  );

  let cuddaloreCity = new City(
    "Cuddalore",
    {
      covidBeds: "1EH9C7FkWud1jjzj-7q7xQwPd4WpoMccVVtWl0oqq98U"
    },
    afterCityDataFetchCallback
  );

  let dharmapuriCity = new City(
    "Dharmapuri",
    {
      covidBeds: "1C1FJzyXNVa5-j0Q62mpjJFD1KRCBcqnBH1eOLAXYa70"
    },
    afterCityDataFetchCallback
  );

  let dindigulCity = new City(
    "Dindigul",
    {
      covidBeds: "1RPZhwn_Aw-g7o2pBgfe4r0MJe-1UjpQxGkWjzMsQTHY",
      oxygenSupply: "1TXQJClVgsUZrlM7riWdcdqassbq2eLLyM7_u49pUSjA"
    },
    afterCityDataFetchCallback
  );

  let erodeCity = new City(
    "Erode",
    {
      covidBeds: "16X-7DT_U_XLFYusN9z_tFypRre1suvJ8wkTHeb1YtCQ",
      oxygenSupply: "1XqOcQLJ-4EcH0EoNbSVsJAKcoVsqoocTKE56RSxHQ7E"
    },
    afterCityDataFetchCallback
  );

  let kallakurichiCity = new City(
    "Kallakurichi",
    {
      covidBeds: "18eJ4qiH1B906qdzaP58SIziTClCB0x_FpZxcl9oYz14"
    },
    afterCityDataFetchCallback
  );

  let kancheepuramCity = new City(
    "Kancheepuram",
    {
      covidBeds: "1JFeF1AtpCxRKy6Wb1Mfxq0wCT6M6ULFBvbGwBkMTzjc",
      oxygenSupply: "1rusD1ki3o4ZPiINi5zmz-lTS2DdFSI8toQvzWh1DzjM"
    },
    afterCityDataFetchCallback
  );

  let kanyakumariCity = new City(
    "Kanyakumari",
    {
      covidBeds: "1mmnz6UDlqkm3EqU6UdW7nqOAmyeZcSH14fftnO1rqh8",
      oxygenSupply: "1Wph7kltlEew06IB8zebiktIfj3koFAkjDT5enidmLVM"
    },
    afterCityDataFetchCallback
  );

  let karurCity = new City(
    "Karur",
    {
      covidBeds: "1yeSYSu9FJWQtxh5sfCBGfGJD62BzBmg4EgAefsaYbbg"
    },
    afterCityDataFetchCallback
  );

  let krishnagiri = new City(
    "Krishnagiri",
    {
      covidBeds: "1bkBE2k5zB7FlhsFHtpdzNKF7EKON_vKP7mjdCAZLt9Y",
      oxygenSupply: "14BHWZyxxbYpqHPtKusLtP0y4Y-EOjKuKvX9fFRckoeY"
    },
    afterCityDataFetchCallback
  );

  let maduraiCity = new City(
    "Madurai",
    {
      covidBeds: "1Dr7DYS6GKe5avhHcwhHMB6Z9DTFSj20eEgLvfBlQJSo",
      oxygenSupply: "1vWJ8l9Hso6PD9cjs0a6rR49j-7H5nKKCmkIB7aMMEb0"
    },
    afterCityDataFetchCallback
  );

  let nagapattinamCity = new City(
    "Nagapattinam",
    {
      covidBeds: "13O7rh6C3XCR3lSkujGFh6iEdMu0sxnb14sqZEXfrxPw"
    },
    afterCityDataFetchCallback
  );

  let namakkalCity = new City(
    "Namakkal",
    {
      covidBeds: "1RP_dDLl4a49_hq-Mp39WWiZiNXKOq5wUBkq1iw7hSFY",
      oxygenSupply: "1FilCvqv6Dh4tXxNKRuRUmjvR_bg7w17m8TQJayCRk8s"
    },
    afterCityDataFetchCallback
  );

  let nilgirisCity = new City(
    "Nilgiris",
    {
      covidBeds: "1CUH-nT9LjD3aIt502segS9CPdz60oq9JdRy4ZvuXETc"
    },
    afterCityDataFetchCallback
  );

  let preambalurCity = new City(
    "Preambalur",
    {
      covidBeds: "1nWkVDXRxuWI6dAYLtDo4eNvSW8FggvNuHCoL27B8qCw"
    },
    afterCityDataFetchCallback
  );

  let pudukottaiCity = new City(
    "Pudukottai",
    {
      covidBeds: "1od8JhGoSmn0r66PQCxV4j9oJoJ-RJNbCginMBtnV_60"
    },
    afterCityDataFetchCallback
  );

  let ramanathapuramCity = new City(
    "Ramanathapuram",
    {
      covidBeds: "1szYIqEjXO9DPZXH6z8TbIrlKjLoPT0V5MwHiZkXb0ag"
    },
    afterCityDataFetchCallback
  );

  let ranipetCity = new City(
    "Ranipet",
    {
      covidBeds: "1c9xo2XBRXjr6tU4AlZWh2VzSGPPJsOKTZC_vsX5tJgM"
    },
    afterCityDataFetchCallback
  );

  let salemCity = new City(
    "Salem",
    {
      covidBeds: "1GlNu4jyK_nkI2KwEBe9Wc6qgW1bCxbrH9v8cUJDJWrs",
      oxygenSupply: "13L6bhcNQFNlkTrQFV79xyEf11FAQSKSb2WMCCLJ5blM"
    },
    afterCityDataFetchCallback
  );

  let sivagangaiCity = new City(
    "Sivagangai",
    {
      covidBeds: "1wGN_t4TW70RNvNhg259Tb8Cc5bli73vrMIDuGH8zFhM"
    },
    afterCityDataFetchCallback
  );

  let tenkasiCity = new City(
    "Tenkasi",
    {
      covidBeds: "1Rjn8tzK_DuKzbGE3FRHAK9klpbsk7nasfDi8hWYG_Xo"
    },
    afterCityDataFetchCallback
  );

  let thanjavurCity = new City(
    "Thanjavur",
    {
      covidBeds: "12wJXWn2ropifcuAEj6KZxyNkkJzZBYjjG7r-5WVjgT4"
    },
    afterCityDataFetchCallback
  );

  let theniCity = new City(
    "Theni",
    {
      covidBeds: "1xgvC0LSHJ4gedshTMEjlqOqM7OIlRFmlgD5z_CdL8jQ",
      oxygenSupply: "1R1JBktkU2Uae7walzJ-chGwfv8icl4-yupW2OmoxmE4"
    },
    afterCityDataFetchCallback
  );

  let thirupathurCity = new City(
    "Thirupathur",
    {
      covidBeds: "1x8_36yw3M51tdYHUAj-BaQfZCqFSgkS2A666XPxO3Jo"
    },
    afterCityDataFetchCallback
  );

  let thiruvarurCity = new City(
    "Thiruvarur",
    {
      covidBeds: "1GUsyRy-wWrQ0VWRUe_V2ZHhKIz9z_K3Q6ZkPtlICpSk"
    },
    afterCityDataFetchCallback
  );

  let thoothukudiCity = new City(
    "Thoothukudi",
    {
      covidBeds: "1CliAXv8Ws8tmu1yGzFo5TgOYVdUrPW9Et7KU-fvm-3k",
      oxygenSupply: "1zkcR2R93gYNayeSdkxvwl9kSeqDhQpdC3dJTfSOgmyM"
    },
    afterCityDataFetchCallback
  );

  let thirunelveliCity = new City(
    "Thirunelveli",
    {
      covidBeds: "124dWtrpcunekPx-AGyoNDD6cgFKEYFc63BYXCadl4Kw"
    },
    afterCityDataFetchCallback
  );

  let tiripurCity = new City(
    "Tirupur",
    {
      covidBeds: "1T5fUP5nhCctC2bpNWeO4Yg2UYrewbTxrGh58c2zJePU"
    },
    afterCityDataFetchCallback
  );

  let thiruvallurCity = new City(
    "Thiruvallur",
    {
      covidBeds: "1v0Qiew7dauoum8E_3p6GdL13TL0HmCT_Ruz5_7EdMGQ"
    },
    afterCityDataFetchCallback
  );

  let thiruvannamalaiCity = new City(
    "Thiruvannamalai",
    {
      covidBeds: "1L9Mll_3sD709TOsYXRr8sxZgbAqqKNtjtWLkdqqR9JE"
    },
    afterCityDataFetchCallback
  );

  let velloreCity = new City(
    "Vellore",
    {
      covidBeds: "1NFfB_ApMAmU9t6LHV78Ohh4wnda4kSlLgMA394koB0c"
    },
    afterCityDataFetchCallback
  );

  let villupuramCity = new City(
    "Villupuram",
    {
      covidBeds: "1S-SB3KLbKyyt_XWQDI0qnwIf2kiKrH5PlDe_NgiumJA"
    },
    afterCityDataFetchCallback
  );

  let virudhunagarCity = new City(
    "Virudhunagar",
    {
      covidBeds: "1NIECJ0FGqMSJ5yY72gfk-C-F3K8EhnhJGMC0tQs8CZ0"
    },
    afterCityDataFetchCallback
  );

  let thiruchirappalliCity = new City(
    "Thiruchirappalli",
    {
      covidBeds: "1flK4l2oPJ9zvaPCWW1lXqEK3PrKW7B5EgQJQPil_c-8",
      oxygenSupply: "1FhcJTJ1CZp4L5ZQFkAdVYQ_19ceryWPRee7fM7u4zDQ"
    },
    afterCityDataFetchCallback
  );

  let puneCity = new City(
    "Pune",
    {
      covidBeds: "1WSz9VGzdhiuc37ksXMSrwf8aFIZnG9Hhg9uBJsLn4uA"
    },
    afterCityDataFetchCallback
  );

  let bloreCity = new City(
    "Bangalore",
    {
      covidBeds: "1H05y2PXFNrvgHnDleC8We453oKFZbsI7I8thPtSMt3M",
      oxygenSupply: "1Nuj9ITW1gKarTHJKP7MBwjuWxtjF8akd8Plnk0ywc9s"
    },
    afterCityDataFetchCallback
  );

  let mumbaiCIty = new City(
    "Mumbai",
    {
      covidBeds: "17OeX5qBHXN3c3ICzp-FIgzrw6iWpQjp-7LS2m1GgTp8"
    },
    afterCityDataFetchCallback
  );

  let delhi = new City(
    "Delhi",
    {
      covidBeds: "1vLo6mt3md3i7D_emnYNIgtAqFRAmq7guoj5a1qyKxq8",
      oxygenSupply: "1dnrCvIN9Nok119MTP0KBB0ZDhwjB_APa-in2bngkd7g"
    },
    afterCityDataFetchCallback
  );
  let hyderabadCity = new City(
    "Hyderabad",
    {
      covidBeds: "17flt2bxwPsIf2y_MpJDLA5ATt0rW8Xm_hbA1sq716qo"
     },
    afterCityDataFetchCallback
  );
  let warangaluCity = new City(
    "Warangal Urban",
    {
      covidBeds: "1jDqsZDTy70368kl7YOEyPGa37xqpPJhhDGLohRjInxI"
     },
    afterCityDataFetchCallback
  );
  let warangalrCity = new City(
    "Warangal Rural",
    {
      covidBeds: "1WMijTIV6QGmKDVWhTB11ibBnG8n6M5nM5AbAXoWjP_0"
     },
    afterCityDataFetchCallback
  );

   let karimnagarCity = new City(
    "Karimnagar",
    {
      covidBeds: "1T-a4MJqesqwnV37MkfHXIO5X6QpVKUyL4l7fBdcbnqg"
     },
    afterCityDataFetchCallback
  );
  
    let adilabadCity = new City(
    "Adilabad",
    {
      covidBeds: "14lPZWg4vZ258cnMRtSXeJ0muhnEEG6cFMj7EHGGbJM4"
     },
    afterCityDataFetchCallback
  );
  let jangaonCity = new City(
    "Jangaon",
    {
      covidBeds: "1HzO0hFfNw5I38pExN_awTYEuLJVxl8O-atxt1F_OTCM"
     },
    afterCityDataFetchCallback
  );
  let gandhinagarCity = new City(
    "Gandhinagar",
    {
      covidBeds: "1MY97vkgkhq_nH0Smm4yUiP788WkQigVElmBcjnoaPhA"
     },
    afterCityDataFetchCallback
  );
  let kashmir = new City(
    "Kashmir",
    {

      oxygenSupply: "1WXcOiDBAN4HqwSDCSA5AB0Q4NQncSL6CGPgB-8OpBvU"
    },
    afterCityDataFetchCallback
  );
}

window.initialiseMap = initialiseMap;
