import re
from abc import ABC, abstractmethod
from dataclasses import dataclass, field


@dataclass
class AbstractAPIRequestManager(ABC):
    """
    Definition of abstract class that declares common interfaces as an abstract method that needs to be implemented in order to propper handle api endpoint.

    Args:
        ABC (_type_): Definiton of inheritence.

    Raises:
        ValueError: Occures when provided url does not match with regex expression or request type is diffrent than GET or POST.
    """
    validate_regex: str # Regex expression to check whether url is in correct form
    request_type: str  = field(init=False) # Expected GET or Post
    endpoint: str = field(init=False) # Url representation of endpoint
    
    def __post_init__(self) -> None:
        """Post init method that sets endpoint and request type if they're correct.

        Raises:
            ValueError: Occures when url format is invalid.
            ValueError: Occures when request type is diffrent than GET or POST.
        """
        if self.endpoint and not re.match(self.validate_regex, self.endpoint):
            raise ValueError('Invalid URL Format')
        
        if self.request_type not in ['GET', 'POST']:
            raise ValueError(f'Provided wrong request type: {self.request_type} - expected GET or POST.')
    
    @property
    def endpoint(self) -> str:
        """
        Declaration of enpoint getter for endpoint field.

        Returns:
            str: String representation of endpoint.
        """
        return self._endpoint
    
    @endpoint.setter
    def endpoint(self, url: str) -> None:
        """
        Declaration of setter for endpoint field.

        Args:
            url (str): String representation of endpoint url.

        Raises:
            ValueError: Occures when url does not match provided regex expression.
        """
        if not re.match(self.validate_regex, url):
            raise ValueError('Invalid URL Format')
        self._endpoint = url
        
    @property
    def request_type(self) -> str:
        """
        Declaration of getter for request_type field.

        Returns:
            str: String representation of request_type.
        """
        return self._request_type
    
    @request_type.setter
    def request_type(self, method: str) -> None:
        """
        Declaration of setter for request_type field.

        Args:
            type (str): String representation of request type.

        Raises:
            ValueError: Occures when request type is diffrent than GET or POST.
        """
        if method not in ['GET', 'POST']:
            raise ValueError('Request type can not be diffrent than GET or POST')
        self._request_type = method
        
    @abstractmethod
    def process_api_response(self) -> dict:
        """
        Declaration of interface that needs to be implemented in derivative classes. \n
        Method should process data fetched from api endpoint and return its dictionary representation.

        Returns:
            dict: Dictionary representation of fetched data.
        """
        ...
        
    # @abstractmethod
    # def save_data_to_db(self) -> None:
    #     ...
        
        