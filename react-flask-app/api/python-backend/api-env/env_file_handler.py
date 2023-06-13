from abc import ABC, abstractmethod
from dataclasses import dataclass
from pathlib import Path

from dotenv import dotenv_values

from ..singleton_definition import SingletonMeta


class AbstractEnvFileManager(ABC):
    """
    Class for interface declaration to propper handle .env file.

    Args:
        ABC (_type_): Declaration of Inheritence.

    """
    
    @abstractmethod
    def get_variable(self, variable_name: str) -> str:
        """
        Declaration of common interface for derivative class thatn needs to be implemented. \n
        Method should return value for provided env variable name.

        Args:
            variable_name (str): String representation of variable name.

        Returns:
            str: String representation of variable value.
        """
        
@dataclass(kw_only=True)
class EnvFileManager(AbstractEnvFileManager, metaclass=SingletonMeta):
    """
    Definition of class that handles .env file.

    Args:
        AbstractEnvFileManager (_type_): Inheritence of declared interfaces for env files.
        metaclass (_type_, optional): Implementing singleton that will ensure us for only one instance of EnvFileManager class. Defaults to SingletonMeta.
    """
    
    env_file_path: str # Path to .env file
    
    def __init__(self, file_path: str) -> None:
        """
        Declaration of init method that setts env_file_path when there's an actual file under provided path.

        Args:
            file_path (str): String representation of file path.
        """
        path = Path(file_path)
        if path.is_file():
            self.env_file_path = file_path
            

    def get_variable(self, variable_name: str) -> str:
        """
        Impelemntation of inherited interface.\n
        Method extract value from .env file by its name.

        Args:
            variable_name (str): String representation of variable name.

        Raises:
            FileNotFoundError: Occures when trying to access file that does not exist in current OS.

        Returns:
            str: String representation of .env variable.
        """
        if not self.env_file_exists:
            raise FileNotFoundError(f"The .env file '{self.env_file_path}' does not exist.")

        env_variables = dotenv_values(self.env_file_path)
        return env_variables.get(variable_name)
        
    
    
    