from fastapi import APIRouter
import subprocess
import json

router = APIRouter(prefix="/api", tags=["vulnerabilities"])

@router.get("/vulnerabilities")
def get_vulnerabilities():

    try:

        result = subprocess.run(
            [
                "trivy",
                "image",
                "--format",
                "json",
                "postgres:15"
            ],
            capture_output=True,
            text=True
        )

        data = json.loads(result.stdout)

        vulnerabilities = []

        for result in data.get("Results", []):

            for vuln in result.get("Vulnerabilities", []):

                vulnerabilities.append({
                    "id": vuln.get("VulnerabilityID"),
                    "package": vuln.get("PkgName"),
                    "severity": vuln.get("Severity"),
                    "title": vuln.get("Title")
                })

        return vulnerabilities

    except Exception as e:
        return {"error": str(e)}
