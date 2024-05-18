import React, { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const FetchInfo = () => {
  const [counts, setCounts] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axios.get(
        "https://amin-test-web-exp-default-rtdb.firebaseio.com/ShopItems.json"
      );
      return response.data.Laptop;
    },
  });

  const login = useSelector((state) => state.logi);
  const navigate = useNavigate();

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[id] || 0) - 1;
      if (newCount <= 0) {
        const newCounts = { ...prevCounts, [id]: 0 };
        delete newCounts[id];
        return newCounts;
      }
      return { ...prevCounts, [id]: newCount };
    });
  };
  
  useEffect(() => {
    const newSelectedIds = selectedIds.filter(id => counts[id] > 0);
    setSelectedIds(newSelectedIds);
  }, [counts]);

  const listHandler = useCallback(
    (item) => {
      setSelectedIds((prevIds) => [...prevIds, item.id]);
      setCounts((prevCounts) => ({
        ...prevCounts,
        [item.id]: 1,
      }));
    },
    [login, navigate]
  );

  if (error) return <div>Error in showing data</div>;
  if (isLoading) return <div>اطلاعات در حال بارگزاری هستند</div>;

  return (
    <div className="container">
      {data.length > 0 ? (
        <ul className="flex flex-row space-x-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 flex flex-col h-96 text-center content-center justify-center items-center space-y-4"
            >
              <img src={item.img} width={200} height={200} alt={item.name} />
              <li className="font-bold">{item.name}</li>
              <li>Price: {item.price}</li>
              {selectedIds.includes(item.id) ? (
                <div className="flex flex-row space-x-3">
                  <button
                    className="bg-green-400 rounded-lg p-1"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +1
                  </button>
                  <input
                    className=" w-15 rounded-lg border border-black text-center"
                    value={counts[item.id] || 0}
                    readOnly
                  />

                  <button
                    className="bg-green-400 rounded-lg p-1"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -1
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => listHandler(item)}
                  className="bg-yellow-500 w-4/5 py-2 rounded-lg font-bold"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default FetchInfo;
