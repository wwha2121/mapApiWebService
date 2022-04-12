 function modalSubmit(latlng)
        {
             $("#myModal").on( "click", "#submit", function() {








                 const form_data = new FormData();

                 let file = $('#image')[0].files[0]

                 let family1 = $('#family1').val()
                 let family2 = $('#family2').val()
                 let family3 = $('#family3').val()
                 let family4 = $('#family4').val()
                 let input_text = $('#input_text').val()
                 let lat = latlng.getLat()
                 let lng = latlng.getLng()

                familyInfo = [];
                familyInfo.push(family1)
                familyInfo.push(family2)
                familyInfo.push(family3)
                familyInfo.push(family4)


                form_data.append("file_give", file)
                form_data.append("familyInfo_give", familyInfo)
                form_data.append("lat_give", lat)
                form_data.append("lng_give", lng)
                form_data.append("input_text_give", input_text)

                $.ajax({
                    type: "POST",
                    url: "/mapMakingHome",
                    data: form_data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        alert('데이터 입력완료!')

                    }
                });
                var homePositions = [
                new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()),
                new kakao.maps.LatLng(34.79520616041439, 126.69397427636467 ),
                ];
                var markerImageSrc = 'https://img.icons8.com/emoji/344/house-emoji.png';

                 coffeeMarkers = []
                 coffeeMarkers =mapMarking(markerImageSrc,homePositions,coffeeMarkers,familyInfo,file,input_text,map )





            });
        }