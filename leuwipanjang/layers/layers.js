var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_gadm36_IDN_3_1 = new ol.format.GeoJSON();
var features_gadm36_IDN_3_1 = format_gadm36_IDN_3_1.readFeatures(json_gadm36_IDN_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_IDN_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_IDN_3_1.addFeatures(features_gadm36_IDN_3_1);
var lyr_gadm36_IDN_3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm36_IDN_3_1, 
                style: style_gadm36_IDN_3_1,
                popuplayertitle: 'gadm36_IDN_3',
                interactive: false,
    title: 'gadm36_IDN_3<br />\
    <img src="styles/legend/gadm36_IDN_3_1_0.png" /> Bandung<br />\
    <img src="styles/legend/gadm36_IDN_3_1_1.png" /> Bandung Barat<br />\
    <img src="styles/legend/gadm36_IDN_3_1_2.png" /> Cimahi<br />\
    <img src="styles/legend/gadm36_IDN_3_1_3.png" /> Kota Bandung<br />\
    <img src="styles/legend/gadm36_IDN_3_1_4.png" /> Sumedang<br />' });
var format_LeuwipanjangSoreang_2 = new ol.format.GeoJSON();
var features_LeuwipanjangSoreang_2 = format_LeuwipanjangSoreang_2.readFeatures(json_LeuwipanjangSoreang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeuwipanjangSoreang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeuwipanjangSoreang_2.addFeatures(features_LeuwipanjangSoreang_2);
var lyr_LeuwipanjangSoreang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeuwipanjangSoreang_2, 
                style: style_LeuwipanjangSoreang_2,
                popuplayertitle: 'Leuwipanjang-Soreang',
                interactive: true,
                title: '<img src="styles/legend/LeuwipanjangSoreang_2.png" /> Leuwipanjang-Soreang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_gadm36_IDN_3_1.setVisible(true);lyr_LeuwipanjangSoreang_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_gadm36_IDN_3_1,lyr_LeuwipanjangSoreang_2];
lyr_gadm36_IDN_3_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_LeuwipanjangSoreang_2.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Alamat': 'Alamat', 'Gambar2': 'Gambar2', });
lyr_gadm36_IDN_3_1.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_LeuwipanjangSoreang_2.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Alamat': 'TextEdit', 'Gambar2': 'ExternalResource', });
lyr_gadm36_IDN_3_1.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_LeuwipanjangSoreang_2.set('fieldLabels', {'Nama': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Alamat': 'inline label - always visible', 'Gambar2': 'no label', });
lyr_LeuwipanjangSoreang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});