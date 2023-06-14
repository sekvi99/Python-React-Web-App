from consts import SECRET_KEY
import redis

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
    SESSION_REDIS = redis.from_url("redis://172.17.0.2:6379") # Ip of my redis container