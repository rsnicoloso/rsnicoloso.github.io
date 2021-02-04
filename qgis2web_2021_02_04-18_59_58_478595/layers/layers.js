var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Uso_solo_40_50_UBVSM_2 = new ol.format.GeoJSON();
var features_Uso_solo_40_50_UBVSM_2 = format_Uso_solo_40_50_UBVSM_2.readFeatures(json_Uso_solo_40_50_UBVSM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_solo_40_50_UBVSM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_solo_40_50_UBVSM_2.addFeatures(features_Uso_solo_40_50_UBVSM_2);
var lyr_Uso_solo_40_50_UBVSM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_solo_40_50_UBVSM_2, 
                style: style_Uso_solo_40_50_UBVSM_2,
                interactive: true,
    title: 'Uso_solo_40_50_UBVSM<br />\
    <img src="styles/legend/Uso_solo_40_50_UBVSM_2_0.png" /> 15 - Pastagem<br />\
    <img src="styles/legend/Uso_solo_40_50_UBVSM_2_1.png" /> 20 - Cana<br />\
    <img src="styles/legend/Uso_solo_40_50_UBVSM_2_2.png" /> 21 - Mosaico Agricultura e Pastagem<br />\
    <img src="styles/legend/Uso_solo_40_50_UBVSM_2_3.png" /> 39 - Soja<br />\
    <img src="styles/legend/Uso_solo_40_50_UBVSM_2_4.png" /> 41 - Outras Lavouras Temporárias<br />'
        });
var format_UBVSM50km_3 = new ol.format.GeoJSON();
var features_UBVSM50km_3 = format_UBVSM50km_3.readFeatures(json_UBVSM50km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBVSM50km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBVSM50km_3.addFeatures(features_UBVSM50km_3);
var lyr_UBVSM50km_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBVSM50km_3, 
                style: style_UBVSM50km_3,
                interactive: true,
                title: '<img src="styles/legend/UBVSM50km_3.png" /> UBVSM50km'
            });
var format_Uso_solo_30_40_UBVSM_4 = new ol.format.GeoJSON();
var features_Uso_solo_30_40_UBVSM_4 = format_Uso_solo_30_40_UBVSM_4.readFeatures(json_Uso_solo_30_40_UBVSM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_solo_30_40_UBVSM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_solo_30_40_UBVSM_4.addFeatures(features_Uso_solo_30_40_UBVSM_4);
var lyr_Uso_solo_30_40_UBVSM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_solo_30_40_UBVSM_4, 
                style: style_Uso_solo_30_40_UBVSM_4,
                interactive: true,
    title: 'Uso_solo_30_40_UBVSM<br />\
    <img src="styles/legend/Uso_solo_30_40_UBVSM_4_0.png" /> 15 - Pastagem<br />\
    <img src="styles/legend/Uso_solo_30_40_UBVSM_4_1.png" /> 20 - Cana<br />\
    <img src="styles/legend/Uso_solo_30_40_UBVSM_4_2.png" /> 21 - Mosaico Agricultura e Pastagem<br />\
    <img src="styles/legend/Uso_solo_30_40_UBVSM_4_3.png" /> 39 - Soja<br />\
    <img src="styles/legend/Uso_solo_30_40_UBVSM_4_4.png" /> 41 - Outras Lavouras Temporárias<br />'
        });
var format_UBVSM40km_5 = new ol.format.GeoJSON();
var features_UBVSM40km_5 = format_UBVSM40km_5.readFeatures(json_UBVSM40km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBVSM40km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBVSM40km_5.addFeatures(features_UBVSM40km_5);
var lyr_UBVSM40km_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBVSM40km_5, 
                style: style_UBVSM40km_5,
                interactive: true,
                title: '<img src="styles/legend/UBVSM40km_5.png" /> UBVSM40km'
            });
var format_Uso_solo_20_30_UBVSM_6 = new ol.format.GeoJSON();
var features_Uso_solo_20_30_UBVSM_6 = format_Uso_solo_20_30_UBVSM_6.readFeatures(json_Uso_solo_20_30_UBVSM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_solo_20_30_UBVSM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_solo_20_30_UBVSM_6.addFeatures(features_Uso_solo_20_30_UBVSM_6);
var lyr_Uso_solo_20_30_UBVSM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_solo_20_30_UBVSM_6, 
                style: style_Uso_solo_20_30_UBVSM_6,
                interactive: true,
    title: 'Uso_solo_20_30_UBVSM<br />\
    <img src="styles/legend/Uso_solo_20_30_UBVSM_6_0.png" /> 15 - Pastagem<br />\
    <img src="styles/legend/Uso_solo_20_30_UBVSM_6_1.png" /> 20 - Cana<br />\
    <img src="styles/legend/Uso_solo_20_30_UBVSM_6_2.png" /> 21 - Mosaico Agricultura e Pastagem<br />\
    <img src="styles/legend/Uso_solo_20_30_UBVSM_6_3.png" /> 39 - Soja<br />\
    <img src="styles/legend/Uso_solo_20_30_UBVSM_6_4.png" /> 41 - Outras Lavouras Temporárias<br />'
        });
