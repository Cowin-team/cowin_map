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
      covidBeds: "1YV3DWGxsvlTp0-vaw8f09AajQ5cl3MovFvWVVDtkbOc"
    },
    afterCityDataFetchCallback
  );

  let coimbatorCity = new City(
    "coimbatore",
    {
      covidBeds: "1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw",
      oxygenSupply: "1Ry3y1hx1iHeuF17YmWtzfaDQdhx5zRr6lSLrzBW_TU0"
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
      covidBeds: "1RPZhwn_Aw-g7o2pBgfe4r0MJe-1UjpQxGkWjzMsQTHY"
    },
    afterCityDataFetchCallback
  );

  let erodeCity = new City(
    "Erode",
    {
      covidBeds: "16X-7DT_U_XLFYusN9z_tFypRre1suvJ8wkTHeb1YtCQ"
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
      covidBeds: "1JFeF1AtpCxRKy6Wb1Mfxq0wCT6M6ULFBvbGwBkMTzjc"
    },
    afterCityDataFetchCallback
  );

  let kanyakumariCity = new City(
    "Kanyakumari",
    {
      covidBeds: "1mmnz6UDlqkm3EqU6UdW7nqOAmyeZcSH14fftnO1rqh8"
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
      covidBeds: "1bkBE2k5zB7FlhsFHtpdzNKF7EKON_vKP7mjdCAZLt9Y"
    },
    afterCityDataFetchCallback
  );

  let maduraiCity = new City(
    "Madurai",
    {
      covidBeds: "1Dr7DYS6GKe5avhHcwhHMB6Z9DTFSj20eEgLvfBlQJSo"
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
      covidBeds: "1RP_dDLl4a49_hq-Mp39WWiZiNXKOq5wUBkq1iw7hSFY"
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
      covidBeds: "1GlNu4jyK_nkI2KwEBe9Wc6qgW1bCxbrH9v8cUJDJWrs"
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
      covidBeds: "1xgvC0LSHJ4gedshTMEjlqOqM7OIlRFmlgD5z_CdL8jQ"
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
      covidBeds: "1CliAXv8Ws8tmu1yGzFo5TgOYVdUrPW9Et7KU-fvm-3k"
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
}

window.initialiseMap = initialiseMap;
