from typing import Final
import os
from api_env.env_file_handler import EnvFileManager

# Setting path to file on every os
APP_DIR: Final[str] = os.path.dirname(os.path.abspath(__file__))

# Setting path to .env file
ENV_FILE_PATH: Final[str] = os.path.join(APP_DIR, 'api_env/.env')

# Creating instance
ENV_FILE_HANDLER: Final[EnvFileManager] =  EnvFileManager(ENV_FILE_PATH)

# Getting Variables From .env file
STOCK_EXCHANGE_URL: Final[str] = ENV_FILE_HANDLER.get_variable('STOCK_EXCHANGE_URL')
CURRENCY_RATES_URL: Final[str] = ENV_FILE_HANDLER.get_variable('CURRENCY_RATES_URL')

# Regex definition
URL_REGEX: Final[str] = r'^(https?:\/\/(?:www\.)?alphavantage\.co\/query\?function=TIME_SERIES_DAILY&symbol=.+&outputsize=full&apikey=demo|https?:\/\/(?:www\.)?bankier\.pl\/new-charts\/get-data\?symbol=.+PLN&intraday=false&type=area&max_period=true)$'





