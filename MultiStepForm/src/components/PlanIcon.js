import React, { useEffect, useState } from "react";

function PlanIcon({ url,alt }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`../images/${url}`).then((res) => {
      setImage(res.default);
    });
  }, [url]);

  return <img src={image} alt={alt}></img>;
}

export default PlanIcon;
