from ..consts import API_KEY
from functools import wraps

# def api_key_required(function):
#     @wraps(function)
#     def decorated_function(*args, **kwargs):
#         # Get the API key from the request headers or query parameters
#         api_key = request.headers.get()