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
var format_SoreangLeuwipanjang_2 = new ol.format.GeoJSON();
var features_SoreangLeuwipanjang_2 = format_SoreangLeuwipanjang_2.readFeatures(json_SoreangLeuwipanjang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoreangLeuwipanjang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoreangLeuwipanjang_2.addFeatures(features_SoreangLeuwipanjang_2);
var lyr_SoreangLeuwipanjang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoreangLeuwipanjang_2, 
                style: style_SoreangLeuwipanjang_2,
                popuplayertitle: 'Soreang-Leuwipanjang',
                interactive: true,
                title: '<img src="styles/legend/SoreangLeuwipanjang_2.png" /> Soreang-Leuwipanjang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_gadm36_IDN_3_1.setVisible(true);lyr_SoreangLeuwipanjang_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_gadm36_IDN_3_1,lyr_SoreangLeuwipanjang_2];
lyr_gadm36_IDN_3_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_SoreangLeuwipanjang_2.set('fieldAliases', {'Nama': 'Nama', 'latitude': 'latitude', 'longitude': 'longitude', 'Alamat': 'Alamat', 'Gambar': 'Gambar', });
lyr_gadm36_IDN_3_1.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_SoreangLeuwipanjang_2.set('fieldImages', {'Nama': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Alamat': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_gadm36_IDN_3_1.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_SoreangLeuwipanjang_2.set('fieldLabels', {'Nama': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Alamat': 'inline label - always visible', 'Gambar': 'no label', });
lyr_SoreangLeuwipanjang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});