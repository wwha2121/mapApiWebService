function showInfo(marker,anotherInfo) {



    kakao.maps.event.addListener(marker, 'click', function () {

        // anotherInfo = [ [familyInfo] ,file ,inputText ]

        $('#familydata1').append("가족1:"+anotherInfo[0][0]);
        $('#familydata2').append("가족2:"+anotherInfo[0][1]);
        $('#familydata3').append("가족3:"+anotherInfo[0][2]);
        $('#familydata4').append("가족4:"+anotherInfo[0][3]);
        $('#input_text_info').append("방명록 내용:"+anotherInfo[2]);

        console.log(anotherInfo[1])
        for (var i = 0; i < anotherInfo[1].length; i++) {
            let temp_html= `<img  src="static/${anotherInfo[1][i]}" width="400" height="400">`
            console.log(anotherInfo[1][i])
            $(`#img_print`).append(temp_html)
        }










        $('#modalInfo').modal('show')
        $('#modalInfo').on('hidden.bs.modal', function () {
            $('#familydata1').empty()
            $('#familydata2').empty()
            $('#familydata3').empty()
            $('#familydata4').empty()
            $('#img_print').empty()
            $('#input_text_info').empty()

        });


        $("#modify").click(function () {
            setTimeout(function () {
                $('#modalInfo').modal('hide')
                $('#myModal').modal('show')

            }, 1000)
            $("#myModal").on("click", "#submit", function () {






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
                let lat = position['Ma']
                let lng = position['La']


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
                    new kakao.maps.LatLng(34.79520616041439, 126.69397427636467),
                ];
                var markerImageSrc = 'https://img.icons8.com/emoji/344/house-emoji.png';

                coffeeMarkers = []
                mapMarking(markerImageSrc, homePositions, coffeeMarkers, familyInfo, file, input_text, map)


            });


        });


    });


}