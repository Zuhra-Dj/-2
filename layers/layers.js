var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_Poligonlab_1_2 = new ol.format.GeoJSON();
var features_Poligonlab_1_2 = format_Poligonlab_1_2.readFeatures(json_Poligonlab_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonlab_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonlab_1_2.addFeatures(features_Poligonlab_1_2);
var lyr_Poligonlab_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonlab_1_2, 
                style: style_Poligonlab_1_2,
                popuplayertitle: 'Poligon — lab_1',
                interactive: true,
                title: '<img src="styles/legend/Poligonlab_1_2.png" /> Poligon — lab_1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_highway3highway_4 = new ol.format.GeoJSON();
var features_highway3highway_4 = format_highway3highway_4.readFeatures(json_highway3highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway3highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway3highway_4.addFeatures(features_highway3highway_4);
var lyr_highway3highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway3highway_4, 
                style: style_highway3highway_4,
                popuplayertitle: 'highway3 — highway',
                interactive: true,
                title: '<img src="styles/legend/highway3highway_4.png" /> highway3 — highway'
            });
var format_highway2highway_5 = new ol.format.GeoJSON();
var features_highway2highway_5 = format_highway2highway_5.readFeatures(json_highway2highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway2highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway2highway_5.addFeatures(features_highway2highway_5);
var lyr_highway2highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway2highway_5, 
                style: style_highway2highway_5,
                popuplayertitle: 'highway2 — highway',
                interactive: true,
                title: '<img src="styles/legend/highway2highway_5.png" /> highway2 — highway'
            });
var format_highway1highway_6 = new ol.format.GeoJSON();
var features_highway1highway_6 = format_highway1highway_6.readFeatures(json_highway1highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway1highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway1highway_6.addFeatures(features_highway1highway_6);
var lyr_highway1highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway1highway_6, 
                style: style_highway1highway_6,
                popuplayertitle: 'highway1 — highway',
                interactive: true,
                title: '<img src="styles/legend/highway1highway_6.png" /> highway1 — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_Poligonlab_1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_highway3highway_4.setVisible(true);lyr_highway2highway_5.setVisible(true);lyr_highway1highway_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_Poligonlab_1_2,lyr_building_house_3,lyr_highway3highway_4,lyr_highway2highway_5,lyr_highway1highway_6];
lyr_Poligonlab_1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'addres': 'addres', });
lyr_highway3highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:island': 'crossing:island', 'crossing': 'crossing', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', });
lyr_highway2highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'junction': 'junction', 'bridge:structure': 'bridge:structure', 'service': 'service', 'layer': 'layer', 'bridge': 'bridge', 'lanes': 'lanes', 'oneway': 'oneway', 'ref': 'ref', 'name:ru': 'name:ru', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'surface': 'surface', 'name': 'name', });
lyr_highway1highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_Poligonlab_1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'addres': '', });
lyr_highway3highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'crossing:island': 'TextEdit', 'crossing': 'TextEdit', 'public_transport': 'TextEdit', 'name': 'TextEdit', 'bus': 'TextEdit', });
lyr_highway2highway_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'junction': 'TextEdit', 'bridge:structure': 'TextEdit', 'service': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'name:ru': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name:en': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', });
lyr_highway1highway_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', });
lyr_Poligonlab_1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'addres': 'no label', });
lyr_highway3highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:island': 'no label', 'crossing': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', });
lyr_highway2highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'junction': 'no label', 'bridge:structure': 'no label', 'service': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'ref': 'no label', 'name:ru': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_highway1highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway1highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});