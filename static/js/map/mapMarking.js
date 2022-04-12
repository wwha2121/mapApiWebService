

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다


// 인포윈도우를 닫는 클로저를 만드는 함수입니다


function mapMarking(markerImageSrc, homePositions, coffeeMarkers, anotherInfo) {





    var imageSize = new kakao.maps.Size(22, 26),
    imageOptions = {
        spriteOrigin: new kakao.maps.Point(10, 0),
        spriteSize: new kakao.maps.Size(36, 98)
    };

    // 마커이미지와 마커를 생성합니다
    var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
        marker = createMarker(homePositions[0], markerImage, anotherInfo);

    console.log(marker)
    console.log(coffeeMarkers)

    showInfo(marker,anotherInfo)
    // 생성된 마커를 커피숍 마커 배열에 추가합니다
    coffeeMarkers.push(marker);
    console.log(coffeeMarkers)

    for (var i = 0; i < coffeeMarkers.length; i++) {
        coffeeMarkers[i].setMap(map);
    }


    return marker

}

function setCoffeeMarkers(map) {

}



// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image, anotherInfo) {

    var marker = new kakao.maps.Marker({
        position: position,
        image: image,


    });




    return marker

}

function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;
}


