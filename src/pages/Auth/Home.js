import { Button } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div>
        <Button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/sign-in");
          }}
        >
          Remove Token
        </Button>
      </div>
    </div>
  );
}

export default Home;
