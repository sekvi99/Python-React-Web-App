from ..abstract_api_request import AbstractAPIRequestManager
from dataclasses import dataclass, field
import requests
import datetime
import json

@dataclass(kw_only=True)
class CurrencyRatesRequestManager(AbstractAPIRequestManager):
    """
    Definition of class that handles calls for currency rates data.

    Args:
        AbstractAPIRequestManager (_type_): Inheritence of AbstractAPIRequestManager.
    """
    available_currencies: list[str] = field(default_factory=lambda: ['EUR', 'GBP', 'USD']) # List of available currencies
    
    def process_api_response(self, currency: str) -> dict:
        """
        Declaration of implemented interface. \n
        Method checks whether send currency is avaiable, if it is method fetch data from provided endpoint.

        Args:
            symbol (str): String representation of currency.

        Returns:
            dict[str, Any]: Data in .json format.
        """
        if currency not in self.available_currencies:
            return {'status': f'Could not get data for provided currency: {currency}'}
        
        else:
            self.endpoint = self.endpoint.format(CURRENCY=currency)
            response = requests.request(self.request_type, self.endpoint)
            
            if response.status_code == 200:
                data = (response.json()).get('main')
                
                result =  {
                    'data':[
                        {
                            'date': datetime.datetime.fromtimestamp(frame[0]/ 1000).strftime('%Y-%m-%d %H:%M:%S'),
                            'value': float(frame[1]),
                        }
                        for frame in data[-200:]
                    ]
                }
                
                return json.dumps(result)
                    
                
            else:
                return {'status': 'Unable to extract data - from unknown reasons'}
        