var format_UBCSM30km_7 = new ol.format.GeoJSON();
var features_UBCSM30km_7 = format_UBCSM30km_7.readFeatures(json_UBCSM30km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBCSM30km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBCSM30km_7.addFeatures(features_UBCSM30km_7);
var lyr_UBCSM30km_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBCSM30km_7, 
                style: style_UBCSM30km_7,
                interactive: true,
                title: '<img src="styles/legend/UBCSM30km_7.png" /> UBCSM30km'
            });
var format_Uso_solo_10_20_UBVSM_8 = new ol.format.GeoJSON();
var features_Uso_solo_10_20_UBVSM_8 = format_Uso_solo_10_20_UBVSM_8.readFeatures(json_Uso_solo_10_20_UBVSM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_solo_10_20_UBVSM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_solo_10_20_UBVSM_8.addFeatures(features_Uso_solo_10_20_UBVSM_8);
var lyr_Uso_solo_10_20_UBVSM_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_solo_10_20_UBVSM_8, 
                style: style_Uso_solo_10_20_UBVSM_8,
                interactive: true,
    title: 'Uso_solo_10_20_UBVSM<br />\
    <img src="styles/legend/Uso_solo_10_20_UBVSM_8_0.png" /> 15 - Pastagem<br />\
    <img src="styles/legend/Uso_solo_10_20_UBVSM_8_1.png" /> 20 - Cana<br />\
    <img src="styles/legend/Uso_solo_10_20_UBVSM_8_2.png" /> 21 - Mosaico Agricultura e Pastagem<br />\
    <img src="styles/legend/Uso_solo_10_20_UBVSM_8_3.png" /> 39 - Soja<br />\
    <img src="styles/legend/Uso_solo_10_20_UBVSM_8_4.png" /> 41 - Outras Lavouras Temporárias<br />'
        });
var format_UBVSM20km_9 = new ol.format.GeoJSON();
var features_UBVSM20km_9 = format_UBVSM20km_9.readFeatures(json_UBVSM20km_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBVSM20km_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBVSM20km_9.addFeatures(features_UBVSM20km_9);
var lyr_UBVSM20km_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBVSM20km_9, 
                style: style_UBVSM20km_9,
                interactive: true,
                title: '<img src="styles/legend/UBVSM20km_9.png" /> UBVSM20km'
            });
var format_Uso_solo_0_10_UBVSM_10 = new ol.format.GeoJSON();
var features_Uso_solo_0_10_UBVSM_10 = format_Uso_solo_0_10_UBVSM_10.readFeatures(json_Uso_solo_0_10_UBVSM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_solo_0_10_UBVSM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_solo_0_10_UBVSM_10.addFeatures(features_Uso_solo_0_10_UBVSM_10);
var lyr_Uso_solo_0_10_UBVSM_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uso_solo_0_10_UBVSM_10, 
                style: style_Uso_solo_0_10_UBVSM_10,
                interactive: true,
    title: 'Uso_solo_0_10_UBVSM<br />\
    <img src="styles/legend/Uso_solo_0_10_UBVSM_10_0.png" /> 15 - Pastagem<br />\
    <img src="styles/legend/Uso_solo_0_10_UBVSM_10_1.png" /> 20 - Cana<br />\
    <img src="styles/legend/Uso_solo_0_10_UBVSM_10_2.png" /> 21 - Mosaico Agricultura e Pastagem<br />\
    <img src="styles/legend/Uso_solo_0_10_UBVSM_10_3.png" /> 39 - Soja<br />\
    <img src="styles/legend/Uso_solo_0_10_UBVSM_10_4.png" /> 41 - Outras Lavouras Temporárias<br />'
        });
var format_UBVSM10km_11 = new ol.format.GeoJSON();
var features_UBVSM10km_11 = format_UBVSM10km_11.readFeatures(json_UBVSM10km_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBVSM10km_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBVSM10km_11.addFeatures(features_UBVSM10km_11);
var lyr_UBVSM10km_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBVSM10km_11, 
                style: style_UBVSM10km_11,
                interactive: true,
                title: '<img src="styles/legend/UBVSM10km_11.png" /> UBVSM10km'
            });
