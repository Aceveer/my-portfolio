"use client";
import Masonry from "./components/music/masonry.js";

const items = [
  {
    id: "1",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/73715c062bd38bebc6ca7b0d8f8aef20.jpg#73715c062bd38bebc6ca7b0d8f8aef20",
    url: "https://example.com/one",
    height: 600,
  },
  {
    id: "2",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/da80cf791df253b0554ee76d9c47a735.jpg#da80cf791df253b0554ee76d9c47a735",
    url: "https://example.com/two",
    height: 450,
  },
  {
    id: "3",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/135c3a4b6cc57112569fc76b86ab7783.jpg#135c3a4b6cc57112569fc76b86ab7783",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/aa81a2ba75ae88043d2f225a4847ef96.jpg#aa81a2ba75ae88043d2f225a4847ef96",
    url: "https://example.com/four",
    height: 500,
  },
  {
    id: "5",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/6d11ad03fc0b9dba0bbcf4a8a2363d97.jpg#6d11ad03fc0b9dba0bbcf4a8a2363d97",
    url: "https://example.com/four",
    height: 500,
  }
];

const items2 = [
  {
    id: "1",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/73715c062bd38bebc6ca7b0d8f8aef20.jpg#73715c062bd38bebc6ca7b0d8f8aef20",
    url: "https://example.com/one",
    height: 600,
  },
  {
    id: "2",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/da80cf791df253b0554ee76d9c47a735.jpg#da80cf791df253b0554ee76d9c47a735",
    url: "https://example.com/two",
    height: 450,
  },
  {
    id: "3",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/135c3a4b6cc57112569fc76b86ab7783.jpg#135c3a4b6cc57112569fc76b86ab7783",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/aa81a2ba75ae88043d2f225a4847ef96.jpg#aa81a2ba75ae88043d2f225a4847ef96",
    url: "https://example.com/four",
    height: 500,
  },
  {
    id: "5",
    img: "https://lastfm.freetls.fastly.net/i/u/770x0/6d11ad03fc0b9dba0bbcf4a8a2363d97.jpg#6d11ad03fc0b9dba0bbcf4a8a2363d97",
    url: "https://example.com/four",
    height: 500,
  }
];

export default function Music() {
  return (
    <div className="bg-gradient-to-r from-black to-[#1DB954] text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Top Artists</h2>
      <>
        <Masonry
          items={items}
          ease="sine.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </>
      <h2 className="text-2xl font-semibold my-4 text-center">Instruments I Play</h2>
      <>
          <Masonry
          items={items2}
          ease="sine.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </>
    </div>
  );
}
