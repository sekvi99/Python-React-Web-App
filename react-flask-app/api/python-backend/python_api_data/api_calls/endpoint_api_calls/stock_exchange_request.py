from ..abstract_api_request import AbstractAPIRequestManager
from dataclasses import dataclass, field
import requests
from typing import Any
import json


@dataclass
class StockMarketAPIRequestManager(AbstractAPIRequestManager):
    """
    Definition of class that handles calls for data of stock market.

    Args:
        AbstractAPIRequestManager (_type_): Inheritence of AbstractAPIRequestManager.
    """
    avaiable_stocks: list[str] = field(default_factory=lambda: list([
        'IBM',
        'TSCO.LON',
        'SHOP.TRT',
        'GPV.TRV',
        'DAI.DEX',
        'RELIANCE.BSE',
    ])) # List of available stocks
    
    def process_api_response(self, symbol: str) -> dict[str, Any]:
        """
        Declaration of implemented interface. \n
        Method checks whether send symbol is avaiable, if it is method fetch data from provided endpoint.

        Args:
            symbol (str): String representation of stock symbol.

        Returns:
            dict[str, Any]: Data in .json format.
        """
        if symbol not in self.avaiable_stocks:
            return {'status': f'Could not get data for provided symbol: {symbol}'}
        
        else:
            self.endpoint = self.endpoint.format(SYMBOL=symbol)
            response = requests.request(self.request_type, self.endpoint)
            
            if response.status_code == 200:
                data = (response.json())['Time Series (Daily)']
                result = {
                    'data':[
                        {
                            'date': key,
                            'open': float(value['1. open']),
                            'high': float(value['2. high']),
                            'low':  float(value['3. low']),
                            'close': float(value['4. close']),
                            'volume': float(value['5. volume'])
                            
                        }
                        for key, value in list(data.items())[-200:]
                    ]
                }

                return json.dumps(result)
                
            else:
                return {'status': 'Unable to extract data - from unknown reasons'}    