var format_UBVSM_12 = new ol.format.GeoJSON();
var features_UBVSM_12 = format_UBVSM_12.readFeatures(json_UBVSM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBVSM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBVSM_12.addFeatures(features_UBVSM_12);
var lyr_UBVSM_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBVSM_12, 
                style: style_UBVSM_12,
                interactive: true,
                title: '<img src="styles/legend/UBVSM_12.png" /> UBVSM'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Uso_solo_40_50_UBVSM_2.setVisible(true);lyr_UBVSM50km_3.setVisible(true);lyr_Uso_solo_30_40_UBVSM_4.setVisible(true);lyr_UBVSM40km_5.setVisible(true);lyr_Uso_solo_20_30_UBVSM_6.setVisible(true);lyr_UBCSM30km_7.setVisible(true);lyr_Uso_solo_10_20_UBVSM_8.setVisible(true);lyr_UBVSM20km_9.setVisible(true);lyr_Uso_solo_0_10_UBVSM_10.setVisible(true);lyr_UBVSM10km_11.setVisible(true);lyr_UBVSM_12.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Uso_solo_40_50_UBVSM_2,lyr_UBVSM50km_3,lyr_Uso_solo_30_40_UBVSM_4,lyr_UBVSM40km_5,lyr_Uso_solo_20_30_UBVSM_6,lyr_UBCSM30km_7,lyr_Uso_solo_10_20_UBVSM_8,lyr_UBVSM20km_9,lyr_Uso_solo_0_10_UBVSM_10,lyr_UBVSM10km_11,lyr_UBVSM_12];
lyr_Uso_solo_40_50_UBVSM_2.set('fieldAliases', {'iD': 'iD', 'Área': 'Área', });
lyr_UBVSM50km_3.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_Uso_solo_30_40_UBVSM_4.set('fieldAliases', {'iD': 'iD', 'Área': 'Área', });
lyr_UBVSM40km_5.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_Uso_solo_20_30_UBVSM_6.set('fieldAliases', {'iD': 'iD', 'Área': 'Área', });
lyr_UBCSM30km_7.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_Uso_solo_10_20_UBVSM_8.set('fieldAliases', {'iD': 'iD', 'Área': 'Área', });
lyr_UBVSM20km_9.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_Uso_solo_0_10_UBVSM_10.set('fieldAliases', {'iD': 'iD', 'Área': 'Área', });
lyr_UBVSM10km_11.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_UBVSM_12.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Lat': 'Lat', 'Long': 'Long', 'Elev': 'Elev', });
lyr_Uso_solo_40_50_UBVSM_2.set('fieldImages', {'iD': 'Range', 'Área': 'TextEdit', });
lyr_UBVSM50km_3.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_Uso_solo_30_40_UBVSM_4.set('fieldImages', {'iD': 'Range', 'Área': 'TextEdit', });
lyr_UBVSM40km_5.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_Uso_solo_20_30_UBVSM_6.set('fieldImages', {'iD': 'Range', 'Área': 'TextEdit', });
lyr_UBCSM30km_7.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_Uso_solo_10_20_UBVSM_8.set('fieldImages', {'iD': 'Range', 'Área': 'TextEdit', });
lyr_UBVSM20km_9.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_Uso_solo_0_10_UBVSM_10.set('fieldImages', {'iD': 'Range', 'Área': 'TextEdit', });
lyr_UBVSM10km_11.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_UBVSM_12.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Elev': 'TextEdit', });
lyr_Uso_solo_40_50_UBVSM_2.set('fieldLabels', {'iD': 'no label', 'Área': 'no label', });
lyr_UBVSM50km_3.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_Uso_solo_30_40_UBVSM_4.set('fieldLabels', {'iD': 'no label', 'Área': 'no label', });
lyr_UBVSM40km_5.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_Uso_solo_20_30_UBVSM_6.set('fieldLabels', {'iD': 'no label', 'Área': 'no label', });
lyr_UBCSM30km_7.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_Uso_solo_10_20_UBVSM_8.set('fieldLabels', {'iD': 'no label', 'Área': 'no label', });
lyr_UBVSM20km_9.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_Uso_solo_0_10_UBVSM_10.set('fieldLabels', {'iD': 'no label', 'Área': 'no label', });
lyr_UBVSM10km_11.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_UBVSM_12.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Elev': 'no label', });
lyr_UBVSM_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});