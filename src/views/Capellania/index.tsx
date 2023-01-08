import imagePrincipal from "./img/0001.jpg";
import image2 from "./img/0002.jpg";
import image3 from "./img/0003.jpg";
import image4 from "./img/0004.jpg";
import image5 from "./img/0005.jpg";
import image6 from "./img/0006.jpg";
import image7 from "./img/0007.jpg";
import image8 from "./img/0008.jpg";
import image9 from "./img/0009.jpg";
import image10 from "./img/0010.jpg";
import { useNavigate } from "react-router-dom";

export default function Capellania() {
  const navigate = useNavigate();
  return (
    <aside
      style={{
        backgroundColor: "black",
        maxWidth: "100vw",
      }}
      id="nav"
    >
      <img
        src={imagePrincipal}
        alt=""
        style={{
          width: "100%",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
        }}
      >
        Capellania
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          // maxWidth: "100vw",
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={image2}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image3}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image4}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image5}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image6}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image7}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image8}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image9}
          alt=""
        />
        <img
          style={{
            width: "100%",
          }}
          src={image10}
          alt=""
        />
      </div>
      <footer
        style={{
          padding: "5% 0",
        }}
      >
        <div
          style={{
            width: "10%",
            margin: "0 auto",
          }}
        >
          <svg
            onClick={() => navigate("/")}
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </div>
      </footer>
    </aside>
  );
}
