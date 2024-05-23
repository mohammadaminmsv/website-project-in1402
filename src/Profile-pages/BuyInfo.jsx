import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const BuyInfo = () => {
  const { data ,error , isLoading } = useQuery({
    queryKey: ["cardItem"],
    queryFn: async () => {
      const responsive = await axios.qet(
        `https://amin-test-web-exp-default-rtdb.firebaseio.com/UserInformation.json`
      );

      return responsive;
    },
    staleTime: 4000,
  });

  console.log(data);
  return <div className="flex flex-col"></div>;
};

export default BuyInfo;
