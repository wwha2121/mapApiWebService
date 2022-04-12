


function showHome(map) {


    coffeeMarkers = []

    $.ajax({
        type: "GET",
        url: "/mapMakingHome",
        data: {},
        success: function (response) {
           let rows = response['familyDb']
           for (let i = 0; i < rows.length; i++){

                let lat = rows[i]['lat']
                let lng = rows[i]['lng']
                let file = rows[i]['file']
                let input_text = rows[i]['input_text']

                let familyInfo = rows[i]['family']
                var homePositions = [
                new kakao.maps.LatLng(lat, lng),
                new kakao.maps.LatLng(34.79520616041439, 126.69397427636467 ),
                ];
                var markerImageSrc = 'https://img.icons8.com/emoji/344/house-emoji.png';

                anotherInfo = []
                anotherInfo.push(familyInfo)
                anotherInfo.push(file)
                anotherInfo.push(input_text)


                mapMarking(markerImageSrc,homePositions,coffeeMarkers,anotherInfo)





            }

        }
    });

}