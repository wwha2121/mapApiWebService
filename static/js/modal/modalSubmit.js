 function modalSubmit(latlng)
        {
             $("#myModal").on( "click", "#submit", function() {








                 const form_data = new FormData();

                 let file = $('#input-multiple-image')[0].files
                 // let file1 = $('#input-multiple-image')[0].files[1]
                 //
                 // console.log(file)
                 // console.log(file1)
                 // console.log( $('#input-multiple-image')[0].files)
                 // console.log($('#input-multiple-image')[0].files.length)
                 console.log(file)
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

                for(var i = 0 ; i < file.length ; i++){

                    form_data.append("file_give", file[i])
                }

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
                 anotherInfo = []
                anotherInfo.push(familyInfo)
                anotherInfo.push(file)
                anotherInfo.push(input_text)

                 coffeeMarkers =mapMarking(markerImageSrc,homePositions,coffeeMarkers,anotherInfo )





            });
        }