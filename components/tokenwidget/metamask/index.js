import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import AddToken from "./AddToken";
import ButtonFox from "./ButtonFox";

const MetaMask = () => {
  const [isProviderLoaded, setProvider] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkEthereumProvider();
      setLoading(false);
    }
  }, []);

  const checkEthereumProvider = async () => {
    const provider = await detectEthereumProvider({
      silent: true,
    });
    if (provider) {
      setLoading(false);
      setProvider(provider);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <ButtonFox className="disable" />
      ) : (
        <>
          {isProviderLoaded ? (
            <AddToken />
          ) : (
            <a
              href="https://metamask.io/download.html"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonFox />
            </a>
          )}
        </>
      )}
    </>
  );
};

export default MetaMask;
