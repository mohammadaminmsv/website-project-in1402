import React, { useEffect, useState } from "react";
import Home from "../Pages/Home";

const FetchInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const getData = await fetch(
        "https://amin-test-web-exp-default-rtdb.firebaseio.com/ShopItems/MobilPhone.json"
      );
      const showData = await getData.json();
      setData(showData);
      setLoading(false);
      console.log(data)
    }
    fetchData();
  }, [data]);

  return (
    <div>
      
      <table>
        {loading ? (
          <div>wait</div>
        ) : (
          data.map((item) => {
            return (
              <tr>
                <th>{item.name}</th>
                <th>
                  <img src={item.img} />
                </th>
              </tr>
            );
          })
        )}
      </table>
    </div>
  );
};

export default FetchInfo;
