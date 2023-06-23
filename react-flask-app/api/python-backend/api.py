from flask import Flask, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session
from config import ApplicationConfig
from consts import *
from python_api_data.api_calls.endpoint_api_calls.currency_rates_request import CurrencyRatesRequestManager
from python_api_data.api_calls.endpoint_api_calls.stock_exchange_request import StockMarketAPIRequestManager
from models.models import db, User
import re
from decorators.decorators import require_api_key

"""
Create Flask Application and instance of db
"""
app = Flask(__name__)
app.config.from_object(ApplicationConfig)

# Setting password hashing
bcrypt = Bcrypt(app)
#Setting cors for server
CORS(app, supports_credentials=True)
# Creating server session
server_session = Session(app)
db.init_app(app)

# Create all of declared models for database
with app.app_context():
    db.create_all()

@app.route('/api/getCurrencyData/<currency>', methods=['GET'])
@require_api_key
def refresh_currency_rates(currency: str) -> dict:
    """
    Declaration of endpoint for fetching currency rates and return them in propper .json format.

    Args:
        currency (str): String representation of currency to api endpoint.
    """
    cr = CurrencyRatesRequestManager(
        validate_regex=URL_REGEX,
        request_type='GET',
        endpoint=CURRENCY_RATES_URL
    )
    return cr.process_api_response(currency)

@app.route('/api/getStockMarketData/<symbol>', methods=['GET'])
@require_api_key
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

@app.route('/@me', methods=['GET'])
def get_current_user() -> dict[str, str]:
    user_id = session.get('user_id') # Id of current user
    
    if not user_id:
        # User is not logged in or removed/ deleted his cookie session
        return {'error': 'Unauthorized'}, 401
    
    user = User.query.filter_by(id=user_id).first()
    return {
        'id': user.id,
        'email': user.email
    }

@app.route('/register', methods=["POST"])
def register_user() -> dict[str, str]:
    """
    Declaration of an API Endpoint for user registration.

    Returns:
        dict[str, str]: Dictionary representation of new user.
    """
    # Getting values from request
    email = request.json["email"]
    password = request.json["password"]
    
    # Validate e-mail format
    email_regex = r'^\w+@\w+\.\w+$'
    if not re.match(email_regex, email):
        return {'error': 'Invalid email format'}, 400

    if User.query.filter_by(email=email).first() is not None:
        # If user exist return below .json response and 409 == Conflict
        return {'error': 'User already exists'}, 409

    # Created hash password and new user to db
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    #session["user_id"] = new_user.id

    return {
        'id': new_user.id,
        'email': new_user.email
    }

@app.route('/login', methods=['POST'])
def login_user() -> dict[str, str]:
    """
    Declaration of an API Endpoint for user login.

    Returns:
        dict[str, str]: Dictionary representation of existing user.
    """
    # Getting values from request
    email = request.json['email']
    password = request.json['password']
    
    user = User.query.filter_by(email=email).first()
    if user is None:
        # If user with passed credentials does not exist return error + 401 == Unauthorized
        return {'error': 'Unauthorized'}, 401
    
    if not bcrypt.check_password_hash(user.password, password):
        # If user with provided email exist but hashes of password does not match return unatuthorized
        return {'error': 'Unauthorized'}, 401

    session['user_id'] = user.id

    return {
        'id': user.id,
        'email': user.email
    }

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
