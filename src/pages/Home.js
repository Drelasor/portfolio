import Card from "../components/Card";
export default function Home() {
  return (
    <div className="home">
      <div className="name">
        <h1>Raphaël Grand</h1>
        <h2>Developpeur Web</h2>
      </div>
      <div className="about"></div>
      <div className="works">
        <Card />
      </div>
    </div>
  );
}
