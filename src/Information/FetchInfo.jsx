import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { cardActons } from "./Card";

const FetchInfo = () => {
  const [counts, setCounts] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);
  const [datato, setDatato] = useState([]);
  const cardItems = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axios.get(
        "https://amin-test-web-exp-default-rtdb.firebaseio.com/ShopItems.json"
      );
      return response.data.Laptop;
    },
    staleTime: 4000,
    
  });

  // const {mutation} = useMutation({
  //   mutationFn:()=>{axios.post(``)}
  // })
  useEffect(() => {
    setDatato(data);
  }, [data]);

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
    dispatch(cardActons.incrementCount(id));
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
    dispatch(cardActons.decrementCount(id));
  };

  useEffect(() => {
    const newSelectedIds = selectedIds.filter((id) => counts[id] > 0);
    setSelectedIds(newSelectedIds);
  }, [counts]);

  const listHandler = useCallback(
    (item) => {
      const existingCount = counts[item.id] || 0;
      setSelectedIds((prev) => [...prev, item.id]);
      setCounts((prev) => ({
        ...prev,
        [item.id]: existingCount + 1,
      }));

      if (existingCount === 0) {
        dispatch(cardActons.addItemToCard({ item, counts: 1 }));
      } else {
        dispatch(cardActons.addItemToCard({ item, counts: existingCount + 1 }));
      }
    },
    [dispatch, counts]
  );

  console.log(cardItems);
  if (error) return <div>Error in showing data</div>;
  if (isLoading) return <div>اطلاعات در حال بارگزاری هستند</div>;

  return (
    <div className="container mt-7">
      {data.length > 0 ? (
        <div className="flex flex-row space-x-5 space-y-5 justify-start content-start flex-wrap items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 flex flex-col h-96 mt-0 ml-0 w-72 text-center content-center justify-center items-center space-y-4 hover:border-2 hover:shadow-lg hover:border-black"
            >
              <img src={item.img} alt={item.name} />
              <li className="font-bold">{item.name}</li>
              <li>Price: {item.price}$</li>
              {selectedIds.includes(item.id) ? (
                <div className="flex flex-row space-x-3">
                  <button
                    className="bg-green-400 rounded-lg p-1"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +1
                  </button>
                  <input
                    className="w-15 rounded-lg border border-black text-center"
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
        </div>
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default FetchInfo;

export const useData = () => {
  const [dataS, setDatas] = useState([]);
  useEffect(() => {
    setDatas(datato);
  }, [datato]);
};
