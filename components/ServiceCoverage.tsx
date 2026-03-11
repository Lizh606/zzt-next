'use client';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Icon, Style } from 'ol/style';
import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const stats = [
  { value: '50+', label: '入驻服务机构' },
  { value: '600+', label: '专业服务项目' },
  { value: '140+', label: '累计服务企业' },
  { value: '约3500万元', label: '为企业降本增效' },
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

    const features = points.map((p) => {
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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="服务覆盖" />
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-8 leading-relaxed text-slate-600">
              我们通过线上平台与线下各产业园区工作站的深度融合，为您提供“面对面”的贴心服务。点击地图可查询您附近的质量基础设施共享工作站。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mb-2 text-3xl font-black text-[#0054db]">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
            <div ref={mapRef} className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
