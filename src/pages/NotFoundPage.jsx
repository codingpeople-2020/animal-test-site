import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "60px", fontFamily: "'Noto Sans KR', sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>🚧 페이지를 찾을 수 없습니다</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "40px" }}>
        입력하신 주소가 잘못되었거나, 페이지가 이동되었습니다.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          background: "#4f46e5",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer"
        }}
      >
        🏠 HOME
      </button>
    </div>
  );
}

export default NotFoundPage;