export default function HomeMap() {
  return (
    <div style={{ height: "250px", width: "30%", borderRadius: "16px", overflow: "hidden" }}>
      <iframe
        title="My Home (Satellite)"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://maps.google.com/maps?q=10.08228619814015,78.74592271474032&t=k&z=18&output=embed"
      ></iframe>
    </div>
  );
}
