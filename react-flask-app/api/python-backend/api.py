from flask import Flask
from consts import *
from python_api_data.api_calls.endpoint_api_calls.currency_rates_request import CurrencyRatesRequestManager
from python_api_data.api_calls.endpoint_api_calls.stock_exchange_request import StockMarketAPIRequestManager

app = Flask(__name__)

@app.route('/getCurrencyData/<currency>', methods=['GET'])
def refresh_currency_rates(currency: str) -> dict:
    """
    Declaration of endpoint for fetching currency rates and return them in propper .json format.

    Args:
        currency (str): String representation of currency to api endpoint.
    """
    cr = CurrencyRatesRequestManager(
        validate_regex=URL_REGEX,
        request_type='GET',
        endpoint=CURRENCY_RATES_URL,   
    )
    return cr.process_api_response(currency)

@app.route('/getStockMarketData/<symbol>', methods=['GET'])
def refresh_stock_market_data(symbol: str) -> dict:
    """
    Declaration of endpoint for fetching stock market data and return them in propper .json format.

    Args:
        symbol (str): String representation of currency to api endpoint.
    """
    sm = StockMarketAPIRequestManager(
        validate_regex=URL_REGEX,
        request_type='GET',
        endpoint=STOCK_EXCHANGE_URL
    )
    return sm.process_api_response(symbol)