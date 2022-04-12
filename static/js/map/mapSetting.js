function mapSetting(){

    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(34.7561 ,126.5906),
        level: 1
    };

    var map = new kakao.maps.Map(container, options);

    return map
}
