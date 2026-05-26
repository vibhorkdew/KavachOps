from fastapi import APIRouter

router = APIRouter()

@router.get("/threats")
def get_threats():

    return [
        {
            "severity": "HIGH",
            "source": "Falco",
            "description": "Suspicious shell execution"
        }
    ]
