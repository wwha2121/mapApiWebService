function mapRegister(){
      map = mapSetting()

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {


        $('#myModal').modal({

            backdrop: 'static',

        });

        // 클릭한 위도, 경도 정보를 가져옵니다

        /* var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';

        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = message; */

//
//                      var readURL = function(input) {
//             if (input.files && input.files[0]) {
//                 var reader = new FileReader();
//
//                 reader.onload = function (e) {
//                     $('.profile-pic').attr('src', e.target.result);
//                 }
//
//                 reader.readAsDataURL(input.files[0]);
//             }
//         }

        var latlng = mouseEvent.latLng;

        modalSubmit(latlng)

        //
        // this.setAttribute("disabled", "disabled");

    });

// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다


// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다

}



