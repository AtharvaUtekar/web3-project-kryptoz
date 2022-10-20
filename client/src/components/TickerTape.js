import React from "react";
const TickerTape = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-ticker-tape.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "showSymbolLogo": true, "colorTheme": "dark", "isTransparent": true, "displayMode": "adaptive", "locale": "en", 
            "symbols": [
                {
                  "proName": "FOREXCOM:NSXUSD",
                  "title": "US 100"
                },
                {
                  "proName": "BITSTAMP:BTCUSD",
                  "title": "Bitcoin"
                },
                {
                  "proName": "BITSTAMP:ETHUSD",
                  "title": "Ethereum"
                },
                {
                  "description": "Bitcoin USD",
                  "proName": "BITSTAMP:BTCUSD"
                },
                {
                  "description": "Solana",
                  "proName": "BINANCE:SOLUSDT"
                },
                {
                  "description": "XPR",
                  "proName": "BINANCE:XRPUSDT"
                },
                {
                  "description": "Matic",
                  "proName": "BINANCE:MATICUSDT"
                },
                {
                  "description": "Shiba coin",
                  "proName": "BINANCE:SHIBUSDT"
                },
                {
                  "description": "Cardano",
                  "proName": "BINANCE:ADAUSDT"
                }
              ],
            
            }, widgetProps), widgetPropsAny));
            ref.current.appendChild(script);
            refValue = ref.current;
        }
        return () => {
            if (refValue) {
                while (refValue.firstChild) {
                    refValue.removeChild(refValue.firstChild);
                }
            }
        };
    }, [ref, widgetProps, widgetPropsAny]);
    return React.createElement("div", { ref: ref });
};
export default TickerTape;
