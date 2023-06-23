import sys
from functools import wraps
from flask import request, jsonify
from functools import wraps
sys.path.append('..')
from consts import API_KEY

def require_api_key(view_func):
    @wraps(view_func)
    def decorated_func(*args, **kwargs):
        # Check if the API key is provided in the request headers
        if 'API-Key' not in request.headers or request.headers['API-Key'] != API_KEY:
            return jsonify({'error': 'Invalid API key'}), 401  # Unauthorized
        return view_func(*args, **kwargs)
    return decorated_func