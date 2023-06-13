from dataclasses import dataclass
from typing import Any, Type


@dataclass
class SingletonMeta(type):
    """
    Definition of singleton pattern that will be used as metaclass when needed.
    """
    _instances: dict[Type[Any], Any] = {} # Dictionary object that stores created instances of class.

    def __call__(cls: Type[Any], *args: Any, **kwargs: Any) -> Any:
        """
        Overriding method call that is called when instance of an object is called as an function.

        Args:
            cls (Type[Any]): Type of any class.

        Returns:
            Any: Any instance of an any class object.
        """
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]