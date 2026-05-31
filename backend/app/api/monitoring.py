from fastapi import APIRouter
import docker

router = APIRouter(
    prefix="/api",
    tags=["monitoring"]
)

@router.get("/monitoring")
def get_monitoring():

    client = docker.from_env()

    containers = client.containers.list()

    data = []

    for c in containers:

        data.append({
            "name": c.name,
            "status": c.status
        })

    return {
        "count": len(data),
        "containers": data
    }
