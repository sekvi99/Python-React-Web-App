from consts import SECRET_KEY
import redis
import os

class ApplicationConfig:
    """
    Flask applicataion configuration class
    """
    # Enabling secret key
    SECRET_KEY=SECRET_KEY
    
    # Sql alchemy settings
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = r"sqlite:///./db.sqlite"
    
    # Redis session settings
    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    if "FLASK_RUN_FROM_CLI" in os.environ:
        # Running via `flask run`
        SESSION_REDIS = redis.from_url("redis://172.17.0.2:6379")
    else:
        # Running via `docker-compose`
        SESSION_REDIS = redis.from_url("redis://redis-db")