'use client';

import { useEffect, useRef } from 'react';
import { Map as MapIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import 'ol/ol.css';

const stats = [
  { value: '1,200+', label: '入驻服务机构' },
  { value: '5,800+', label: '专业服务项目' },
  { value: '24,500+', label: '累计服务企业' },
  { value: '158亿', label: '为企业降本增效' },
];

// Zhuzhou coordinates
const ZHUZHOU_LON = 113.1337;
const ZHUZHOU_LAT = 27.8275;

const points = [
  { lon: 113.1337, lat: 27.8275, name: '天元区工作站' },
  { lon: 113.15, lat: 27.85, name: '芦淞区工作站' },
  { lon: 113.11, lat: 27.86, name: '石峰区工作站' },
  { lon: 113.16, lat: 27.81, name: '荷塘区工作站' },
];

export default function ServiceCoverage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const features = points.map(p => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([p.lon, p.lat])),
        name: p.name,
      });
      
      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            scale: 0.05,
            anchor: [0.5, 1],
          }),
        })
      );
      return feature;
    });

    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=5a60febf0ef4d0f166c0dd49aa271838',
          }),
        }),
        new TileLayer({
          source: new XYZ({
            url: 'https://t{0-7}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=5a60febf0ef4d0f166c0dd49aa271838',
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([ZHUZHOU_LON, ZHUZHOU_LAT]),
        zoom: 11,
      }),
      controls: [], // Remove default controls for cleaner look
    });

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="服务覆盖" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              我们通过线上平台与线下各产业园区工作站的深度融合，为您提供“面对面”的贴心服务。点击地图可查询您附近的质量基础设施共享工作站。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-[#0054db] text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative">
            <div ref={mapRef} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
